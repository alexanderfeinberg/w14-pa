import { useParams } from "react-router-dom";

const findFruit = (id, fruits) => {
  for (let fruit of fruits) {
    if (fruit.id === id) {
      return fruit;
    }
  }
  return null;
};

function FruitShow({ fruits }) {
  let { fruitId } = useParams();
  let fruit = findFruit(fruitId, fruits);

  return (
    <div className="fruit-show">
      <h2>{fruit.name}</h2>
      <p>Color: {fruit.color}</p>
      <p>Sweetness: {fruit.sweetness}</p>
      <p>Seeds: {fruit.seeds}</p>
    </div>
  );
}

export default FruitShow;
