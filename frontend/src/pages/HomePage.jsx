import { Card } from "../components/ui";
import { useAuth } from "../context/AuthContext";
const HomePage = () => {
  const data = useAuth();
  console.log(data);
  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">Home Page</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          voluptas nobis nisi magnam quae, aut natus laborum quasi harum
          consequatur placeat. Eum porro possimus iste tempora minus iure at
          maxime?
        </p>
      </Card>
    </div>
  );
};

export default HomePage;
