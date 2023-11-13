import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import { BsSearch, BsTwitter, BsYoutube } from "react-icons/bs";
import {
  BiLogoFacebookSquare,
  BiLogoPinterest,
  BiLogoInstagram,
} from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <footer className="py-60">
        <div className="contain">
          <div className="row footer_top">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-10 align-items-center t">
                <img
                  src="../../../public/images/footer/newsletter-icon_244x244@2x.png"
                  alt=""
                />
                <h2 className="text-white mb-0">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="">
                <div className="input-group  ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Product Here..."
                    aria-label="Search Product Here..."
                    aria-describedby="basic-addon2"
                  />
                  <span
                    className="input-group-text icon text-white border-0"
                    id="basic-addon2"
                  >
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-60">
        <div className="contain">
          <div className="row footer_mid">
            <div className="col-3">
              <div>
                <h2>Contact Us</h2>
                <ul>
                  <li>
                    <span>
                      Demo Store <br />
                      No. 1259 Freedom, New York, 11111 <br />
                      United States
                    </span>
                  </li>
                  <li className="mt-3">
                    <span>+880-1786917499</span>
                  </li>
                  <li className="mt-3">
                    <a href="mailto:contact.arsabbir@gmail.com">
                      contact.arsabbir@gmail.com
                    </a>
                  </li>
                </ul>
                <ul className="list_social mt-2">
                  <li>
                    <a className="social_icon" href="">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a className="social_icon" href="">
                      <BiLogoFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a className="social_icon" href="">
                      <BiLogoPinterest />
                    </a>
                  </li>
                  <li>
                    <a className="social_icon" href="">
                      <BiLogoInstagram />
                    </a>
                  </li>
                  <li>
                    <a className="social_icon" href="">
                      <BsYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div>
                <h2>Information</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Refund Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Shipping Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Terms of Service</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div>
                <h2>Account</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Search</Link>
                  </li>
                  <li>
                    <Link to={"/"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Faq</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Size Chart</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div>
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Accessories</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Laptops</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Headphones</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Smart Watches</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Tablets</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="pr-20">
                <h2>Our App</h2>
                <div>
                  <p className="text-white">
                    Download our App and get extra 15% Discount on your first
                    Order..!
                  </p>
                </div>
                <div className="py-2">
                  
                  <img
                    src="../../../public/images/footer/app-icon-01.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../../../public/images/footer/app-icon-02.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="contain">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white ">
                &copy; {new Date().getFullYear()}; Poewer By Ezy Shop
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
