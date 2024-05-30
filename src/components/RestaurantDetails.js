import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RestaurantDetails = () => {
  const { id } = useParams();

  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setCardDetails(jsonData?.data?.cards);
    console.log();
    jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  };

  if (!cardDetails) return <div>Loding....</div>;

  return (
    <div>
      <h1>{cardDetails[0]?.card?.card?.text}</h1>
      <h3>Menu: </h3>
      {cardDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (menu) =>
          menu?.card?.card?.title && (
            <div>
              <h4>{menu?.card?.card?.title}</h4>
              {menu?.card?.card?.itemCards?.map((item) => (
                <div>
                  <p>{item?.card.info.name}</p>
                  <p>price: {item?.card.info.price}</p>
                  <p>
                    {item?.card.info.inStock ? "Available" : "Out of Stock"}
                  </p>
                  <p>{item?.card.info.isVeg === 1 ? "Veg" : "Non-Veg"}</p>
                  <hr />
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default RestaurantDetails;
