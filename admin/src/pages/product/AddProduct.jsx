import { useState } from "react";
import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { object, string, number, date, InferType, array } from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
let schema = object().shape({
  title: string().required("Title is Required"),
  description: string().required("Description is Required"),
  price: number().required("Price is Required"),
  brand: string().required("Brand is Required"),
  category: string().required("Category is Required"),
  tags: string().required("Tag is Required"),
  color: array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),
  quantity: number().required("Quantity is Required"),
});

const AddProduct = () => {
  // useState Section
  const [desc, setDesc] = useState();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [images, setImages] = useState([]);

  // selector section


  // handler section
  const handleDesc = (e) => {
    // alert("okk")
    console.log(e);
  };

  // formik

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProducts(values));
      formik.resetForm();
      setColor(null);
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });

  return (
    <>
      <h3>AddProduct</h3>
      <div>
        <form>
          <CustomInput type="text" label="Enter product title" />
          <div className="my-3">
            {" "}
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(e) => {
                handleDesc(e);
              }}
            />
            <div className="my-3">
              <CustomInput type="number" label="Enter Product Price" />
            </div>
            <div className="my-3">
              <select className="form-control mb-3" name="" id="">
                <option value="">-Select Category-</option>
              </select>
            </div>
            <div className="my-3">
              <select className="form-control mb-3" name="" id="">
                <option value="">-Select Color-</option>
              </select>
            </div>
            <div className="my-3">
              <select className="form-control mb-3" name="" id="">
                <option value="">-Select Brand-</option>
              </select>
            </div>
          </div>

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
