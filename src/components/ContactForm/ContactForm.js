import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";
// import InputMask from "react-input-mask";
import { Form } from "react-bootstrap";
import { operations, contactsSelectors } from "../../redux/contacts";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(contactsSelectors.getContacts);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    if (doubleName(name)) {
      return alert(`This ${name} already exist in database`);
    }
    if (doubleNumber(number)) {
      return alert(`This ${number} already exist in database`);
    }
    dispatch(operations.addContact({ name, number }));
    return;
  };

  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__header">Your contacts</p>

        {/* <div className="form__contacts"> */}
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label className="form__label ">Name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            className="form__input"
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            data-action="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form__label">Phone</Form.Label>
          <Form.Control
            className="form__input "
            placeholder="(+380) 99 999 99 99"
            // mask={mask}
            // mask="(+380) 99 999 99 99"
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            data-action="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
          {/* <InputMask mask="(+380) 99 999 99 99" /> */}
        </Form.Group>
        {/* </div> */}
        {/* <div className="form__btn--box"> */}
        <button
          className="form__btn"
          variant="contained"
          color="primary"
          type="submit"
          disabled={!number || !name}
        >
          Add contact
        </button>
        {/* </div> */}
      </form>
    </>
  );
}

export default ContactForm;
