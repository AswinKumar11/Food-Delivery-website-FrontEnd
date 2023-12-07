import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/AboutUs";
import Error from "./components/Error";
import Menu from "./components/Menu";

// const heading = React.createElement("div", {id:'child'}, [
//     React.createElement("h1", {key:'child2'}, "Hello Mr.React"),
//     React.createElement("h2", {key:'child3'}, "Hello Mr.Aswin"),
//     React.createElement("h2", {key:'child4'}, "Hello Mr.Kumar")
// ]);

// const Title = ()=> ( <h1 className="heading">Hello jsx</h1> );

// functional component

const App = () => (
  <div>
    <Header />
    <Outlet />
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
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeConfig} />);
