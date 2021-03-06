import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const links = ["shop", "categories", "signin", "cart"];
  const linksText = ["Shop", "Categories", "Sign in", props.cart];
  return (
    <div className="nav">
      {links.map((link, index) => {
        return (
          <NavLink className={`nav-link ${link}`} to={`/${link}`} key={link}>
            {linksText[index]}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Nav;
