import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // const data = useContext(UserContext);
 
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  // Selector Subscribing to the store using a selector
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);

  // console.log("header");

  // useEffect(() => {
  //   console.log("useEffect called");
  // },[btnNameReact]);
  return (
    <div className="flex justify-between shadow-lg bg-pink-300   sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-36" alt="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status:{onlineStatus ? "✅":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
          <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
