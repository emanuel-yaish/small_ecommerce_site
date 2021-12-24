import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <Logo />
      <Nav cart={props.cart} />
    </div>
  );
}

export default Header;
