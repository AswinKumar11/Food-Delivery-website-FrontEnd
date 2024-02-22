import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore";
import Cart from "./components/Cart";
// import About from "./components/AboutUs";
// import Menu from "./components/Menu";
// import SpecificFood from "./components/SpecificFood";

// const heading = React.createElement("div", {id:'child'}, [
//     React.createElement("h1", {key:'child2'}, "Hello Mr.React"),
//     React.createElement("h2", {key:'child3'}, "Hello Mr.Aswin"),
//     React.createElement("h2", {key:'child4'}, "Hello Mr.Kumar")
// ]);

// const Title = ()=> ( <h1 className="heading">Hello jsx</h1> );

// functional component

const About = lazy(() => import("./components/AboutUs"));
const Menu = lazy(() => import("./components/Menu"));
const SpecificFood = lazy(() => import("./components/SpecificFood"));


const App = () => (
  <div>
    <Provider store={reduxStore}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </Provider>
  </div>
);

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/:resId",
        element: <Menu />,
      },
      {
        path: "/specificFood/:id",
        element: <SpecificFood />,
      },
      {
        path: "/specificFood/:id/:resId",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeConfig} />);
