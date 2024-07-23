import { Link } from "react-router-dom";
import FoodVillaLogo from "../assets/img/foodVillaLogo.jpeg";
import { useContext, useState } from "react";
import useOnline from "../utils/useOnline";
import { UserContext } from "../utils/userContext";
import Cart from "./Cart";

const Title = () => {
  return <img src={FoodVillaLogo} width="80rem" />;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between p-4 shadow-md gap-2">
      <Title />
      <ul className="flex gap-4">
        <li>
          <Link className="swiggy-link-hover" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="swiggy-link-hover" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="swiggy-link-hover" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="swiggy-link-hover" to="/instaMart">
            InstaMart
          </Link>
        </li>
      </ul>
      <ul className="flex gap-2 items-center">
        <li>
          <div>{user.name}</div>
        </li>
        <li>
          <Link to="/login">
            <button className="border-2 rounded-lg px-2 py-1 swiggy-button-hover">
              {isLoggedIn ? "Log Out" : "Login"}
            </button>
          </Link>
        </li>
        <li>
          <Cart />
        </li>
        <li>{isOnline ? "✅" : "🛑"}</li>
      </ul>
    </div>
  );
};

export default Header;
