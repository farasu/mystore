import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { ProductsList } from "../slices/ProductSlice";
function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsList());
  }, []);
  return (
    <div className="min-h-screen ">
      <div className="w-full">
        <Header></Header>
      </div>
      <div className="px-5 py-10 text-left dark:bg-gray-800 dark:border-l dark:border-r dark:border-gray-900">
        <Outlet />
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Main;
