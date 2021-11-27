import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactsSelectors, operations } from "../../redux/contacts";

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const deleting = useSelector(contactsSelectors.getDeleting);

  return (
    <>
      <li id={id} key={id} className="contacts__item">
        {name}: <span className="contacts__number"> {number}</span>
        <button
          className="contacts__btn"
          disabled={deleting}
          onClick={() => {
            dispatch(operations.deleteContact(id));
            toast.success(`${name} removed ;)`);
          }}
        >
          Delete
        </button>
      </li>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
ContactItem.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
