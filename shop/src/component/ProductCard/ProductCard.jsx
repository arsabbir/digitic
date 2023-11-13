import StarRatings from "react-star-ratings";
import "./ProductCard.scss";
import {
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const ProductCard = ({ title,gridShow }) => {
  const locattion = useLocation();
  const endpoin = locattion.pathname;
  

  return (
    <>
      <div className="product_card">
        <div className="contain">
          <h3 className="mb-4">{title}</h3>
          <div className="row">
            <div className="col-12 col_wrapper">
              {/* <div className="product_grid"> */}
              <div
                className={
                  endpoin == "/our-store" ? gridShow : "product_grid"
                }
              >

                <div className="card shadow">
                  <img
                    src="../../../public/images/product/19_00_260x.avif"
                    className="card-img-top normal_image"
                    alt="..."
                  ></img>
                  <img
                    src="../../../public/images/product/12_00_260x.avif"
                    alt=""
                    className="hover_image"
                  />
                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
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
                  <div className="card-body">
                    <span className="brand">Sony</span>
                    <div className="card-title">
                      <a href="">
                        Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                      </a>
                    </div>
                    <div className="rating">
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
                    <span className="regular_price ">$750.00</span>{" "}
                    <span className="sale_price">$500.00</span>
                  </div>
                </div>
                <div className="card shadow">
                  <img
                    src="../../../public/images/product/19_00_260x.avif"
                    className="card-img-top normal_image"
                    alt="..."
                  ></img>
                  <img
                    src="../../../public/images/product/12_00_260x.avif"
                    alt=""
                    className="hover_image"
                  />
                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
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
                  <div className="card-body">
                    <span className="brand">Sony</span>
                    <div className="card-title">
                      <a href="">
                        Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                      </a>
                    </div>
                    <div className="rating">
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
                    <span className="regular_price ">$750.00</span>{" "}
                    <span className="sale_price">$500.00</span>
                  </div>
                </div>
                <div className="card shadow">
                  <img
                    src="../../../public/images/product/19_00_260x.avif"
                    className="card-img-top normal_image"
                    alt="..."
                  ></img>
                  <img
                    src="../../../public/images/product/12_00_260x.avif"
                    alt=""
                    className="hover_image"
                  />
                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
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
                  <div className="card-body">
                    <span className="brand">Sony</span>
                    <div className="card-title">
                      <a href="">
                        Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                      </a>
                    </div>
                    <div className="rating">
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
                    <span className="regular_price ">$750.00</span>{" "}
                    <span className="sale_price">$500.00</span>
                  </div>
                </div>
                <div className="card shadow">
                  <img
                    src="../../../public/images/product/19_00_260x.avif"
                    className="card-img-top normal_image"
                    alt="..."
                  ></img>
                  <img
                    src="../../../public/images/product/12_00_260x.avif"
                    alt=""
                    className="hover_image"
                  />
                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
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
                  <div className="card-body">
                    <span className="brand">Sony</span>
                    <div className="card-title">
                      <a href="">
                        Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                      </a>
                    </div>
                    <div className="rating">
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
                    <span className="regular_price ">$750.00</span>{" "}
                    <span className="sale_price">$500.00</span>
                  </div>
                </div>
                <div className="card shadow">
                  <img
                    src="../../../public/images/product/19_00_260x.avif"
                    className="card-img-top normal_image"
                    alt="..."
                  ></img>
                  <img
                    src="../../../public/images/product/12_00_260x.avif"
                    alt=""
                    className="hover_image"
                  />
                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
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
                  <div className="card-body">
                    <span className="brand">Sony</span>
                    <div className="card-title">
                      <a href="">
                        Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                      </a>
                    </div>
                    <div className="rating">
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
                    <span className="regular_price ">$750.00</span>{" "}
                    <span className="sale_price">$500.00</span>
                  </div>
                </div>
                <div className="card shadow">
                  <img
                    src="../../../public/images/product/19_00_260x.avif"
                    className="card-img-top normal_image"
                    alt="..."
                  ></img>
                  <img
                    src="../../../public/images/product/12_00_260x.avif"
                    alt=""
                    className="hover_image"
                  />
                  <div className="wishlist position-absolute rounded-5">
                    <button className="  ">
                      <AiOutlineHeart />
                    </button>
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
                  <div className="card-body">
                    <span className="brand">Sony</span>
                    <div className="card-title">
                      <a href="">
                        Olympus pen E-PL9 kit with 14-42, EZ lens, camera
                      </a>
                    </div>
                    <div className="rating">
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
                    <span className="regular_price ">$750.00</span>{" "}
                    <span className="sale_price">$500.00</span>
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

export default ProductCard;
