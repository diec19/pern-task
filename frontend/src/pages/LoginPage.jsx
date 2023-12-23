import { Input, Button, Card } from "../components/ui";
import { useForm } from "react-hook-form";
import axios from 'axios'

const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async(data) => {  
    const res = await axios.post('http://localhost:3000/api/signin',data,{  
      withCredentials: true,  
    })
    console.log(res)
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-4x1 font-bold my-2 text-center">Login</h3>

        <form onSubmit={onSubmit}>
          
        

         

          <Input
            type="email"
            placeholder="Ingrese su Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <p className="text-red-500">email es requerido</p>}

          <Input
            type="password"
            placeholder="Ingrese su password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="text-red-500">contraseña es requerida</p>
          )}

          <Button>Register</Button>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage