import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const Dummy  = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // //   console.log(params);s
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL+resId);
  //   const json = await data.json();

  //   setResInfo(json.data);
  // };

  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  // console.log(itemCards);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories accordions */}

      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategories
          key={category.card.card.title}
          data={category?.card?.card}
          showItem={index == showIndex ? true:false}
          setShowIndex={()=>setShowIndex(index)}
          Dummy={Dummy}
        />
      ))}
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))} */}
      {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li> */}
      {/* </ul> */}
    </div>
  );
};

export default RestaurantMenu;
