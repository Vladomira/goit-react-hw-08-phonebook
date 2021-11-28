import React from "react";
import Picture from "../UserMenu/phone.png";
const img = Picture;

const HomeView = () => (
  <div className="header__box">
    <h1 className="header">Welcome to our app</h1>
    <img src={img} alt="" className="header__img" />
  </div>
);

export default HomeView;
