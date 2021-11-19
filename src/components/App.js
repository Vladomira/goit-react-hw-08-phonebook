import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import * as operations from "redux/contacts-operations";
import { operations, contactsSelectors } from "redux/index";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Spinner from "../components/Loader/Spinner";
import "../styles/index.scss";

//
function App() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const loading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchForContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="header">Phonebook</h1>
      <ContactForm />

      {loading ? (
        <Spinner />
      ) : contacts.length > 0 ? (
        <>
          <Filter />

          <ContactList />
        </>
      ) : (
        <p className="contacts__title">No contacts</p>
      )}
    </div>
  );
}
export default App;
