import bcrypt from "bcrypt";
import { pool } from "../db.js";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";


export const getAllUsers = async (req, res) => {
  console.log(req.userId)
  const result = await pool.query("SELECT * FROM users");
  console.log(result);
  return res.json(result.rows);
};


export const signin = async(req, res) => {
   const {email, password} = req.body

   const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])

   if (result.rowCount === 0){
    return res.status(400).json({
      message: 'El correo no esta registrado'
    })
   }
   const token = await createAccessToken({id: result.rows[0].id})

   res.cookie("token",token,{
    httpOnly: true,
    secure: true,
    sameSite:"none",
    maxAge: 24 * 60 * 60 * 1000, //1 dia
   });
   return res.json(result.rows[0]);
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;
    

    const result = await pool.query(
      "INSERT INTO users(name,email,password,gravatar) VALUES($1, $2, $3,$4) RETURNING *",
      [name, email, hashedPassword,gravatar]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    res.cookie('token',token,{
       httpOnly:true,
       secure: true,
       sameSite:'none',
       maxAge: 24 * 60 * 60 * 1000
    })

    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "el email ya esta registrado" });
    }
  }
};

export const signout = (req, res) =>{
  res.clearCookie('token');
  res.sendStatus(200)
};

export const profile = async(req, res) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1',[req.userId]);
  
  return res.json(result.rows[0]);
};
