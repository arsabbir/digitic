import ForgotPassword from "../pages/forgotPassword/ForgotPassword.jsx";
import Login from "../pages/login/Login.jsx";
import ResetPassword from "../pages/resetPassword/ResetPassword.jsx";

// Create public router
const publicRouter = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
];

export default publicRouter;
