import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartSlice from "../slices/CartSlice";

function Product({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { add } = CartSlice.actions;
  return (
    <div className="p-1 mx-2 my-5 bg-white rounded-lg shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 rounded"
      />
      <hr className="my-3 border-3 border-sky-200" />
      <p className="mt-2 text-lg font-semibold ">
        <strong className="text-white dark:text-gray-800">
          {product.title}
        </strong>
        <span className="items-center px-2 text-sm text-white dark:text-gray-600">
          / ${product.price}
        </span>
      </p>
      <p className="text-gray-600">Catagory: {product.category}</p>
      <hr className="my-3 border-3 border-sky-200" />
      <div className="flex justify-between">
        <button className="px-3 py-1 mx-3 mb-3 text-xs font-bold border rounded text-sky-600 border-sky-500 hover:bg-sky-700 hover:text-white"
        onClick={()=>dispatch(add({product: product, quantity: 1}))}>
          Add to Cart
        </button>

        <button
          className="px-3 py-1 mx-3 mb-3 text-xs font-bold border rounded text-sky-600 border-sky-500 hover:bg-sky-700 hover:text-white"
          onClick={()=> navigate(`/products/detail/${product.id}`)}
        >
          More Detail
        </button>
      </div>
    </div>
  );
}

export default Product;
