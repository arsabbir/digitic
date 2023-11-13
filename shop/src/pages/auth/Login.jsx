import Breadcrumb from "../../component/breadCrumb/BreadCrumb.jsx";
import { Seo } from "../../utils/Seo.jsx";
import "./Auth.scss";

const Login = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Login", link: "/login" },
  ];
  return (
    <>
      {" "}
      <Seo pageTitle={"Wishlist Ezy Shop"} />
      <Breadcrumb items={breadcrumbItems} />
      <section id="Login">
        <div className="contain">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-4">
              <div className="card-group">
                <div className="card shadow">
                  <div className="card-body">
                    <h4 className="card-title">Login</h4>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control labe_tag"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label className=" " htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
