import Collection from "../../component/collection/Collection.jsx";
import Logo from "../../component/logo/Logo.jsx";
import "./Home.scss";
import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../../component/blogCard/BlogCard.jsx";
import ProductCard from "../../component/ProductCard/ProductCard.jsx";
import SpecialProduct from "../../component/special-product/SpecialProduct.jsx";
import SubBanner from "../../component/sub-banner/SubBanner.jsx";
import { Seo } from "../../utils/Seo.jsx";
const Home = () => {
  return (
    <>
      <Seo pageTitle={"Ezy Shop"} />
      <div className="home_wrapper_1 py-5">
        <div className="contain">
          <div className="row">
            <div className="col-6">
              <div className="main_banner ">
                <img
                  className="img-fluid rounded-3"
                  src="../../../public/images/home/main-banner-1_830x550.webp"
                  alt=""
                />
                <div className="main_banner_content ">
                  <div className="text1">SUPERCHARGED FOR PROS.</div>
                  <div className="text2">iPad S13+ Pro.</div>
                  <div className="desc">
                    From $999.00 or $41.62/mo. <br />
                    for 24 mo. Footnote*
                  </div>
                  <div className="banner_btn ">
                    <Link className="btn btn-sm rounded-5">BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="righ_side_ban">
                <Link to={"/"} className="small_banner ">
                  <img
                    className="img-fluid rounded-3"
                    src="../../../public/images/home/catbanner-01.webp"
                    alt=""
                  />
                  <div className="small_banner_content ">
                    <div className="text1">Best Sale</div>
                    <div className="text2">Laptops Max</div>
                    <div className="desc">From $1699.00 or $64.62/mo.</div>
                  </div>
                </Link>
                <Link to={"/"} className="small_banner ">
                  <img
                    className="img-fluid rounded-3"
                    src="../../../public/images/home/catbanner-03.webp"
                    alt=""
                  />
                  <div className="small_banner_content ">
                    <div className="text1">Best Sale</div>
                    <div className="text2">Laptops Max</div>
                    <div className="desc">From $1699.00 or $64.62/mo.</div>
                  </div>
                </Link>
                <Link to={"/"} className="small_banner ">
                  <img
                    className="img-fluid rounded-3"
                    src="../../../public/images/home/catbanner-02.webp"
                    alt=""
                  />
                  <div className="small_banner_content ">
                    <div className="text1">Best Sale</div>
                    <div className="text2">Laptops Max</div>
                    <div className="desc">From $1699.00 or $64.62/mo.</div>
                  </div>
                </Link>
                <Link to={"/"} className="small_banner ">
                  <img
                    className="img-fluid rounded-3"
                    src="../../../public/images/home/catbanner-04.webp"
                    alt=""
                  />
                  <div className="small_banner_content ">
                    <div className="text1">Best Sale</div>
                    <div className="text2">Laptops Max</div>
                    <div className="desc">From $1699.00 or $64.62/mo.</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_wrapper_2 py-60">
        <div className="contain">
          <div className="row">
            <div className="col-12">
              <div className="service">
                <div className="ser_item">
                  <div className="image">
                    <img
                      src="../../../public/images/home/service-01_70x.png"
                      alt=""
                    />
                  </div>
                  <div className="serv_desc">
                    <div className="service_title ">Free Shipping</div>
                    <div className="service_subtitle">
                      From all orders over $100
                    </div>
                  </div>
                </div>
                <div className="ser_item">
                  <div className="image">
                    <img
                      src="../../../public/images/home/service-02_70x.png"
                      alt=""
                    />
                  </div>
                  <div className="serv_desc">
                    <div className="service_title ">Free Shipping</div>
                    <div className="service_subtitle">
                      From all orders over $100
                    </div>
                  </div>
                </div>
                <div className="ser_item">
                  <div className="image">
                    <img
                      src="../../../public/images/home/service-03_70x.png"
                      alt=""
                    />
                  </div>
                  <div className="serv_desc">
                    <div className="service_title ">Free Shipping</div>
                    <div className="service_subtitle">
                      From all orders over $100
                    </div>
                  </div>
                </div>
                <div className="ser_item">
                  <div className="image">
                    <img
                      src="../../../public/images/home/service-04_70x.png"
                      alt=""
                    />
                  </div>
                  <div className="serv_desc">
                    <div className="service_title ">Free Shipping</div>
                    <div className="service_subtitle">
                      From all orders over $100
                    </div>
                  </div>
                </div>
                <div className="ser_item">
                  <div className="image">
                    <img
                      src="../../../public/images/home/service-05_70x.png"
                      alt=""
                    />
                  </div>
                  <div className="serv_desc">
                    <div className="service_title ">Free Shipping</div>
                    <div className="service_subtitle">
                      From all orders over $100
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Collection />
      <SpecialProduct title={"Special Products"} />
      <ProductCard title={"Featured Collection"} />
      <SubBanner />
      <ProductCard title={"Our Popular Product"} />
      <Logo />
      <BlogCard title={"Our latest News"} />
    </>
  );
};

export default Home;
