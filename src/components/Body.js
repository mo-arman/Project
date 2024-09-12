import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
    console.log("use Effect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP-WEB_LISTING"
    );

    const json = await data.json();

    //optional chaining
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>Looks like you are offline plz check your internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);
  //conditional rendering
  // if (listOfRestaurants.length == 0) {
  //   return <Shimmer />;
  // }
  // Local state variable - super powerful variable
  // const [listOfRestaurants, setListOfRestaurant] = useState([
  //      {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "74453",
  //       name: "Domino's Pizza",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       city: "21",
  //       area: "Athwa",
  //       totalRatingsString: "1000+ ratings",
  //       avgRating:"4.4",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       tags: [],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 45,
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "73453",
  //       name: "KFC",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       city: "21",
  //       area: "Athwa",
  //       totalRatingsString: "1000+ ratings",
  //       avgRating:"3.1",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["KFC chicken"],
  //       tags: [],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 45,
  //     },
  //   },
  // ]);

  // Normal JS variable
  // let listOfRestaurants = [];

  //   let listOfRestaurantsjs = [
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "74453",
  //         name: "Domino's Pizza",
  //         uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //         city: "21",
  //         area: "Athwa",
  //         totalRatingsString: "1000+ ratings",
  //         avgRating:"4.4",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         tags: [],
  //         costForTwo: 40000,
  //         costForTwoString: "₹400 FOR TWO",
  //         deliveryTime: 45,
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "73453",
  //         name: "KFC",
  //         uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //         city: "21",
  //         area: "Athwa",
  //         totalRatingsString: "1000+ ratings",
  //         avgRating:"3.1",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["KFC chicken"],
  //         tags: [],
  //         costForTwo: 40000,
  //         costForTwoString: "₹400 FOR TWO",
  //         deliveryTime: 45,
  //       },
  //     },
  //   ];

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput" // use for testing
            placeholder="cafe"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-200 px-4 py-2 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurant cards and update the ui
              //searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestauran(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              //filter logic here

              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restauarants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center ">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))} */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {/* {restaurant.info.promoted ?<RestaurantCard/> } */}
            {restaurant.info.promoted ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCardPromoted resData={restaurant} />
            )}
            {/* <RestaurantCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
