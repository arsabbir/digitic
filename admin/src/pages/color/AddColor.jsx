import CustomInput from "../../component/CustomInput/CustomInput.jsx";

const AddColor = () => {
  return (
    <>
      <h3>Add Color</h3>
      <div>
        <form>
          <CustomInput type="color" label="Enter Color" />
          <button
            type="submit"
            className="btn btn-success rounded-3 border-0 my-3"
          >
            Add Color
          </button>
        </form>
      </div>
    </>
  );
};

export default AddColor;
