import ForgotPassword from "../pages/forgotPassword/ForgotPassword.jsx";
import Login from "../pages/login/Login.jsx";

// Create public router
const publicRouter = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
];

export default publicRouter;
