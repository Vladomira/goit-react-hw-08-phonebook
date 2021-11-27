import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { operations, contactsSelectors } from "../../redux";
import { authOperations } from "../../redux/auth";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const doubleName = (name) =>
  //   contacts.find((el) => {
  //     return el.name === name;
  //   });
  // const doubleNumber = (number) =>
  //   contacts.find((el) => {
  //     return el.number === number;
  //   });

  const handleChange = ({ target: { name, value } }) => {
    // const { name, value } = e.currentTarget;

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
    // reset();
    // if (doubleName(name)) {
    //   return alert(`This ${name} already exist in database`);
    // }
    // if (doubleNumber(number)) {
    //   return alert(`This ${number} already exist in database`);
    // }
    // console.log({ name, email, password }, "{ name, email, password }");
    dispatch(authOperations.register({ name, email, password }));
    reset();

    return;
  };
  // const scroll = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     // top: 1000,
  //     behavior: "smooth",
  //   });
  // };
  const reset = () => {
    setName("");
    setPassword("");
    setEmail("");
  };
  return (
    <>
      <form className="form__box" onSubmit={handleSubmit}>
        <p>Register Form</p>
        <div className="form__label-box">
          <label className="form__label">
            <span className="form__label"> Name</span>
          </label>
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
        </div>
        <label className="form__label-box">
          <span className="form__label"> Email</span>
          <input
            className="form__input"
            onChange={handleChange}
            id={shortid.generate()}
            value={email}
            type="email"
            name="email"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
        </label>
        <label className="form__label-box">
          <span className="form__label"> Password</span>
          <input
            className="form__input"
            onChange={handleChange}
            id={shortid.generate()}
            value={password}
            type="password"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
        </label>

        <div className="form__btn-thumb">
          <button
            className="form__addBtn"
            type="submit"
            disabled={!email || !name || !password}
          >
            Sign up
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
