import Breadcrumb from "../../component/breadCrumb/BreadCrumb.jsx";
import { Seo } from "../../utils/Seo.jsx";
// import { FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import "./CompareProduct.scss";
const CompareProduct = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Compare Product", link: "/compare-product" },
  ];
  return (
    <>
      {" "}
      <Seo pageTitle={"Compare Product Ezy Shop"} />
      <Breadcrumb items={breadcrumbItems} />
      <section id="Compare_Product">
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
                  <div className="pro_info">
                    <span className=" ques">Brand</span>
                    <span className="ans ">Sony</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Type</span>
                    <span className="ans ">Camera</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">SKU</span>
                    <span className="ans ">SKU003</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Availability</span>
                    <span className="ans ">In Stock</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Color</span>
                    <span className="ans ">
                      <div className="com_color">
                        <span> </span>
                        <span></span>
                        <span></span>
                      </div>
                    </span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Color</span>
                    <span className="ans ">
                      <div className="com_size">
                        <span>s</span>
                        <span>xxl</span>
                        <span>m</span>
                      </div>
                    </span>
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
                  <div className="pro_info">
                    <span className=" ques">Brand</span>
                    <span className="ans ">Sony</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Type</span>
                    <span className="ans ">Camera</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">SKU</span>
                    <span className="ans ">SKU003</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Availability</span>
                    <span className="ans ">In Stock</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Color</span>
                    <span className="ans ">
                      <div className="com_color">
                        <span> </span>
                        <span></span>
                        <span></span>
                      </div>
                    </span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Color</span>
                    <span className="ans ">
                      <div className="com_size">
                        <span>s</span>
                        <span>xxl</span>
                        <span>m</span>
                      </div>
                    </span>
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
                  <div className="pro_info">
                    <span className=" ques">Brand</span>
                    <span className="ans ">Sony</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Type</span>
                    <span className="ans ">Camera</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">SKU</span>
                    <span className="ans ">SKU003</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Availability</span>
                    <span className="ans ">In Stock</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Color</span>
                    <span className="ans ">
                      <div className="com_color">
                        <span> </span>
                        <span></span>
                        <span></span>
                      </div>
                    </span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Color</span>
                    <span className="ans ">
                      <div className="com_size">
                        <span>s</span>
                        <span>xxl</span>
                        <span>m</span>
                      </div>
                    </span>
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
                  <div className="pro_info">
                    <span className=" ques">Brand</span>
                    <span className="ans ">Sony</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Type</span>
                    <span className="ans ">Camera</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">SKU</span>
                    <span className="ans ">SKU003</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Availability</span>
                    <span className="ans ">In Stock</span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Color</span>
                    <span className="ans ">
                      <div className="com_color">
                        <span> </span>
                        <span></span>
                        <span></span>
                      </div>
                    </span>
                  </div>
                  <div className="pro_info">
                    <span className=" ques">Color</span>
                    <span className="ans ">
                      <div className="com_size">
                        <span>s</span>
                        <span>xxl</span>
                        <span>m</span>
                      </div>
                    </span>
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

export default CompareProduct;
