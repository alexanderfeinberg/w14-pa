import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavFruitContext } from "../context/FavFruitContext";

const FavoriteFruit = ({ fruits }) => {
  const { favFruitId, setFavFruitId } = useContext(FavFruitContext);
  let [name] = fruits.filter((fruit) => fruit.id === favFruitId);
  let { name: fruitName } = name;
  console.log(name);
  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{fruitName}</NavLink>
    </div>
  );
};

export default FavoriteFruit;
