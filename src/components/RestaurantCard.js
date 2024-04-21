const RestaurantCard = (props) => {
  const { imageUrl, name, rating, cuisine } = props;
  return (
    <div className="card">
      <img alt={name} src={imageUrl} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <p>{rating} star</p>
    </div>
  );
};

export default RestaurantCard;
