import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { string, object } from "yup";
import { useEffect } from "react";

import {
  getBlogState,
  setMessageEmpty,
} from "../../features/blog/BlogSlice.js";
import {
  createBlogCate,
  getSingleBlogCate,
  updateBlogCate,
} from "../../features/blog/BlogApiSlice.js";

let schema = object().shape({
  name: string().required("Blog Category Name is Required"),
});
const AddBlogCate = () => {
  // useState section
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getBcateId = location.pathname.split("/")[2];
  const { message, singleBlogCate, isSuccess, isError, isLoading } =
    useSelector(getBlogState);

  // useEffect section
  useEffect(() => {
    if (getBcateId !== undefined) {
      dispatch(getSingleBlogCate(getBcateId));
    }
  }, [getBcateId]);

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      dispatch(setMessageEmpty());
    }
  }, [isError, isLoading, isSuccess]);
  console.log(singleBlogCate);
  // use formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: singleBlogCate?.name ? singleBlogCate?.name : "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBcateId !== undefined) {
        const data = { id: getBcateId, bCateData: values };
        console.log(data);
        dispatch(updateBlogCate(data));
        if (isSuccess && updateBlogCate && isError == false) {
          toast.success("Blog Category update successfully");
          dispatch(setMessageEmpty());
        }
        navigate("/blog-category-list");
      } else {
        dispatch(createBlogCate(values));
        if (isSuccess && createBlogCate() && isError == false) {
          toast.success("Blog Category added successfully");
          dispatch(setMessageEmpty());
        }
        formik.resetForm();
      }
    },
  });
  return (
    <>
      <h3> {getBcateId !== undefined ? "Edit" : "Add"}Blog Category</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            name="name"
            onChg={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
            type="text"
            label="Enter Blog Category"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <button
            type="submit"
            className="btn btn-success rounded-3 border-0 my-3"
          >
            {getBcateId !== undefined ? "Edit" : "Add"} Blog Category
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlogCate;
