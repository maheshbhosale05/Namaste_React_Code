import { Link } from "react-router-dom";
import FoodVillaLogo from "../assets/img/foodVillaLogo.jpeg";
import { useState } from "react";

const Title = () => {
  return <img src={FoodVillaLogo} width="80rem" />;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <ul className="navigation-lists">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Card</li>
      </ul>
      <Link to="/login">
        <button>{isLoggedIn ? "Log Out" : "Login"}</button>
      </Link>
    </div>
  );
};

export default Header;
