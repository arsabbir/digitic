import CustomInput from "../../component/customInput/customInput.jsx";

const Forgotpassword = () => {
  return (
    <div
      className="py-5"
      style={{ background: "#f5f7fa", color: "#ffffff", minHeight: "100vh" }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title text-black">Forgot Password</h3>
        <p className="text-center text-black">
          Please Enter your register email to get reset password mail.
        </p>
        <form action="">
          <CustomInput
            className="form-control"
            type="password"
            label="Email Address"
            id="email"
          />

          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-black my-2"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
