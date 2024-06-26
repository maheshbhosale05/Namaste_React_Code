import { restaurantImageDomainURL } from "../constants";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurantArray }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center pt-8">
      {restaurantArray.map((restaurant, index) => (
        <RestaurantCard
          key={restaurant.info.id}
          id={restaurant.info.id}
          imageUrl={
            restaurantImageDomainURL + restaurant.info.cloudinaryImageId
          }
          name={restaurant.info.name}
          rating={restaurant.info.avgRating}
          cuisine={restaurant.info.cuisines.map((name) => name).join(", ")}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
