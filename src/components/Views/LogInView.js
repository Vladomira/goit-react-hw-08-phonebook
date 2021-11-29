import { useState } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Form, Col, FloatingLabel } from "react-bootstrap";
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form__label">Email</Form.Label>
          <Form.Control
            className="form__input"
            onChange={handleChange}
            value={email}
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form__label">Password</Form.Label>
          <Form.Control
            placeholder="password"
            className="form__input"
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
            required
          />
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
