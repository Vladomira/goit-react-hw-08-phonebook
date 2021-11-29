import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { contactActions, contactsSelectors } from "../../redux/contacts";

const Filter = () => {
  const value = useSelector(contactsSelectors.getFiltredValue);
  const dispatch = useDispatch();
  return (
    <>
      <div className="filter__box">
        {/* <h3 className=" filter__title">Find contacts by name</h3> */}
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Control
            className="form__input filter__input"
            // className=""
            placeholder="Searchig"
            type="text"
            defaultValue={value}
            onChange={(e) =>
              dispatch(contactActions.filtredContacts(e.target.value))
            }
          />
        </Form.Group>
        {/* </> */}
      </div>
    </>
  );
};
Filter.propTypes = {
  filtredContacts: PropTypes.func,
  value: PropTypes.string,
};
export default Filter;
