import { createBrowserRouter } from "react-router-dom";
// import Main from "../LayOut/Main/Main";
import Home from "../pages/Home/Home";
import Main from "../LayOut/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/bike-rent",
      //   element: <BikeRent />,
      // },
    ],
  },
]);
export default router;
