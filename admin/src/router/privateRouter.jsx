import MainLayout from "../component/MainLayout/MainLayout.jsx";
import AddBlog from "../pages/blog/AddBlog.jsx";
import BlogCateList from "../pages/blog/BlogCateList.jsx";
import BlogList from "../pages/blog/BlogList.jsx";
import AddBrand from "../pages/brand/AddBrand.jsx";
import Brand from "../pages/brand/Brand.jsx";
import AddCategory from "../pages/category/AddCategory.jsx";
import AddColor from "../pages/color/AddColor.jsx";
import Customers from "../pages/customer/Customers.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Enquiry from "../pages/enquiry/enquiry.jsx";
import Orders from "../pages/order/Orders.jsx";
import AddProduct from "../pages/product/AddProduct.jsx";
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
        element: <AddBrand />,
      },
      {
        path: "/enquiries",
        element: <Enquiry />,
      },
      {
        path: "/blog",
        element: <AddBlog />,
      },
      {
        path: "/blog-list",
        element: <BlogList />,
      },
      {
        path: "/blog-category-list",
        element: <BlogCateList />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/color",
        element: <AddColor />,
      },
      {
        path: "/category",
        element: <AddCategory />,
      },
      {
        path: "/product",
        element: <AddProduct />,
      },
    ],
  },
];

export default privateRouter;
