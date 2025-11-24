import {  useSelector } from "react-redux";
import Product from "../components/Product";
function Products() {

  const { products, status } = useSelector((state) => state.product);
  if (status === "loading") return <p>loading...</p>;
  if (status === "error") return <p>An error occured...</p>;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Product product={product} key={index}></Product>
      ))}
    </div>
  );
}

export default Products;
