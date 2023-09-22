import { useState } from "react";
import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddProduct = () => {
  // useState Section
  const [desc, setDesc] = useState();

  // handler section
  const handleDesc = (e) => {
    // alert("okk")
    console.log(e);
  };
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
