import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PublicRoute({
  children,
  restricted = false, //ограничен
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {/* {children} */}
      {/* {!shouldRedirect ? children : <Redirect to={redirectTo} />} */}
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
