import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authOperations } from "../../redux/auth";

function LogInView() {
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

    // if (doubleName(name)) {
    //   return alert(`This ${name} already exist in database`);
    // }
    // if (doubleNumber(number)) {
    //   return alert(`This ${number} already exist in database`);
    // }
    dispatch(authOperations.logIn({ email, password }));
    reset();
    // toast.success(`${name} successfully added ;)`);

    return;
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <form className="form__box" onSubmit={handleSubmit}>
        <h2>Log in Form</h2>
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
            disabled={!email || !password}
          >
            Log in
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

export default LogInView;
