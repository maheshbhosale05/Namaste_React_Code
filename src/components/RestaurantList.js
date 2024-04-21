import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurantArray }) => {
  return (
    <div className="card-list">
      {restaurantArray.map((restaurant) => (
        <RestaurantCard
          imageUrl={restaurant.info.image.url}
          name={restaurant.info.name}
          rating={restaurant.info.rating.aggregate_rating}
          cuisine={restaurant.info.cuisine.map(({ name }) => name).join(", ")}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
