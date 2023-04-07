import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav className="nav__box nav__box--entering">
      <NavLink
        to="/register"
        className="nav__item--entering"
        activeclassname="nav__item--active"
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        className="nav__item--entering"
        activeclassname="nav__item--active"
      >
        Log in
      </NavLink>
    </nav>
  );
}
