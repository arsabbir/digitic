import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../component/customInput/customInput.jsx";
import { object, string } from "yup";
import { loginUser } from "../../features/auth/authApiSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getAuthData } from "../../features/auth/authSlice.js";
import { useEffect } from "react";
import { createToast } from "../../utils/Toast.js";
import { sweetAlertBasic } from "../../utils/SweetAlert.js";

// yup configure
let yupSchema = object({
  password: string().required(),
  email: string().email("Email should be Valid").required("Email is required"),
});
const Login = () => {
  // useState section
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // auth data
  const { isSuccess, message, user, isError, isLoading } =
    useSelector(getAuthData);

  // configure formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess, isLoading]);
  return (
    <div
      className="py-5"
      style={{ background: "#f5f7fa", color: "#ffffff", minHeight: "100vh" }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title text-black">Login</h3>
        <p className="text-center text-black">
          Login to your account to continue.
        </p>
        {isError && (
          <div className="p-2 text-center text-black  border border-danger rounded-1 shadow-sm">
            <h6  className=" mt-1 text-danger">There was a problem</h6>
            {isError == true ? `${message}` : ""}
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onBlur={formik.handleBlur("email")}
            onChange={formik.handleChange("email")}
            value={formik.values.email}
          />
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <CustomInput
            className="text-black"
            type="password"
            label="Password"
            id="pass"
            name="password"
            onBlur={formik.handleBlur("password")}
            onChange={formik.handleChange("password")}
            value={formik.values.password}
          />
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="text-black">
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
