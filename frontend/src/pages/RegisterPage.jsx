import { Input, Button, Card } from "../components/ui";
import { useForm } from "react-hook-form";
import axios from 'axios'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async(data) => {  
    const res = await axios.post('http://localhost:3000/api/signup',data,{  
      withCredentials: true,  
    })
    console.log(res)
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2x1 font-bold">RegisterPage</h3>

        <form onSubmit={onSubmit}>
          <Input
            placeholder="Ingrese su nombre completo"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && <p className="text-red-500">nombre es requerido</p>}

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
  );
};

export default RegisterPage;
