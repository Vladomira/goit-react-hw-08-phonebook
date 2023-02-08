import { useEffect, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "react-router";
import { authOperations, authSelectors } from "../redux/auth";
import Spinner from "./Loader/Spinner";
import Container from "./Container/Container";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AppBar from "./AppBar";
import "../styles/index.scss";

const HomeView = lazy(() => import("./Views/HomeView"));
const RegisterView = lazy(() => import("./Views/RegisterView"));
const LogInView = lazy(() => import("./Views/LogInView"));
const ContactsView = lazy(() => import("./Views/ContactsView"));

function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrrent
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<Spinner />}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <RegisterView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LogInView />
              </PublicRoute>

              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
export default App;
