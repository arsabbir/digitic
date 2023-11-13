import Marquee from "react-fast-marquee";
import "./Logo.scss";
const Logo = () => {
  return (
    <section className="logo ">
      <div className="contain">
        <div className="row">
          <div className="col-12 logo_white rounded-4 shadow-sm">
            <Marquee speed={30}>
              <div className="e rounded-4 py-2 d-flex gap-5">
                <img
                  src="../../../public/images/logo/brand-01_131x119@2x.png"
                  alt=""
                />
                <img
                  className="w-100"
                  src="../../../public/images/logo/brand-02_131x119@2x.png"
                  alt=""
                />
                <img
                  src="../../../public/images/logo/brand-03_131x119@2x.png"
                  alt=""
                />
                <img
                  src="../../../public/images/logo/brand-04_131x119@2x.png"
                  alt=""
                />
                <img
                  src="../../../public/images/logo/brand-05_131x119@2x.png"
                  alt=""
                />
                <img
                  src="../../../public/images/logo/brand-06_131x119@2x.png"
                  alt=""
                />
                <img
                  src="../../../public/images/logo/brand-07_131x119@2x.png"
                  alt=""
                />
                <img
                  src="../../../public/images/logo/brand-08_131x119@2x.png"
                  alt=""
                />
                <img
                  src="../../../public/images/logo/brand-09_131x119@2x.png"
                  alt=""
                />
                <img
                  src="../../../public/images/logo/brand-10_131x119@2x.png"
                  alt=""
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
