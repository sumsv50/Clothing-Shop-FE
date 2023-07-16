import { useRoutes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

export default function Router() {
  return useRoutes([
    { path: "/", element: <ProductList /> },
    { path: "/:productId", element: <ProductDetail /> }
  ])
}