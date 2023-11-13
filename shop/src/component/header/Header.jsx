import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="header-top-strip py-2">
        <div className="contain">
          <div className="row">
            <div className="col-md-6  ">
              <p className="text-white mb-0 bar">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-md-6 ">
              <p className="text-end text-white mb-0 bar">
                Hotline:
                <a
                  href="tel:+880 1786917499"
                  className="text-white text-decoration-none"
                >
                  +880 1786917499
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-upper py-3">
        <div className="contain">
          <div className="row">
            <div className="col-2">
              <h2 className="">
                <Link className="text-decoration-none text-white ">
                  Ezy Shop
                </Link>
              </h2>
            </div>
            <div className="col-4">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text icon" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="header-upper-link d-flex align-items-center justify-content-end gap-40">
                <div className="gap-2">
                  <Link
                    to={"/compare-product"}
                    className="d-flex gap-2 text-decoration-none align-items-center"
                  >
                    <img src="../../../public/images/header/icon.svg" alt="" />
                    <p className="mb-0 text-white">
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/wishlist"}
                    className="d-flex gap-2 text-decoration-none align-items-center"
                  >
                    <img
                      src="../../../public/images/header/icon (1).svg"
                      alt=""
                    />
                    <p className="mb-0 text-white">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex gap-2 dropdown text-decoration-none align-items-center">
                    <img
                      src="../../../public/images/header/icon (2).svg"
                      alt=""
                    />
                    <p
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="mb-0 text-white dropdown-toggle login_drop"
                    >
                      Log In <br /> My Account
                    </p>
                    <ul
                      className="dropdown-menu top_left"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <Link to={"/login"} className="dropdown-item" >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to={"/signup"} className="dropdown-item" >
                          Sign UP
                        </Link>
                      </li>

                    </ul>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex gap-2 text-decoration-none align-items-center">
                    <img
                      src="../../../public/images/header/icon (3).svg"
                      alt=""
                    />
                    <div>
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0 text-white">$0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom py-1">
        <div className="contain">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div className="">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        className="me-2"
                        src="../../../public/images/header/icon4.svg"
                        alt=""
                      />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links ">
                  <div className="d-flex align-items-center gap-15 ">
                    <NavLink to={"/"}> HOME</NavLink>
                    <NavLink to={"/our-store"}> OUR STORE</NavLink>
                    <NavLink to={"/blog/news"}> BLOGS</NavLink>
                    <NavLink to={"/contact"}> CONTACT</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
