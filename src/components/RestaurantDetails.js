import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import { restaurantImageDomainURL } from "../constants";

export const RestaurantDetails = () => {
  const { id } = useParams();

  const [cardDetails, setCardDetails] = useRestrauntMenu(id);

  const [menuCategoryId, setMenuCategoryId] = useState(0);

  if (!cardDetails) return <div>Loding....</div>;

  console.log("cardDetails[0]?.card?.card", cardDetails);

  return (
    <div className="px-8">
      <div>
        <div className="text-xl font-bold pt-4">
          {cardDetails[0]?.card?.card?.text}
        </div>
        <div className="text-sm font-bold pb-4">
          {cardDetails[2]?.card?.card?.info?.avgRating} ⭐ by{" "}
          {cardDetails[2]?.card?.card?.info?.totalRatingsString}
        </div>
        <div className="pb-8">
          {cardDetails[2]?.card?.card?.info?.labels?.map(
            ({ title, message }) => (
              <div className="flex gap-2">
                <div className="text-sm">{title} : </div>
                <div className="text-sm">{message}</div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="text-base font-bold pb-4">Menu: </div>
      {cardDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (menu, menuIndex) =>
          menu?.card?.card?.title && (
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setMenuCategoryId((prevIndex) =>
                    prevIndex === menuIndex ? 0 : menuIndex
                  )
                }
              >
                <div className="text-base font-bold py-2 ">
                  {menu?.card?.card?.title} (
                  {menu?.card?.card?.itemCards?.length})
                </div>
                <div className="text-base">
                  {menuCategoryId === menuIndex ? "▲" : "▼"}
                </div>
              </div>
              {menuCategoryId === menuIndex &&
                menu?.card?.card?.itemCards?.map((item) => (
                  <>
                    <div className="flex justify-between py-4">
                      <div>
                        <div className="text-sm">
                          {item?.card.info.isVeg === 1 ? "🟢" : "🔴"}
                        </div>
                        <div className="text-sm font-bold">
                          {item?.card.info.name}
                        </div>
                        <div className="text-sm">
                          ₹ {item?.card.info.price / 100}
                        </div>
                        <div className="text-sm">
                          {item?.card.info.description}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center min-w-24 items-center">
                        <img
                          src={
                            restaurantImageDomainURL + item?.card.info.imageId
                          }
                          alt="Meal"
                          className="h-20 w-20 pb-2"
                        />
                        <button className="border-2 rounded-lg px-2 py-0.5 swiggy-button-hover text-sm">
                          + Add
                        </button>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              <hr />
            </div>
          )
      )}
    </div>
  );
};

export default RestaurantDetails;
