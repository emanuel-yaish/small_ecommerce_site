import { NavLink } from "react-router-dom";
import "./Home.css";

function Home(props) {
  const departments = [
    "men",
    "sports",
    "women",
    "sunglasses",
    "coupons",
    "backpack",
  ];
  return (
    <div className="home">
      {departments.map((department) => (
        <NavLink
          to={`/${department}`}
          className={`department ${department}`}
          key={department}
        ></NavLink>
      ))}
    </div>
  );
}

export default Home;
