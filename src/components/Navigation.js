import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import defaultAvatar from "../components/images/phone.png";

export default function Navigation() {
  const logo = defaultAvatar;
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <div className="logo__box">
        <img className="logo__img" src={logo} alt="" />
        <p className="logo__text">Phonebook </p>
      </div>

      <nav className="nav__box">
        <NavLink
          to="/"
          exact
          className="nav__item "
          activeClassName="nav__item--active"
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <>
            <NavLink
              to="/contacts"
              exact
              className="nav__item nav__item--contacts"
              activeClassName="nav__item--active "
            >
              Contacts
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
}
