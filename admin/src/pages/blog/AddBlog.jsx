import { useEffect, useState } from "react";
import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import { object, string, number, array } from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { Select, message } from "antd";
import { uploadImage } from "../../features/upload/uploadApiSlice.js";
import {
  getBlogState,
  setMessageEmpty,
} from "../../features/blog/BlogSlice.js";
import {
  createBlog,
  getAllBlogCate,
  getSingleBlog,
  resetState,
  updateBlog,
} from "../../features/blog/BlogApiSlice.js";

import { useLocation, useNavigate } from "react-router-dom";
import { getUploadState } from "../../features/upload/uploadSlice.js";

// yup schema
let schema = object().shape({
  title: string().required("title is Required"),
  description: string().required("Description is Required"),
  category: string().required("Category is Required"),
});
const AddBlog = () => {
  // selector section
  let { blogs, singleBlog, blogCategories, isError, isSuccess, isLoading } =
    useSelector(getBlogState);
  const { images } = useSelector(getUploadState);
  // useState Section
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getBlogId = location.pathname.split("/")[2];
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // handler section
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);

      const imagePreviews = fileArray.map((file) => URL.createObjectURL(file));
      setPreviewImages(imagePreviews);
    }
  };
  // preview image delete
  const handleDeleteClick = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedPreviews = [...previewImages];

    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setPreviewImages(updatedPreviews);
  };

  // handler section for handling image upload
  const handleImageUpload = (acceptedFiles) => {
    const formData = new FormData();
    for (let i = 0; i < acceptedFiles.length; i++) {
      formData.append("photo", acceptedFiles[i]);
    }
    // Dispatch the image upload action here
    dispatch(uploadImage(formData));
  };
  const pic = [];

  for (let i = 0; i < images.length; i++) {
    pic.push({
      public_id: images[i].public_id,
      url: images[i].url,
    });
  }

  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getSingleBlog(getBlogId));
    } else {
      dispatch(resetState());
    }
  }, [getBlogId, dispatch]);

  useEffect(() => {
    formik.values.photos = pic;
  }, [pic]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, isLoading, isSuccess, getSingleBlog, dispatch]);

  useEffect(() => {
    dispatch(getAllBlogCate());
  }, []);
  // formim
  const formik = useFormik({
    initialValues: {
      title: singleBlog?.title ? singleBlog.title : "",
      description: singleBlog?.description ? singleBlog.description : "",
      category: singleBlog?.category ? singleBlog.category : "",
      photos: [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBlogId !== undefined) {
        const data = { id: getBlogId, blogData: values };

        dispatch(updateBlog(data));
        toast.success("Blog updated successfully");
        navigate("/blog-list");
        dispatch(setMessageEmpty());
      } else {
        handleImageUpload(selectedFiles);
        setSelectedFiles([]);
        dispatch(createBlog(values));
        console.log(values.photos);
        console.log(values);
        if (createBlog()) {
          toast.success("Product Added Successfullly!");
        }
        setPreviewImages([]);
        formik.resetForm();
      }
    },
  });
  return (
    <>
      <h3>{getBlogId !== undefined ? "Edit" : "Add"} Blog</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <div>
            <CustomInput
              type="text"
              label="Enter Blog Title"
              name="title"
              onChg={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
          </div>
          <div>
            <select
              className="form-control mb-3"
              name="category"
              id=""
              onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
              value={formik.values.category}
            >
              <option value="">-Select</option>
              {blogCategories.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <div className="error">
              {formik.touched.category && formik.errors.category}
            </div>
          </div>
          <div>
            {" "}
            <ReactQuill
              theme="snow"
              value={formik.values.description}
              name="description"
              onBlur={formik.handleBlur("description")}
              onChange={formik.handleChange("description")}
            />
            <div className="error">
              {formik.touched.description && formik.errors.description}
            </div>
          </div>

          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              multiple
              onChange={handleFileChange}
            />
          </div>
          {previewImages.length > 0 && (
            <div className="mt-3">
              <h4>Previews:</h4>
              <div className=" gap-2 d-flex flex-wrap">
                {previewImages.map((image, index) => (
                  <div
                    className=""
                    style={{ maxWidth: "200px !important" }}
                    key={index}
                  >
                    <div
                      id="img_hov"
                      className="image-preview position-relative"
                    >
                      <img
                        src={image}
                        alt={`Preview ${index}`}
                        className="rounded"
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          height: "20px",
                          width: "20px",

                          top: "7px",
                          left: "7px",
                        }}
                        id="del_btn"
                        className=" bg-danger  text-white delete-button position-absolute  d-grid align-items-center justify-content-center rounded-circle text-center "
                        onClick={() => handleDeleteClick(index)}
                      >
                        <AiOutlineClose />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button
            type="submit"
            className="btn btn-success rounded-3 border-0 my-3"
          >
            {getBlogId !== undefined ? "Edit" : "Add"} Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
