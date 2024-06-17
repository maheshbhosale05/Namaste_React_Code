import { useEffect, useState } from "react";

const useRestrauntMenu = (id) => {
  const [restrauntMenu, setRestrauntMenu] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setRestrauntMenu(jsonData?.data?.cards);
  };

  return [restrauntMenu, setRestrauntMenu];
};

export default useRestrauntMenu;
