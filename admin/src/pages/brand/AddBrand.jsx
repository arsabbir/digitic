import CustomInput from "../../component/CustomInput/CustomInput.jsx";

const AddBrand = () => {
  return (
    <>
      <h3>Add Brand</h3>
      <div>
        <form>
          <CustomInput type="text" label="Enter Product Brand" />
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

export default AddBrand;
