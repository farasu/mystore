import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartSlice from "../slices/CartSlice";
function Cart() {
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const { clearAll } = CartSlice.actions;
  console.log(carts);
  let total = 0;
  const calculateTotal = () => {
    carts.map((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-sm font-bold">
          Total price of items in the cart is:  <strong className="text-lg text-sky-500">${calculateTotal().toFixed(2) }</strong>
        </h2>
        <button
          className="px-5 pt-1 pb-2 text-xs text-gray-800 border dark:text-white border-sky-300 hover:border-sky-700 hover:bg-sky-300 hover:text-gray-900"
          onClick={() => dispatch(clearAll())}
        >
          clear the cart
        </button>
      </div>
      <hr className="my-3 border-2 border-sky-500" />
      <div className="grid grid-cols-2 p-2 lg:grid-cols-4">
        {carts.map((item, index) => (
          <CartItem item={item} key={index}></CartItem>
        ))}
      </div>
    </div>
  );
}

export default Cart;
