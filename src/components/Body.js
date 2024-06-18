import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";
import NoRestaurantFound from "./NoRestaurantFound";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantArray, setRestaurantArray] = useState([]);
  const [filterRestaurantArray, setFilterRestaurantArray] = useState([]);

  useEffect(() => {
    getSwiggyRestaurantList();
  }, []);

  const getSwiggyRestaurantList = async () => {
    try {
      const apiData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const data = await apiData.json();
      setRestaurantArray(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurantArray(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchClick = (searchText) => {
    !!searchText
      ? setFilterRestaurantArray(
          restaurantArray.filter((restaurant) =>
            restaurant.info.name
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
          )
        )
      : setFilterRestaurantArray(restaurantArray);
  };

  if (restaurantArray.length === 0) return <Shimmer />;
  return (
    <div className="px-8">
      <SearchBar onSearchClick={handleSearchClick} />
      {filterRestaurantArray.length > 0 ? (
        <RestaurantList restaurantArray={filterRestaurantArray} />
      ) : (
        <NoRestaurantFound onBackButtonClick={() => handleSearchClick("")} />
      )}
    </div>
  );
};
export default Body;
