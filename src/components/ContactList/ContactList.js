import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import { ListGroup } from "react-bootstrap";
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";

function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <section className="contacts__section">
      <ListGroup variant="flush" className="contacts__list">
        <h2 className="contacts__title">Contacts </h2>
        {contacts.map(({ name, number, id }) => {
          return <ContactItem key={id} name={name} number={number} id={id} />;
        })}
      </ListGroup>
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
