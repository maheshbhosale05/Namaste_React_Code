import FoodVillaLogo from "../assets/img/foodVillaLogo.jpeg";

const Title = () => {
  return <img src={FoodVillaLogo} width="80rem" />;
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul className="navigation-lists">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Card</li>
      </ul>
    </div>
  );
};

export default Header;
