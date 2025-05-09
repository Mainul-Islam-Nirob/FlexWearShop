import { RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Shop from './components/Shop.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ProductDetail from "./components/ProductDetail.jsx";
import Category from "./components/Category.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import OrderSuccess from "./components/OrderSuccess.jsx";

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
