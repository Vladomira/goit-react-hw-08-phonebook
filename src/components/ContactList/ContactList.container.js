// import { connect } from "react-redux";
// import contactsActions from "../../redux/contacts-actions";
// import ContactList from "./ContactList";

// //"selector"
// const filterContacts = (allContacts, filter) => {
//   const normalizeFilter = filter.toLowerCase();
//   return allContacts.filter((el) =>
//     el.name.toLowerCase().includes(normalizeFilter)
//   );
// };
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: filterContacts(items, filter),
// });
// const mapDispatchToProps = (dispatch) => ({
//   onBtnDelete: (id) => dispatch(contactsActions.deleteContact(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
