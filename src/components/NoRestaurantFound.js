const NoRestaurantFound = ({ onBackButtonClick }) => {
  return (
    <div className="no-restaurant-found">
      <h2>Sorry, We are not found restaurant as per search</h2>
      <button onClick={onBackButtonClick}>Back to all restaurant</button>
    </div>
  );
};

export default NoRestaurantFound;
