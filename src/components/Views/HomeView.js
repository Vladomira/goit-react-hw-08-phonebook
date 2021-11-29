import React from "react";
import Picture from "../images/phone.png";
const img = Picture;

const HomeView = () => (
  <>
    <div className="header__box">
      <h1 className="header">Welcome to our app</h1>
      <img src={img} alt="" className="header__img" />
    </div>{" "}
    {/* <p>You can create your own list for contacts</p> */}
  </>
);

export default HomeView;
