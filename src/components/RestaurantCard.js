import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { imageUrl, name, rating, cuisine, id } = props;

  return (
    <Link
      to={`/restaurantDetail/${id}`}
      className="shadow-xl min-h-60 w-64 rounded-md text-center flex flex-col items-center justify-between"
    >
      {/* <div className="shadow-xl min-h-60 w-64 rounded-md text-center"> */}
      <img alt={name} src={imageUrl} className="w-64 h-40 rounded-t-xl" />
      <div className="text-xl font-bold py-4">{name}</div>
      <div className="text-sm pb-4">{cuisine}</div>
      <div className="text-xs pb-4">{rating} star</div>
      {/* </div> */}
    </Link>
  );
};

export default RestaurantCard;
