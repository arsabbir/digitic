import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter.jsx";
import privateRouter from "./privateRouter.jsx";

// crate broser router
const router = createBrowserRouter([...publicRouter, ...privateRouter]);

// export
export default router;
