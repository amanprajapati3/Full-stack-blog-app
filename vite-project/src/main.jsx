import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Creator from "./Pages/Creator.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Dashboard from "./Admin/Dashboard.jsx";
import Registeres from "./Pages/Registeres.jsx";
import Login from "./Pages/Login.jsx";
import Update from "./Admin/Update.jsx";
import {Toaster} from "react-hot-toast"
import BlogDetails from "./components/BlogDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/creators",
        element: <Creator/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact", 
        element: <Contact/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/registered",
        element: <Registeres/>
      },
      {
      path: "/login",
      element: <Login/>
      },
      {
      path: "/update/:id",
      element: <Update/>
      },
      {
      path: "/blog_details/:id",
      element: <BlogDetails/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>
);
