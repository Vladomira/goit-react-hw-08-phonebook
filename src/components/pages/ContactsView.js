import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { operations, contactsSelectors } from "../../redux/contacts";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import ContactForm from "components/ContactForm";
import Spinner from "components/Loader/Spinner";
import { authSelectors } from "../../redux/auth";

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const contacts = useSelector(contactsSelectors.getContacts);
  const loading = useSelector(contactsSelectors.getLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(operations.fetchForContacts());
  }, [dispatch]);
  useEffect(() => {
    !isLoggedIn && navigate("/");
  }, [isLoggedIn]);
  return (
    <>
      <ContactForm />
      {loading ? (
        <Spinner />
      ) : contacts.length > 0 && isLoggedIn ? (
        <>
          <Filter />

          <ContactList />
        </>
      ) : (
        <p className="contacts__title">No contacts</p>
      )}
    </>
  );
}
