import { Input, Button, Card, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const {signin} =useAuth()

  const onSubmit = handleSubmit(async (data) => {
    signin(data)
    navigate("/profile")
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-4x1 font-bold my-2 text-center">Login</h3>

        <form onSubmit={onSubmit}>
          <Label htmlForm="email">Email</Label>
          <Input
            type="email"
            placeholder="Ingrese su Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <p className="text-red-500">email es requerido</p>}

          <Label htmlForm="password">Password</Label>
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
            <p>No tienes cuenta aun?</p>
            <Link to="/register" className="font-bold">
              Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
