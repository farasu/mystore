import { Routes, Route } from "react-router-dom";
import Main from "../layouts/Main";
import { routes } from "./Route";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index}></Route>
        ))}
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
