import "./SpecialProduct.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import StarRatings from "react-star-ratings";
const SpecialProduct = ({ title }) => {
  return (
    <div id="SpecialProduct">
      <div className="contain">
        <h3 className="mb-4">{title}</h3>
        <div className="row">
          <div className="col-12 col_wrapper ">
            <div className="card shadow " style={{ width: "496px" }}>
              <div className="product_slider">
                <div className="card_img">
                  <a href="">
                    <img
                      src="../../../public/images/product/19_00_260x.avif"
                      className="card-img-top normal_image"
                      alt="..."
                    ></img>
                  </a>

                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
                  </div>
                  <div className="discount_per text-black fw-medium  badge position-absolute rounded-5">
                    -35%
                  </div>
                  <div className="product_hover">
                    <button className="btn btn-sm d-block quick_view">
                      <AiOutlineEye />
                    </button>
                    <button className="btn btn-sm d-block ">
                      <AiOutlineShoppingCart />
                    </button>
                    <button className="btn btn-sm  d-block">
                      <BiGitCompare />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className="brand">Sony</span>
                  <div className="card-title mt-3">
                    <a href="">
                      Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                    </a>
                  </div>
                  <div className="rating ">
                    <StarRatings
                      rating={4}
                      starRatedColor="gold"
                      // changeRating={}
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </div>
                  <span className="regular_price d-inline-block mb-3">
                    $750.00
                  </span>{" "}
                  <span className="sale_price d-inline-block mb-3">
                    $500.00
                  </span>
                  <div className="count_down mb-3">
                    <span className="day_count ">
                      <span className="num fw-medium">400</span>
                      <span className="time_day ">days</span>
                    </span>
                    <span className="">
                      <span className="hour mx-1 badge rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="min badge mx-1 rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="second badge mx-1 rounded-circle p-2 bg-danger">
                        20
                      </span>
                    </span>
                  </div>
                  <Link className="btn px-4 py-2  btn-primary text-uppercase rounded-5">
                    option
                  </Link>
                </div>
              </div>
            </div>
            <div className="card shadow " style={{ width: "496px" }}>
              <div className="product_slider">
                <div className="card_img">
                  <a href="">
                    <img
                      src="../../../public/images/product/19_00_260x.avif"
                      className="card-img-top normal_image"
                      alt="..."
                    ></img>
                  </a>

                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
                  </div>
                  <div className="discount_per text-black fw-medium  badge position-absolute rounded-5">
                    -35%
                  </div>
                  <div className="product_hover">
                    <button className="btn btn-sm d-block quick_view">
                      <AiOutlineEye />
                    </button>
                    <button className="btn btn-sm d-block ">
                      <AiOutlineShoppingCart />
                    </button>
                    <button className="btn btn-sm  d-block">
                      <BiGitCompare />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className="brand">Sony</span>
                  <div className="card-title mt-3">
                    <a href="">
                      Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                    </a>
                  </div>
                  <div className="rating ">
                    <StarRatings
                      rating={4}
                      starRatedColor="gold"
                      // changeRating={}
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </div>
                  <span className="regular_price d-inline-block mb-3">
                    $750.00
                  </span>{" "}
                  <span className="sale_price d-inline-block mb-3">
                    $500.00
                  </span>
                  <div className="count_down mb-3">
                    <span className="day_count ">
                      <span className="num fw-medium">400</span>
                      <span className="time_day ">days</span>
                    </span>
                    <span className="">
                      <span className="hour mx-1 badge rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="min badge mx-1 rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="second badge mx-1 rounded-circle p-2 bg-danger">
                        20
                      </span>
                    </span>
                  </div>
                  <Link className="btn px-4 py-2  btn-primary text-uppercase rounded-5">
                    option
                  </Link>
                </div>
              </div>
            </div>
            <div className="card shadow " style={{ width: "496px" }}>
              <div className="product_slider">
                <div className="card_img">
                  <a href="">
                    <img
                      src="../../../public/images/product/19_00_260x.avif"
                      className="card-img-top normal_image"
                      alt="..."
                    ></img>
                  </a>

                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
                  </div>
                  <div className="discount_per text-black fw-medium  badge position-absolute rounded-5">
                    -35%
                  </div>
                  <div className="product_hover">
                    <button className="btn btn-sm d-block quick_view">
                      <AiOutlineEye />
                    </button>
                    <button className="btn btn-sm d-block ">
                      <AiOutlineShoppingCart />
                    </button>
                    <button className="btn btn-sm  d-block">
                      <BiGitCompare />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className="brand">Sony</span>
                  <div className="card-title mt-3">
                    <a href="">
                      Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                    </a>
                  </div>
                  <div className="rating ">
                    <StarRatings
                      rating={4}
                      starRatedColor="gold"
                      // changeRating={}
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </div>
                  <span className="regular_price d-inline-block mb-3">
                    $750.00
                  </span>{" "}
                  <span className="sale_price d-inline-block mb-3">
                    $500.00
                  </span>
                  <div className="count_down mb-3">
                    <span className="day_count ">
                      <span className="num fw-medium">400</span>
                      <span className="time_day ">days</span>
                    </span>
                    <span className="">
                      <span className="hour mx-1 badge rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="min badge mx-1 rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="second badge mx-1 rounded-circle p-2 bg-danger">
                        20
                      </span>
                    </span>
                  </div>
                  <Link className="btn px-4 py-2  btn-primary text-uppercase rounded-5">
                    option
                  </Link>
                </div>
              </div>
            </div>
            <div className="card shadow " style={{ width: "496px" }}>
              <div className="product_slider">
                <div className="card_img">
                  <a href="">
                    <img
                      src="../../../public/images/product/19_00_260x.avif"
                      className="card-img-top normal_image"
                      alt="..."
                    ></img>
                  </a>

                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
                  </div>
                  <div className="discount_per text-black fw-medium  badge position-absolute rounded-5">
                    -35%
                  </div>
                  <div className="product_hover">
                    <button className="btn btn-sm d-block quick_view">
                      <AiOutlineEye />
                    </button>
                    <button className="btn btn-sm d-block ">
                      <AiOutlineShoppingCart />
                    </button>
                    <button className="btn btn-sm  d-block">
                      <BiGitCompare />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className="brand">Sony</span>
                  <div className="card-title mt-3">
                    <a href="">
                      Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                    </a>
                  </div>
                  <div className="rating ">
                    <StarRatings
                      rating={4}
                      starRatedColor="gold"
                      // changeRating={}
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </div>
                  <span className="regular_price d-inline-block mb-3">
                    $750.00
                  </span>{" "}
                  <span className="sale_price d-inline-block mb-3">
                    $500.00
                  </span>
                  <div className="count_down mb-3">
                    <span className="day_count ">
                      <span className="num fw-medium">400</span>
                      <span className="time_day ">days</span>
                    </span>
                    <span className="">
                      <span className="hour mx-1 badge rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="min badge mx-1 rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="second badge mx-1 rounded-circle p-2 bg-danger">
                        20
                      </span>
                    </span>
                  </div>
                  <Link className="btn px-4 py-2  btn-primary text-uppercase rounded-5">
                    option
                  </Link>
                </div>
              </div>
            </div>
            <div className="card shadow " style={{ width: "496px" }}>
              <div className="product_slider">
                <div className="card_img">
                  <a href="">
                    <img
                      src="../../../public/images/product/19_00_260x.avif"
                      className="card-img-top normal_image"
                      alt="..."
                    ></img>
                  </a>

                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
                  </div>
                  <div className="discount_per text-black fw-medium  badge position-absolute rounded-5">
                    -35%
                  </div>
                  <div className="product_hover">
                    <button className="btn btn-sm d-block quick_view">
                      <AiOutlineEye />
                    </button>
                    <button className="btn btn-sm d-block ">
                      <AiOutlineShoppingCart />
                    </button>
                    <button className="btn btn-sm  d-block">
                      <BiGitCompare />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className="brand">Sony</span>
                  <div className="card-title mt-3">
                    <a href="">
                      Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                    </a>
                  </div>
                  <div className="rating ">
                    <StarRatings
                      rating={4}
                      starRatedColor="gold"
                      // changeRating={}
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </div>
                  <span className="regular_price d-inline-block mb-3">
                    $750.00
                  </span>{" "}
                  <span className="sale_price d-inline-block mb-3">
                    $500.00
                  </span>
                  <div className="count_down mb-3">
                    <span className="day_count ">
                      <span className="num fw-medium">400</span>
                      <span className="time_day ">days</span>
                    </span>
                    <span className="">
                      <span className="hour mx-1 badge rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="min badge mx-1 rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="second badge mx-1 rounded-circle p-2 bg-danger">
                        20
                      </span>
                    </span>
                  </div>
                  <Link className="btn px-4 py-2  btn-primary text-uppercase rounded-5">
                    option
                  </Link>
                </div>
              </div>
            </div>
            <div className="card shadow " style={{ width: "496px" }}>
              <div className="product_slider">
                <div className="card_img">
                  <a href="">
                    <img
                      src="../../../public/images/product/19_00_260x.avif"
                      className="card-img-top normal_image"
                      alt="..."
                    ></img>
                  </a>

                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
                  </div>
                  <div className="discount_per text-black fw-medium  badge position-absolute rounded-5">
                    -35%
                  </div>
                  <div className="product_hover">
                    <button className="btn btn-sm d-block quick_view">
                      <AiOutlineEye />
                    </button>
                    <button className="btn btn-sm d-block ">
                      <AiOutlineShoppingCart />
                    </button>
                    <button className="btn btn-sm  d-block">
                      <BiGitCompare />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className="brand">Sony</span>
                  <div className="card-title mt-3">
                    <a href="">
                      Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                    </a>
                  </div>
                  <div className="rating ">
                    <StarRatings
                      rating={4}
                      starRatedColor="gold"
                      // changeRating={}
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                  </div>
                  <span className="regular_price d-inline-block mb-3">
                    $750.00
                  </span>{" "}
                  <span className="sale_price d-inline-block mb-3">
                    $500.00
                  </span>
                  <div className="count_down mb-3">
                    <span className="day_count ">
                      <span className="num fw-medium">400</span>
                      <span className="time_day ">days</span>
                    </span>
                    <span className="">
                      <span className="hour mx-1 badge rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="min badge mx-1 rounded-circle p-2 bg-danger">
                        15
                      </span>
                      :
                      <span className="second badge mx-1 rounded-circle p-2 bg-danger">
                        20
                      </span>
                    </span>
                  </div>
                  <Link className="btn px-4 py-2  btn-primary text-uppercase rounded-5">
                    option
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
