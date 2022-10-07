import { Route, Link } from "react-router-dom";

function FruitsIndex({ fruits }) {
  return (
    <div className="fruits-index">
      <h2>Fruits Index</h2>

      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <Link to={`/fruits/${fruit.id}`} key={fruit.id}>
            {fruit.name}
          </Link>
        </li>
      ))}
      {/* {fruits.map((fruit) => (
        <Route path={`/fruits/${fruit.id}`}>
          <div>{fruit.name}</div>
        </Route>
      ))} */}
    </div>
  );
}

export default FruitsIndex;
