import { Input, Button, Card, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const {signup} = useAuth()
 const navigate = useNavigate()

  const onSubmit = handleSubmit(async(data) => {  
    await signup(data)
    navigate('/profile')
    
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
      <h3 className="text-4x1 font-bold my-5 text-center">Register</h3>

        <form onSubmit={onSubmit}>
        <Label htmlForm="name">
             Nombre y Apellido
           </Label>
          <Input
            placeholder="Ingrese su nombre completo"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && <p className="text-red-500">nombre es requerido</p>}

          <Label htmlForm="email">
             Email
           </Label>
          <Input
            type="email"
            placeholder="Ingrese su Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <p className="text-red-500">email es requerido</p>}
           
          <Label htmlForm="password">
             Password
           </Label>
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

          <div className="flex justify-between my-4">
            <p>Ya tengo una cuenta</p>
            <Link to="/login" className="font-bold">
              Register
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
