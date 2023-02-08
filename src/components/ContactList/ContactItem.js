import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ListGroup, Button } from "react-bootstrap";
import deletingImg from "../images/trash2.png";
import { contactsSelectors, operations } from "../../redux/contacts";

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const deleting = useSelector(contactsSelectors.getDeleting);
  const removeImg = deletingImg;
  return (
    <>
      <ListGroup.Item id={id} key={id} className="contacts__item">
        <Button
          variant="outline-danger"
          className="contacts__btn"
          disabled={deleting}
          onClick={() => {
            dispatch(operations.deleteContact(id));
            toast.success(`${name} removed ;)`);
          }}
        >
          <img className="contacts__remove-img" src={removeImg} alt="" />
        </Button>
        <span className="contacts__name">{name}:</span>
        <span className="contacts__number">{number}</span>
      </ListGroup.Item>
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
