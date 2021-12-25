import { NavLink } from "react-router-dom";
import "./SignIn.css";

function SignIn(props) {
  return (
    <div className="sign-in">
      <form className="sign-in-form">
        <h2 className="form-header">Sign In</h2>
        <div className="form-item">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-item">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="form-item">
          <NavLink className="sign-in-link" to={`/`}>
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
