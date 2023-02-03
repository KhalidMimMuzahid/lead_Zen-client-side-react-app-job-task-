import { createBrowserRouter } from "react-router-dom";
import Information from "../../components/Information/Information";
import Main from "../../Layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Information></Information>,
      },
    ],
  },
]);

export default router;
