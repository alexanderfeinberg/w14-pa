import fruits from "./mockData/fruits.json";
import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import { Route, Switch } from "react-router-dom";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import FavoriteFruit from "./components/FavoriteFruit";
import FruitShow from "./components/FruitShow";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <FruitsIndex fruits={fruits} />
        </Route>
        <Route exact path="/fruits/new">
          <FruitForm fruits={fruits} />
        </Route>
        <Route path="/fav-fruit">
          <FavoriteFruit fruits={fruits} />
        </Route>

        <Route path="/set-fav-fruit">
          <SetFavoriteFruit fruits={fruits} />
        </Route>
        <Route
          path={`/fruits/:fruitId`}
          // component={FruitShow}
        >
          <FruitShow fruits={fruits} />
        </Route>

        <Route render={() => <div>Page Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
