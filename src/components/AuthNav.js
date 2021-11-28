import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav className="nav__box nav__box--entering">
      <NavLink
        to="/register"
        exact
        className="nav__item--entering"
        activeClassName="nav__item--active"
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        exact
        className="nav__item--entering"
        activeClassName="nav__item--active"
      >
        Log in
      </NavLink>
    </nav>
  );
}
