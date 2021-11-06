import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";

const Filter = ({ filter, onChange }) => (
  <div>
    <h3 className="contacts__title-find">Find contacts by name</h3>
    <label>
      <input
        className="contacts__input"
        type="text"
        defaultValue={filter}
        onChange={onChange}
      ></input>
    </label>
  </div>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.filtredContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
