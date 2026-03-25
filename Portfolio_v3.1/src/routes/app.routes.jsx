import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import Skill from "../pages/Skill";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blog /> },
      { path: "projects", element: <Projects /> },
      { path: "skill", element: <Skill /> },
    ],
  },
]);
