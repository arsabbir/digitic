import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

// import { useLocation, useNavigate } from "react-router-dom";
import { string, object } from "yup";

import { useEffect } from "react";

import {
  createProCategory,
  getSingleProCategory,
  updateProCategory,
} from "../../features/product/productApiSlice.js";
import {
  getproductState,
  setMessageEmpty,
} from "../../features/product/productSlice.js";
import { useLocation, useNavigate } from "react-router-dom";

let schema = object().shape({
  name: string().required("Brand Name is Required"),
});
const AddCategory = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getPcateId = location.pathname.split("/")[2];
  console.log(getPcateId);
  const { message, isSuccess, isError, isLoading, singlePCate } =
    useSelector(getproductState);

  // use formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: singlePCate?.name ? singlePCate?.name : "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getPcateId !== undefined) {
        const data = { id: getPcateId, pCateData: values };
        dispatch(updateProCategory(data));
        toast.success("Product Category update successfully");
        navigate("/list-category");
        dispatch(setMessageEmpty());
      } else {
        dispatch(createProCategory(values));
        if (
          createProCategory &&
          message == "" &&
          isSuccess &&
          isError == false
        ) {
          toast.success("Product Category Addedd successfully");
          dispatch(setMessageEmpty());
        }
      }

      formik.resetForm();
    },
  });

  useEffect(() => {
    if (getPcateId !== undefined) {
      dispatch(getSingleProCategory(getPcateId));
    }
  }, [getPcateId]);

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      dispatch(setMessageEmpty());
    }
  }, [isError, isLoading, isSuccess]);
  return (
    <>
      <h3> {getPcateId !== undefined ? "Edit" : "Add"} Category</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            name="name"
            onChg={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
            type="text"
            label="Enter Product Category"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <button
            type="submit"
            className="btn btn-success rounded-3 border-0 my-3"
          >
            {getPcateId !== undefined ? "Edit" : "Add"} Category
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
