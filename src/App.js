import fruits from "./mockData/fruits.json";
import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <FruitsIndex fruits={fruits} />
      <FruitForm fruits={fruits} />
    </div>
  );
}

export default App;
