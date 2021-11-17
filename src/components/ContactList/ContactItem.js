import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
// import shortid from "shortid";
import { deleteContact } from "../../redux/contacts-operations";

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <li id={id} key={id} className="contacts__item">
        {name}: <span> {number}</span>
        <button
          className="contacts__btn"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
}
ContactItem.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  // deleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
