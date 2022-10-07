import { Route, Link } from "react-router-dom";

function FruitsIndex({ fruits }) {
  console.log(fruits);
  return (
    <div className="fruits-index">
      <h2>Fruits Index</h2>

      {fruits.map((fruit) => (
        <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
      ))}
      {fruits.map((fruit) => (
        <Route path={`/fruits/${fruit.id}`}>
          <div>{fruit.name}</div>
        </Route>
      ))}
    </div>
  );
}

export default FruitsIndex;
