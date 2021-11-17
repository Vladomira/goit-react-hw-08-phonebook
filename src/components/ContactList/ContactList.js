import { useSelector } from "react-redux";
// import { useEffect } from "react";
import PropTypes from "prop-types";
// import shortid from "shortid";
import ContactItem from "./ContactItem";
import { contactsSelectors } from "../../redux";

const shortid = require("shortid");
////
function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(operations.fetchForContacts);
  // }, [dispatch]);
  // console.log(contacts, "contacts");

  return (
    <>
      <ul className="contacts__list">
        {contacts.map(({ name, number, id }) => {
          return (
            <ContactItem
              key={shortid.generate()}
              name={name}
              number={number}
              // id ={shortid.generate()}
              id={id}
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
  // onBtnDelete: PropTypes.func.isRequired,
};

export default ContactList;
