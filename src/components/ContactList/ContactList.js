import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

//////
const ContactList = ({ contacts, onBtnDelete }) => (
  <>
    <ul className="contacts__list">
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            deleteContact={onBtnDelete}
          />
        );
      })}
    </ul>
  </>
);

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onBtnDelete: PropTypes.func.isRequired,
};
export default ContactList;
// =========
