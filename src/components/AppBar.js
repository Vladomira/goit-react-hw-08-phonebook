import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import { authSelectors } from "../redux/auth";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(authSelectors.getIsLoggedIn, "authSelectors.getIsLoggedIn");
  return (
    <header>
      <Navigation />
      {/* <UserMenu />
      <AuthNav /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
