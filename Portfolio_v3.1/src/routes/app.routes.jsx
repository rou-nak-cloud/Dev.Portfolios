import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skill from "../pages/Skill";
import Blog from "../pages/Blog";
import BlogPost from "../components/BlogPage/BlogPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blog /> },
      { path: "blogs/:id", element: <BlogPost /> }, // Dynamic route for items
      { path: "projects", element: <Projects /> },
      { path: "skill", element: <Skill /> },
    ],
  },
]);
