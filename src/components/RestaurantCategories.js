import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItem, setShowIndex, Dummy }) => {


    const handleClick =() => {
        // setShowIndex(!showIndex)
        setShowIndex();
    }
  // console.log(data);
//   const [showItem, setShowItem] = useState(false);
//   const handleClick = () => {
//     console.log("Clicked");
//     setShowItem(!showItem);
//   };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordion Body */}
        {/* <ItemList items={data.itemCards}/> */}
        {showItem && <ItemList items={data.itemCards} Dummy={Dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
