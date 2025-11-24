import Main from "../layouts/Main"
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";

export const routes = [
    {path: '/products', element: <Products />},
    {path: '/products/detail/:id', element: <ProductDetail/>},
    {path: '/cart', element: <Cart />},
]