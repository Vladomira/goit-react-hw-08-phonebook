import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import Container from "./Container/Container";
import { authSelectors } from "../redux/auth";
import phoneLogo from "../components/images/phone.png";

export default function ApplicationBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const logo = phoneLogo;
  return (
    <>
      <header>
        <div className="header__container">
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer className="footer">
        <div className="logo__box">
          <img className="logo__img" src={logo} alt="phonebook" />
          <p className="logo__text">Phonebook </p>
        </div>
      </footer>
    </>
  );
}
