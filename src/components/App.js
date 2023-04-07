import { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { authOperations, authSelectors } from "../redux/auth";
import Spinner from "./Loader/Spinner";
import Container from "./Container/Container";
import AppBar from "./AppBar";
import NotFoundPage from "./pages/HomeView";
import "../styles/index.scss";

import HomeView from "./pages/HomeView";
import RegisterView from "./pages/RegisterView";
import LogInView from "./pages/LogInView";
import ContactsView from "./pages/ContactsView";

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
      <Helmet>
        <title>Phonebook</title>
        <meta name="description" content="Contacts Phonebook" />
      </Helmet>

      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index path="/" element={<HomeView />} />
              <Route index path="*" element={<NotFoundPage />} />
              <Route path="login" element={<LogInView />} />
              <Route path="contacts" element={<ContactsView />} />
              <Route path="register" element={<RegisterView />} />
            </Route>
          </Routes>
        </>
      )}
    </Container>
  );
}
export default App;
