import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { string, object } from "yup";
import { useEffect } from "react";
import {
  createColor,
  getSingleColor,
  updateColor,
} from "../../features/product/productApiSlice.js";
import {
  getproductState,
  setMessageEmpty,
} from "../../features/product/productSlice.js";

let schema = object().shape({
  name: string().required("Color Name is Required"),
});
const AddColor = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getColorId = location.pathname.split("/")[2];
  const { singleColor, message, isSuccess, isError, isLoading } =
    useSelector(getproductState);
  console.log(singleColor);
  // use formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: singleColor?.name ? singleColor?.name : "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getColorId !== undefined) {
        const data = { id: getColorId, colorData: values };
        dispatch(updateColor(data));
        toast.success("Color updated successfully");
        navigate("/color-list");
        dispatch(setMessageEmpty());
      } else {
        dispatch(createColor(values));
        if (createColor()) {
          toast.success("Product Color Added Successfullly!");
          dispatch(setMessageEmpty());
        }
        formik.resetForm();
      }
    },
  });
  // useEffect
  useEffect(() => {
    if (getColorId !== undefined) {
      dispatch(getSingleColor(getColorId));
    }
  }, [getColorId]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, isLoading, isSuccess]);
  return (
    <>
      <h3> {getColorId !== undefined ? "Edit" : "Add"} Color</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            name="name"
            onChg={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
            type="color"
            label="Enter Color"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <button
            type="submit"
            className="btn btn-success rounded-3 border-0 my-3"
          >
            {getColorId !== undefined ? "Edit" : "Add"} Color
          </button>
        </form>
      </div>
    </>
  );
};

export default AddColor;
