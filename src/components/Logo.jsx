import { NavLink } from "react-router-dom";
import "./Logo.css";

function Logo(props) {
  return (
    <NavLink className="logo-link" to={`/`}>
      <div className="logo">
        <div>
          <i className="fas fa-tshirt"></i>
        </div>
        <div>Clothes</div>
      </div>
    </NavLink>
  );
}

export default Logo;
