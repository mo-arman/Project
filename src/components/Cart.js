import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {

//   const cartItems = useSelector((store) => store.cart.items);

  const store = useSelector((store)=>store);
  const cartItems = store.cart.items;
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="m-auto w-6/12">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && <h1>Cart is Empty Add items to the Cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
