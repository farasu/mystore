import { useDispatch } from "react-redux";
import CartButton from "../ui/CartButton";
import CartSlice from "../slices/CartSlice";
function CartItem({ item }) {
  const dispatch = useDispatch();
  const { changeQuantity, remove } = CartSlice.actions;
  const increase = () =>
    dispatch(changeQuantity({ id: item.product.id, change: 1 }));
  const decrease = () =>
    dispatch(changeQuantity({ id: item.product.id, change: -1 }));
  const clear = () => dispatch(remove(item.product.id));
  return (
    <div className="p-1 mx-2 my-5 bg-white rounded-lg shadow">
      <img
        src={item.product.image}
        alt={item.product.title}
        className="w-full rounded max-h-64"
      />
      <hr className="my-3 border-3 border-sky-200" />
      <div className="flex flex-row justify-between">
        <CartButton text={"+"} action={increase}></CartButton>
        <CartButton
          text={"-"}
          action={decrease}
          quantity={item.quantity}
        ></CartButton>
        <CartButton text={"x"} action={clear}></CartButton>
      </div>
      <hr className="my-3 border-3 border-sky-200" />
      <p className="mt-2 text-lg font-semibold ">
        <span className="text-sm text-white dark:text-gray-800">
          Total Price: ${Number(item.product.price * item.quantity).toFixed(2)}
        </span>
        <span className="items-center px-2 text-xs text-white dark:text-gray-600">
          / Quantity: {item.quantity}
        </span>
      </p>
      <hr className="my-3 border-3 border-sky-200" />
      <p className="mt-2 text-lg font-semibold ">
        <strong className="text-white dark:text-gray-800">
          {item.product.title}
        </strong>
        <span className="items-center px-2 text-sm text-white dark:text-gray-600">
          / ${item.product.price}
        </span>
      </p>
      <p className="pb-5 text-gray-600">
        <span className="text-sm font-bold text-white dark:text-gray-800">
          Category:{" "}
        </span>
        {item.product.category}
      </p>
    </div>
  );
}

export default CartItem;
