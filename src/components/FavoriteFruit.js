import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavFruitContext } from "../context/FavFruitContext";

export const findFruit = (fruits, favFruitId) => {
  let [name] = fruits.filter((fruit) => fruit.id === favFruitId);
  let { name: fruitName } = name;
  return fruitName;
};

const FavoriteFruit = ({ fruits }) => {
  const { favFruitId, setFavFruitId } = useContext(FavFruitContext);
  let fruitName = findFruit(fruits, favFruitId);

  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{fruitName}</NavLink>
    </div>
  );
};

export default FavoriteFruit;
