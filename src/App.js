import fruits from "./mockData/fruits.json";
import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import { Route, Switch } from "react-router-dom";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import FavoriteFruit from "./components/FavoriteFruit";
import FruitShow from "./components/FruitShow";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <FruitsIndex fruits={fruits} />} />
        <Route
          path="/fruits/new"
          render={() => <FruitForm fruits={fruits} />}
        />
        <Route
          path="/fav-fruit"
          render={() => <FavoriteFruit fruits={fruits} />}
        />

        <Route
          path="/set-fav-fruit"
          render={() => <SetFavoriteFruit fruits={fruits} />}
        />
        <Route
          path={`/fruits/:fruitId`}
          render={() => <FruitShow fruits={fruits} />}
        />
        <Route render={() => <div>Page Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
