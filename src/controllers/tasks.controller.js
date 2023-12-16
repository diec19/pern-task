import {pool} from '../db.js'

export const getAllTasks = (req, res)=> res.send('obteniendo tareas')

export const getTask = (req, res)=> res.send('obteniendo tareas')



export const createTask = async(req, res)=>{
    const {title, description}=req.body;

    try{
    //db insert
   const {rows} =await pool.query('INSERT INTO task (title,description) VALUES ($1,$2)', [title, description])
    
   console.log(rows)
    res.send("creando tarea")
}catch (error){

    return res.send
}

export const updateTask = (req, res)=> res.send('obteniendo tareas')

export const deleteTasks = (req, res)=> res.send('obteniendo tareas')

