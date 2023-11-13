import { createBrowserRouter } from "react-router-dom";

import publicRouter from "./publicRouter.jsx";
import privateRouter from "./privateRouter.jsx";
import Layout from "../component/layout/Layout.jsx";

const router = createBrowserRouter([
  { element: <Layout />, children: [...publicRouter, ...privateRouter] },
]);

export default router;
