import { createBrowserRouter } from "react-router";
import App from "../App";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);
