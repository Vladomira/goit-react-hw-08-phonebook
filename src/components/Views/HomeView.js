import React from "react";
// import { ListGroup } from "react-bootstrap";
import Picture from "../images/phone.png";
const img = Picture;

const HomeView = () => (
  <>
    <div className="header__box">
      <div className="logo__box">
        <h1 className="header">Welcome to our app</h1>
        <img className="logo__img header__logo" src={img} alt="" />
        <p className="logo__text">Phonebook </p>
      </div>
      <ul className="home__list">
        <li className="home__item list">
          <p className="home__paragraph">
            You can &nbsp;
            <a href="/register" className="home__link link">
              register
            </a>
            &nbsp; or &nbsp;
            <a href="/login" className="home__link link">
              log in
            </a>
          </p>
        </li>
        <li className="home__item list">
          <p className="home__paragraph">
            Create your list of contacts
            {/* <span className="logo__text">Phonebook</span> */}
          </p>
        </li>
        <li className="home__item list">
          <p className="home__paragraph">
            Add or remove contacts from your contact list
            {/* <span className="logo__text">Phonebook</span> */}
          </p>
        </li>
      </ul>
    </div>
    {/* <p>You can create your own list for contacts</p> */}
  </>
);

export default HomeView;
