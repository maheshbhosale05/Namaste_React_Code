const Title = () => {
  return <h2>Food Villa</h2>;
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
