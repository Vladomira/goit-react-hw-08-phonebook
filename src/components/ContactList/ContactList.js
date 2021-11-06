import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";
import contactsActions from "../../redux/contacts-actions";

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

//"selector"
const filterContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return allContacts.filter((el) =>
    el.name.toLowerCase().includes(normalizeFilter)
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});
const mapDispatchToProps = (dispatch) => ({
  onBtnDelete: (id) => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// =========
// const mapStateToProps = (state) => {
//   const { filter, items } = state.contacts;
//   const fitredContacts = filterContacts(items, filter);
//   return { contacts: fitredContacts };
// };
