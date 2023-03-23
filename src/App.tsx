import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/Products/ProductList";

import { ReactNode } from "react";

export interface Route {
  path: string;
  element: ReactNode;
  name: string;
}

export const router: Route[] = [
  {
    path: "/",
    element: <ProductList></ProductList>,
    name: "ProductList",
  },
];

export const routerController = createBrowserRouter(router);

function App() {
  return (
    <div className="App">
      {/* //importato product list */}
      <RouterProvider router={routerController} />
    </div>
  );
}

export default App;
