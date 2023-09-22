import { useState } from "react";
import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  // useState Section
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    // alert("okk")
    console.log(e);
  };
  return (
    <>
      <h3>Add Blog</h3>
      <div></div>
      <form>
        <CustomInput type="text" label="Enter Blog Title" />
        <select className="form-control mb-3" name="" id="">
          <option value="">-Select Blog Category-</option>
        </select>
        <ReactQuill
          theme="snow"
          value={desc}
          onChange={(e) => {
            handleDesc(e);
          }}
        />

        <button
          type="submit"
          className="btn btn-success rounded-3 border-0 my-3"
        >Add</button>
      </form>
    </>
  );
};

export default AddBlog;
