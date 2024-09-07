import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(props);

  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[220px] rounded-md bg-gray-100 hover:bg-gray-200 "
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="card-image"
      />
      {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating}stars</h4>
        <h4>₹{resData.data.costForTwo / 100}For Two</h4>
        <h4>{resData.data.deliveryTime}minutes</h4> */}
      <h3 className="font-bold py-4 text-lg ">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}For Two</h4>
      <h4>{deliveryTime}minutes</h4>
      <h4>User :{loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// input - Restaurant => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
