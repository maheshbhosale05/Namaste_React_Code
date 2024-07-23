import React, { Suspense, lazy, useContext } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import styles from "./App.css";
import ErrorPage from "./components/pages/ErrorPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import RestaurantDetails from "./components/RestaurantDetails";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import UserContextProvider from "./utils/userContext";
import store from "./redux/store";

const InstaMart = lazy(() => import("./components/pages/InstaMart"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutPage />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/restaurantDetail/:id",
        element: <RestaurantDetails />,
      },

      {
        path: "/instaMart",
        element: (
          <Suspense fallback={<div>Loading Insta Mart</div>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </Provider>
);
