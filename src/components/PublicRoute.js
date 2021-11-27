import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = !isLoggedIn && restricted;
  //   console.log("shouldRedirect", shouldRedirect);
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : { children }}
    </Route>
  );
}
