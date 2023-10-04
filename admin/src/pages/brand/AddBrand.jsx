import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { string, object } from "yup";
import {
  getproductState,
  setMessageEmpty,
} from "../../features/product/productSlice.js";
import { useEffect } from "react";
import {
  createBrand,
  getSingleBrand,
  updateBrand,
} from "../../features/product/productApiSlice.js";
let schema = object().shape({
  name: string().required("Brand Name is Required"),
});
const AddBrand = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getBrandId = location.pathname.split("/")[2];
  const { brands, brandName, message, isSuccess, isError, isLoading } =
    useSelector(getproductState);

  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getSingleBrand(getBrandId));
    }
  }, [getBrandId]);
  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      dispatch(setMessageEmpty());
    }
  }, [isError, isLoading, isSuccess, brands]);

  // use formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: brandName?.name ? brandName?.name : "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBrandId !== undefined) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateBrand(data));
        toast.success("Brand update successfully");
        navigate("/list-brand");
        dispatch(setMessageEmpty());
      } else {
        dispatch(createBrand(values));
if (createBrand && message == "" && isSuccess && isError == false) {
  toast.success("Brand Addedd successfully");
  dispatch(setMessageEmpty());
}
        formik.resetForm();
      }
    },
  });
  return (
    <>
      <h3> {getBrandId !== undefined ? "Edit" : "Add"} Brand</h3>
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
            {getBrandId !== undefined ? "Edit" : "Add"} Brand
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBrand;
