import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, FloatingLabel } from "react-bootstrap";
import { authOperations, authSelectors } from "../../redux/auth";
import { isPasswordError } from "helpers/handler-passwordError";
import { PasswordLabel } from "components/PasswordLabel/PasswordLabel";
import { UserForm } from "components/UserForm";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      toast.success(`You registred  as ${name}`);
      setTimeout(() => history.push("/contacts"), 2000);
    }
  }, [isLoggedIn, history, name]);

  useEffect(() => {
    isPasswordError(password, setPasswordError, null);
  }, [password]);

  const onBlur = ({ target: { value } }) => {
    isPasswordError(value, setPasswordError, true);
  };

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
    setPasswordError(false);
    setName("");
    setPassword("");
    setEmail("");
  };
  const disabled =
    !email.length > 0 ||
    !name.length > 0 ||
    !password.length > 0 ||
    passwordError;

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__header">Register</p>
        <UserForm name={name} email={email} handleChange={handleChange} />

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            placeholder="Password"
            className="form__input"
            onChange={handleChange}
            onBlur={onBlur}
            value={password}
            type="password"
            name="password"
            required
            autoComplete="false"
          />
          <PasswordLabel passwordError={passwordError} />
        </FloatingLabel>

        <button className="form__btn" type="submit" disabled={disabled}>
          Sign up
        </button>
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
