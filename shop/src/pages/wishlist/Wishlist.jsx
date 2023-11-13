import Breadcrumb from "../../component/breadCrumb/BreadCrumb.jsx";
import { Seo } from "../../utils/Seo.jsx";
// import { FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import "./Wishlist.scss";
const Wishlist = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Wishlist", link: "/wishlist" },
  ];
  return (
    <>
      {" "}
      <Seo pageTitle={"Wishlist Ezy Shop"} />
      <Breadcrumb items={breadcrumbItems} />
      <section id="Wishlist">
        <div className="contain">
          <div className="row">
            <div className="col-3 col_grid">
              <div className="card position-relative">
                <img
                  src="../../../public/images/product/12_00_260x.avif"
                  className="card-img-top"
                  alt="..."
                />
                <div className="cross_icon position-absolute top-0 right-0">
                  <LiaTimesSolid />
                </div>

                <div className="card-body ">
                  <div className="card-title head">
                    Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                  </div>

                  <div className="pro_info">
                    <span className="regular_price ">$750.00</span>
                    <span className="sale_price ">$750.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 col_grid">
              <div className="card position-relative">
                <img
                  src="../../../public/images/product/12_00_260x.avif"
                  className="card-img-top"
                  alt="..."
                />
                <div className="cross_icon position-absolute top-0 right-0">
                  <LiaTimesSolid />
                </div>

                <div className="card-body ">
                  <div className="card-title head">
                    Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                  </div>

                  <div className="pro_info">
                    <span className="regular_price ">$750.00</span>
                    <span className="sale_price ">$750.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 col_grid">
              <div className="card position-relative">
                <img
                  src="../../../public/images/product/12_00_260x.avif"
                  className="card-img-top"
                  alt="..."
                />
                <div className="cross_icon position-absolute top-0 right-0">
                  <LiaTimesSolid />
                </div>

                <div className="card-body ">
                  <div className="card-title head">
                    Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                  </div>

                  <div className="pro_info">
                    <span className="regular_price ">$750.00</span>
                    <span className="sale_price ">$750.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 col_grid">
              <div className="card position-relative">
                <img
                  src="../../../public/images/product/12_00_260x.avif"
                  className="card-img-top"
                  alt="..."
                />
                <div className="cross_icon position-absolute top-0 right-0">
                  <LiaTimesSolid />
                </div>

                <div className="card-body ">
                  <div className="card-title head">
                    Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                  </div>

                  <div className="pro_info">
                    <span className="regular_price ">$750.00</span>
                    <span className="sale_price ">$750.00</span>
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

export default Wishlist;
