import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { contactActions, contactsSelectors } from "../../redux/contacts";

const Filter = () => {
  const value = useSelector(contactsSelectors.getFiltredValue);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h3 className="contacts__title-find">Find contacts by name</h3>
        <label>
          <input
            className="contacts__input"
            type="text"
            defaultValue={value}
            onChange={(e) =>
              dispatch(contactActions.filtredContacts(e.target.value))
            }
          ></input>
        </label>
      </div>
    </>
  );
};
Filter.propTypes = {
  filtredContacts: PropTypes.func,
  value: PropTypes.string,
};
export default Filter;
