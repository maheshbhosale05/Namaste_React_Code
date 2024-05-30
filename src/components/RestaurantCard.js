import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { imageUrl, name, rating, cuisine, id } = props;

  return (
    <Link to={`/restaurantDetail/${id}`}>
      <div className="card">
        <img alt={name} src={imageUrl} />
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <p>{rating} star</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
