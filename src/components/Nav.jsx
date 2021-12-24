import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const links = ["Shop", "categories", "Sign in", "Cart"];
  return (
    <div className="nav">
      {links.map((link) => {
        return (
          <NavLink className="nav-link" to={`/invoices/${link}`} key={link}>
            {link !== "Cart" ? link : ""}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Nav;
