import { createBrowserRouter } from "react-router-dom";
import Landing from "../contents/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export default router;
