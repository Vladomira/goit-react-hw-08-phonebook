import { useState } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import { authOperations } from "../../redux/auth";

function LogInView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
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

    dispatch(authOperations.logIn({ email, password }));

    reset();

    return;
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__header">Log in Form</p>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="form__label">Email address</Form.Label>
          <Form.Control
            className="form__input"
            onChange={handleChange}
            value={email}
            type="email"
            name="email"
            placeholder="name@example.com"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="form__label">Password</Form.Label>
          {/* <Col sm="10"> */}
          <Form.Control
            placeholder="password"
            className="form__input"
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
          {/* </Col> */}
        </Form.Group>

        <div className="form__btn-thumb">
          <button
            className="form__btn"
            type="submit"
            disabled={!email || !password}
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

export default LogInView;
// {/* <label className="form__label-box">
// <span className="form__label"> Password</span>
// <input
//   className="form__input"
//   onChange={handleChange}
//   id={shortid.generate()}
//   value={password}
//   type="password"
//   name="password"
//   // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   // title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
//   required
// />
// </label> */}

// const getName = useSelector(authSelectors.getUsername);

// const history = useHistory();
// const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

// useEffect(() => {
//   if (isLoggedIn) {
//     // toast.success(`You entered in system as ${getName}`);
//     setTimeout(() => history.push("/contacts"), 2000);
//   }
// });
