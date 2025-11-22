import Main from "../layouts/Main"
import Products from "../pages/Products";
import Cart from "../pages/Cart";

export const routes = [
    {path: '/products', element: <Products />},
    {path: '/cart', element: <Cart />},
]