import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoggedInUser } from "./features/auth/authApiSlice.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(getLoggedInUser());
    }
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
