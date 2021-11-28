import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import { authOperations, authSelectors } from "../../redux/auth";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      toast.success(`You registred  as ${name}`);
      setTimeout(() => history.push("/contacts"), 2000);
    }
  }, [isLoggedIn, history, name]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    reset();

    return;
  };

  const reset = () => {
    setName("");
    setPassword("");
    setEmail("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__header">Register Form</p>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label className="form__label">Name</Form.Label>
          <Form.Control
            className="form__input"
            placeholder="Enter your name"
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

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="form__label">Email address</Form.Label>
          <Form.Control
            placeholder="Enter email"
            className="form__input"
            onChange={handleChange}
            value={email}
            type="email"
            name="email"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword ">
          <Form.Label className="form__label">Password</Form.Label>
          <Form.Control
            placeholder="Password"
            className="form__input"
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
        </Form.Group>

        {/* <div className="form__btn-thumb"> */}
        <button
          className="form__btn"
          type="submit"
          disabled={!email || !name || !password}
        >
          Sign up
        </button>
        {/* </div> */}
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

////////////////
// const doubleName = (name) =>
//   contacts.find((el) => {
//     return el.name === name;
//   });
// const doubleNumber = (number) =>
//   contacts.find((el) => {
//     return el.number === number;
//   });

// if (doubleName(name)) {
//   return alert(`This ${name} already exist in database`);
// }
// if (doubleNumber(number)) {
//   return alert(`This ${number} already exist in database`);
// }
