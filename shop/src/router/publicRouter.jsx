import About from "../pages/about/About.jsx";
import Login from "../pages/auth/Login.jsx";
import SignUp from "../pages/auth/SingUp.jsx";
import Blog from "../pages/blog/Blog.jsx";
import CompareProduct from "../pages/compareProduct/CompareProduct.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Home from "../pages/home/Home.jsx";
import OurStore from "../pages/our-store/OurStore.jsx";
import Wishlist from "../pages/wishlist/Wishlist.jsx";

const publicRouter = [
  { path: "/", element: <Home /> },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/our-store",
    element: <OurStore />,
  },
  {
    path: "/blog/news",
    element: <Blog />,
  },
  {
    path: "/compare-product",
    element: <CompareProduct />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
];
export default publicRouter;
