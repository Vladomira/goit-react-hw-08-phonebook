import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

    toast.success(`${name} successfully added ;)`);
    scroll();

    return;
  };
  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header__box">
          <p className="form__header form__contacts--header logo__text">
            Your contacts
          </p>
        </div>

        <div className="form__contacts">
          <div className="form__contacts--box">
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label className="form__label form__contacts--label">
                Name
              </Form.Label>
              <Form.Control
                placeholder="Enter name"
                className="form__input form__contacts--input"
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
          </div>
          <div className="form__contacts--box">
            <Form.Group className="mb-3">
              <Form.Label className="form__label form__contacts--label">
                Phone
              </Form.Label>
              <Form.Control
                className="form__input form__contacts--input"
                onChange={handleChange}
                placeholder="(+380) 99 999 99 99"
                value={number}
                type="tel"
                name="number"
                data-action="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
                required
              />
            </Form.Group>
          </div>
        </div>
        <div>
          <button
            className="form__btn"
            color="primary"
            type="submit"
            disabled={!number || !name}
          >
            Add contact
          </button>
        </div>
      </form>
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

export default ContactForm;
