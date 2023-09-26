import "./product.css";
import { useEffect, useState } from "react";
import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import { object, string, number, array } from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getproductState } from "../../features/product/productSlice.js";

import { AiOutlineClose } from "react-icons/ai";
import {
  createProduct,
  getAllBrand,
  getAllColor,
  getAllProCategory,
  resetState,
} from "../../features/product/productApiSlice.js";

import { Select } from "antd";
import { uploadImage } from "../../features/upload/uploadApiSlice.js";
let schema = object().shape({
  name: string().required("title is Required"),
  desc: string().required("Description is Required"),
  price: number().required("Price is Required"),
  brand: string().required("Brand is Required"),
  categories: string().required("Category is Required"),
  tags: string().required("Tag is Required"),
  color: array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),
  quantity: number().required("Quantity is Required"),
});

const AddProduct = () => {
  // selector section
  let {
    brands,
    colors,
    proCategories,

    isError,
    isSuccess,
    isLoading,
  } = useSelector(getproductState);

  // useState Section

  const dispatch = useDispatch();
  const [color, setColor] = useState([]);

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

  const handleDeleteClick = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedPreviews = [...previewImages];

    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setPreviewImages(updatedPreviews);
  };

  const handleColors = (e) => {
    setColor(e);
  };

  // ...

  // handler section for handling image upload
  const handleImageUpload = (acceptedFiles) => {
    const formData = new FormData();
    for (let i = 0; i < acceptedFiles.length; i++) {
      formData.append("photo", acceptedFiles[i]);
    }

    // Dispatch the image upload action here
    dispatch(uploadImage(formData));
  };

  // formik

  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      price: "",
      brand: "",
      categories: "",
      tags: "",
      color: [],
      quantity: "",
      photos: [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleImageUpload(selectedFiles);
      setSelectedFiles([]);
      dispatch(createProduct(values));
      if (createProduct()) {
        toast.success("Product Added Successfullly!");
      }
      setPreviewImages([]);
      formik.resetForm();
      setColor(null);
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });
  // useEffect

  const coloropt = [];
  colors.forEach((i) => {
    coloropt.push({
      label: i.name,
      value: i._id,
    });
  });

  const pic = [];
  const formData = new FormData();

  for (let i = 0; i < selectedFiles.length; i++) {
    formData.append("photo", selectedFiles[i]);

    pic.push({
      public_id: `placeholder_public_id_${i}`,
      url: URL.createObjectURL(selectedFiles[i]),
    });
  }

  // Now, pic contains objects for each selected file

  useEffect(() => {
    formik.values.color = color ? color : [];
    formik.values.photos = pic;
  }, [color, pic]);

  useEffect(() => {
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isError, isLoading, isSuccess]);

  useEffect(() => {
    dispatch(getAllBrand());
    dispatch(getAllProCategory());
    dispatch(getAllColor());
  }, []);

  return (
    <>
      <h3>AddProduct</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <div>
            <CustomInput
              type="text"
              label="Enter product title"
              name="name"
              onChg={formik.handleChange("name")}
              onBlr={formik.handleBlur("name")}
              val={formik.values.name}
            />
            <div className="error">
              {formik.touched.name && formik.errors.name}
            </div>
          </div>

          <div className="">
            <ReactQuill
              theme="snow"
              val={formik.values.desc}
              name="desc"
              onChange={formik.handleChange("desc")}
            />

            <div className="error">
              {formik.touched.desc && formik.errors.desc}
            </div>
          </div>

          <div className="my-3">
            <CustomInput
              type="number"
              label="Enter Product Price"
              name="price"
              onChg={formik.handleChange("price")}
              onBlr={formik.handleBlur("price")}
              val={formik.values.price}
            />
            <div className="error">
              {formik.touched.price && formik.errors.price}
            </div>
          </div>

          {/* brand  */}
          <div className="my-3">
            <select
              name="brand"
              onChange={formik.handleChange("brand")}
              onBlur={formik.handleBlur("brand")}
              value={formik.values.brand}
              className="form-control py-3 mb-3"
              id=""
            >
              <option value="">Select Brand</option>
              {brands.map((i, index) => {
                return (
                  <option key={index} value={i.name}>
                    {i.name}
                  </option>
                );
              })}
            </select>
            <div className="error">
              {formik.touched.brand && formik.errors.brand}
            </div>
          </div>

          {/* product category */}
          <div className="my-3">
            <select
              name="categories"
              onChange={formik.handleChange("categories")}
              onBlur={formik.handleBlur("categories")}
              value={formik.values.categories}
              className="form-control py-3 mb-3"
              id=""
            >
              <option value="">Select Category</option>
              {proCategories.map((i, index) => {
                return (
                  <option key={index} value={i.name}>
                    {i.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* tags */}
          <div className="my-3">
            <select
              name="tags"
              onChange={formik.handleChange("tags")}
              onBlur={formik.handleBlur("tags")}
              value={formik.values.tags}
              className="form-control py-3 mb-3"
              id=""
            >
              <option value="" disabled>
                Select Tags
              </option>
              <option value="featured">Featured</option>
              <option value="popular">Popular</option>
              <option value="special">Special</option>
            </select>
          </div>
          {/* color */}
          <div className="color">
            <Select
              mode="multiple"
              allowClear
              className="w-100"
              placeholder="Select colors"
              defaultValue={color}
              onChange={(e) => handleColors(e)}
              options={coloropt}
            />
          </div>
          <div className="error">
            {formik.touched.color && formik.errors.color}
          </div>

          {/* Quentity */}
          <div className="quantity">
            <CustomInput
              type="number"
              label="Enter Product Quantity"
              name="quantity"
              onChg={formik.handleChange("quantity")}
              onBlr={formik.handleBlur("quantity")}
              val={formik.values.quantity}
            />
          </div>
          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
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
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
