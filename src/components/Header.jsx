import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  const { carts } = useSelector((state) => state.carts);

  return (
    <nav className="px-6 py-4 text-white bg-gray-900">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <h1 className="pr-10 text-2xl font-bold">MyStore</h1>

        {/* Desktop Links */}
        <ul className="hidden gap-8 md:flex">
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">Cart<sup className="px-1 text-xs text-sky-300">({carts.length})</sup></Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col items-center gap-6 py-6 mt-4 bg-gray-800 md:hidden">
          <li>
            <Link
              to="products"
              className="hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="cart"
              className="hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              Cart
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
