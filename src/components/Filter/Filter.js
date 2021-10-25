import PropTypes from "prop-types";

const Filter = ({ filter, value }) => (
  <div>
    <h3 className="contacts__title-find">Find contacts by name</h3>
    <label>
      <input
        className="contacts__input"
        type="text"
        defaultValue={filter}
        onChange={value}
      ></input>
    </label>
  </div>
);
Filter.propTypes = {
  value: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
