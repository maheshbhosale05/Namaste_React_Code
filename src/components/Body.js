import { useState } from "react";
import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";
import { restaurantList } from "../constants";

const Body = () => {
  const [restaurantArray, setRestaurantArray] = useState(restaurantList);

  const handleSearchClick = (searchText) => {
    !!searchText
      ? setRestaurantArray(
          restaurantList.filter((restaurant) =>
            restaurant.info.name
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
          )
        )
      : setRestaurantArray(restaurantList);
  };
  return (
    <>
      <SearchBar onSearchClick={handleSearchClick} />
      <RestaurantList restaurantArray={restaurantArray} />
    </>
  );
};
export default Body;
