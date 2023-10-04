import MainLayout from "../component/MainLayout/MainLayout.jsx";
import AddBlog from "../pages/blog/AddBlog.jsx";
import BlogCateList from "../pages/blog/BlogCateList.jsx";
import BlogList from "../pages/blog/BlogList.jsx";
import AddBrand from "../pages/brand/AddBrand.jsx";
import AddColor from "../pages/color/AddColor.jsx";
import Customers from "../pages/customer/Customers.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Enquiry from "../pages/enquiry/Enquiry.jsx";
import Orders from "../pages/order/Orders.jsx";
import AddProduct from "../pages/product/AddProduct.jsx";
import ColorList from "../pages/color/ColorList.jsx";
import AddCategory from "../pages/product/AddCategory.jsx";
import ProCategory from "../pages/product/ProCategory.jsx";

import BrandList from "../pages/brand/BrandList.jsx";
import AddBlogCate from "../pages/blog/AddBlogCate.jsx";
import CouponList from "../pages/coupon/CouponList.jsx";
import AddCoupon from "../pages/coupon/AddCoupon.jsx";
import ViewEnquiry from "../pages/enquiry/ViewEnquiry.jsx";
import ViewOrder from "../pages/order/ViewOrder.jsx";

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
        path: "/brand",
        element: <AddBrand />,
      },
      {
        path: "/brand/:id",
        element: <AddBrand />,
      },
      {
        path: "/list-brand",
        element: <BrandList />,
      },
      {
        path: "/enquiries",
        element: <Enquiry />,
      },
      {
        path: "/enquiries/:id",
        element: <ViewEnquiry />,
      },
      {
        path: "/blog",
        element: <AddBlog />,
      },
      {
        path: "/blog/:id",
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
        path: "/blog-category",
        element: <AddBlogCate />,
      },
      {
        path: "/blog-category/:id",
        element: <AddBlogCate />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/orders/:id",
        element: <ViewOrder />,
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
        path: "/color/:id",
        element: <AddColor />,
      },
      {
        path: "/color-list",
        element: <ColorList />,
      },
      {
        path: "/category",
        element: <AddCategory />,
      },
      {
        path: "/category/:id",
        element: <AddCategory />,
      },
      {
        path: "/list-category",
        element: <ProCategory />,
      },
      {
        path: "/product",
        element: <AddProduct />,
      },
      {
        path: "/coupon-list",
        element: <CouponList />,
      },
      {
        path: "/coupon",
        element: <AddCoupon />,
      },
      {
        path: "/coupon/:id",
        element: <AddCoupon />,
      },
    ],
  },
];

export default privateRouter;
