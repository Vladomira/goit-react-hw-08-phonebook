import "react-toastify/dist/ReactToastify.css";
import { Form, FloatingLabel } from "react-bootstrap";

export function UserForm({ name, email, handleChange }) {
  return (
    <>
      <FloatingLabel controlId="floatingName" className="mb-3" label="Name">
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
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          placeholder="name@example.com"
          className="form__input"
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          required
          autoComplete="false"
        />
      </FloatingLabel>
    </>
  );
}
