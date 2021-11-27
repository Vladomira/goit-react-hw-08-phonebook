import { useEffect, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { authOperations, authSelectors } from "../redux/auth";
import Container from "./Container/Container";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PrivateRoute";
import AppBar from "./AppBar";
import "../styles/index.scss";

const HomeView = lazy(() => import("./Views/HomeView"));
const RegisterView = lazy(() => import("./Views/RegisterView"));
const LogInView = lazy(() => import("./Views/LogInView"));
const ContactsView = lazy(() => import("./Views/ContactsView"));
//
function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(
  //   authSelectors.getIsFetchingCurrrent
  // );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {/* {isFetchingCurrentUser ? (
        <h1>react skeleton</h1>
      ) : ( */}
      <>
        <AppBar />
        {/* <h1 className="header">Phonebook</h1> */}
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route exact path="/register" component={RegisterView}></Route>
            <Route exact path="/login" component={LogInView}></Route>

            {/* <PublicRoute exact path="/" >
              <HomeView />
            </PublicRoute> */}

            {/* <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute> */}
            {/* 
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LogInView />
            </PublicRoute>  */}

            <PrivateRoute
              exact
              path="/contacts"
              redirectTo="/login"
              // component={ContactsView}
            >
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
      {/* )} */}
    </Container>
  );
}
export default App;
//  {/* <Route exact path="/" component={HomeView}></Route> */}
//           {/* <Route exact path="/register" component={RegisterView}></Route>
//           <Route exact path="/login" component={LogInForm}></Route> */}
