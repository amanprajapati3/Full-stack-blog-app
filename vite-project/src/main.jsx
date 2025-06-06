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
import BlogDetails from "./components/BlogDetails.jsx";
import GameDetail from "./Pages/blog_details/GameDetail.jsx";
import SportDetail from "./Pages/blog_details/SportDetail.jsx";
import StudyDetail from "./Pages/blog_details/StudyDetail.jsx";
import CodeDetail from "./Pages/blog_details/CodeDetail.jsx";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/creators", element: <Creator /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/registered", element: <Registeres /> },
      { path: "/login", element: <Login /> },
      { path: "/update/:id", element: <Update /> },
      { path: "/blog_details/:id", element: <BlogDetails /> },
      { path: "/coding-blog", element: <CodeDetail /> },
      { path: "/gaming-blog", element: <GameDetail /> },
      { path: "/sports-blog", element: <SportDetail /> },
      { path: "/study-blog", element: <StudyDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
