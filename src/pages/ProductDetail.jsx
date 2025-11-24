import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CartSlice from "../slices/CartSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { add } = CartSlice.actions;
  const product = useSelector((state) =>
    state.product.products.find((item) => item.id == id)
  );
  return (
    <div>
      <div className="p-1 mx-2 my-5 rounded-lg shadow">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded h-96"
          />
        </div>
        <hr className="my-3 border-3 border-sky-200" />
        <p className="mt-2 text-lg font-semibold ">
          <strong className="text-white dark:text-gray-100">
            {product.title}
          </strong>
          <span className="items-center px-2 text-sm text-white dark:text-gray-100">
            / ${product.price}
          </span>
        </p>
        <hr className="my-3 border-3 border-sky-200" />
        <div className="flex justify-between">
          <button className="px-3 py-1 mx-3 text-xs font-bold border rounded text-sky-600 border-sky-500 hover:bg-sky-700 hover:text-white"
          onClick={()=>dispatch(add({product: product, quantity: 1}))}>
            Add to Cart
          </button>
        </div>
        <hr className="my-3 border-3 border-sky-200" />
        <p >Catagory: {product.category}</p>
        <h5 className="font-bold">Desciption:</h5>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
