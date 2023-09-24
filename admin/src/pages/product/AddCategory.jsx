import CustomInput from "../../component/CustomInput/CustomInput.jsx";

const AddCategory = () => {
  return (
    <>
      <h3>Add Category</h3>
      <div>
        <form>
          <CustomInput type="text" label="Enter Product Category" />
          <button
            type="submit"
            className="btn btn-success rounded-3 border-0 my-3"
          >
            Add 
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
