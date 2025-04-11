import { RouterProvider } from "react-router-dom";

import Shop from './components/Shop';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ErrorPage from './components/ErrorPage';
import App from "./App";
import ProductDetail from "./components/ProductDetail";
import Category from "./components/Category";
import CheckoutPage from "./components/CheckoutPage";
import OrderSuccess from "./components/OrderSuccess";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signUp",
    element: <SignUp />
  },
  {
    path: "checkout",
    element: <CheckoutPage />
  },
  {
    path: "order-success",
    element: <OrderSuccess />
  },
  {
    path: "product/:id",
    element: <ProductDetail />
  },
  {
    path: "category/:categoryName",
    element: <Category />
  }

];

export default routes;
