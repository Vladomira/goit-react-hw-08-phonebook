import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import { addContact } from "../../redux/contacts-operations";
import { getContacts } from "../../redux/contactsSelectors";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const doubleName = (name) =>
    contacts.find((el) => {
      return el.name === name;
    });
  const doubleNumber = (number) =>
    contacts.find((el) => {
      return el.number === number;
    });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // const doubleName = contacts.map((el) => console.log(el.name));

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    if (doubleName(name)) {
      return alert(`This ${name} already exist in database`);
    }
    if (doubleNumber(number)) {
      return alert(`This ${number} already exist in database`);
    }

    dispatch(addContact(name, number));

    return;
  };

  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <>
      <form className="form__box" onSubmit={handleSubmit}>
        <label className="form__label-box">
          <span className="form__label"> Name</span>
          <input
            className="form__input"
            value={name}
            onChange={handleChange}
            id={shortid.generate()}
            type="text"
            name="name"
            data-action="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <span className="form__label"> Number</span>
          <input
            className="form__input"
            onChange={handleChange}
            id={shortid.generate()}
            value={number}
            type="tel"
            name="number"
            data-action="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
        </label>

        <div className="form__btn-thumb">
          <button
            className="form__addBtn"
            type="submit"
            disabled={!number || !name}
          >
            Add contact
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
