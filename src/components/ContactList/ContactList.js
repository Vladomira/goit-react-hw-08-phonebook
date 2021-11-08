import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import actions from "../../redux/contacts-actions";
import ContactItem from "./ContactItem";
import { getVisibleContacts } from "../../redux/selector";

////
function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));
  return (
    <>
      <ul className="contacts__list">
        {contacts.map(({ name, number, id }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
              deleteContact={() => onDeleteContact(id)}
            />
          );
        })}
      </ul>
    </>
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
  onBtnDelete: PropTypes.func.isRequired,
};

export default ContactList;
