import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink exact={true} to="/">
        Home
      </NavLink>
      <NavLink to="/fruits/new">Enter a fruit</NavLink>
      <NavLink to="/fav-fruit">Favorite Fruit</NavLink>
      <NavLink to="/set-fav-fruit">Set Favorite Fruit</NavLink>
    </nav>
  );
}

export default Navigation;
