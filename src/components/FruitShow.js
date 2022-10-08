import { useParams } from "react-router-dom";

const findFruit = (id, fruits) => {
  id = Number(id);
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
    <div class="fruit-show">
      <h2>{fruit.name}</h2>
      <p>{fruit.color}</p>
      <p>{fruit.sweetness}</p>
      <p>{fruit.seeds}</p>
    </div>
  );
}

export default FruitShow;
