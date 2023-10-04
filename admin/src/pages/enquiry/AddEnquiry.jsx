import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
export const resetState = createAction("Reset_all");
// import { useLocation, useNavigate } from "react-router-dom";
import { string, object } from "yup";
import { useEffect } from "react";
import { getEnquiryState } from "../../features/enquiry/EnquirySlice.jsx";
import { createAction } from "@reduxjs/toolkit";
import { createEnquiry } from "../../features/enquiry/EnquiryApiSlice.jsx";
let schema = object().shape({
  name: string().required("Brand Name is Required"),
});
const AddEnquiry = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();
  // const getBrandId = location.pathname.split("/")[3];
  const { ennquiries, message, isSuccess, isError, isLoading } =
    useSelector(getEnquiryState);

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }
    if (isSuccess == true && isError == false && message == "") {
      toast.success("Brand added successfully");
    }
  }, [isError, isLoading, isSuccess]);
  // use formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createEnquiry(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 300);
    },
  });
  return (
    <>
      <h3> Add Brand</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            name="name"
            onChg={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
            type="text"
            label="Enter Product Brand"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <button
            type="submit"
            className="btn btn-success rounded-3 border-0 my-3"
          >
            Add Enquiry
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEnquiry;
