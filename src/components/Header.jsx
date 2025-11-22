import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold pr-10">MyStore</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8">
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="block w-6 h-1 bg-white"></span>
        <span className="block w-6 h-1 bg-white"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-6 py-6 md:hidden">
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
