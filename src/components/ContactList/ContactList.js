import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";

function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <section className="contacts__section">
      <h2 className="contacts__title">Contacts page</h2>
      <ul className="contacts__list">
        {contacts.map(({ name, number, id }) => {
          return <ContactItem key={id} name={name} number={number} id={id} />;
        })}
      </ul>
    </section>
  );
}
ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

export default ContactList;
