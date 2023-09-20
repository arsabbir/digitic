import MainLayout from "../component/MainLayout/MainLayout.jsx";
import Brand from "../pages/brand/Brand.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import User from "../pages/user/User.jsx";


// Create private router
const privateRouter = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <User />,
      },

      {
        path: "/brand",
        element: <Brand />,
      },
    ],
  },
];

export default privateRouter;
