import Breadcrumb from "../../component/breadCrumb/BreadCrumb.jsx";
import { NavLink } from "react-router-dom";
import "./OurStore.scss";
import StarRatings from "react-star-ratings";
import { AiOutlineDown } from "react-icons/ai";
import ProductCard from "../../component/ProductCard/ProductCard.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Seo } from "../../utils/Seo.jsx";
const OurStore = () => {
  
  const [gridSort,setGridSort]=useState("grid_4")

const gridHanldleClick = (e,grid)=>{
  e.preventDefault();
  setGridSort(grid)
  
}

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Our Store", link: "/our-store" },
  ];

  return (
    <>
    <Seo pageTitle={"Our Store"}/>
      <Breadcrumb items={breadcrumbItems} />
      <section id="Our_Store">
        <div className="contain">
          <div className="row">
            <div className="col-3">
              <div className="card shop_cate shadow ">
                <nav className="side_nav">
                  <h3>Shop by categories</h3>
                  <ul>
                    <li>
                      <NavLink>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/our-store"}>Our Store</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/blog"}>Blog</NavLink>
                    </li>
                    <li>
                      <NavLink>Contact</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="card shadow filer_by">
                <div className="card-body">
                  <div className="card-title">
                    <h5>Filter By</h5>
                  </div>
                  <div className="box_content">
                    <div className="filter_title">
                      <span>Availability</span>
                    </div>
                    <div className="">
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          in stock (21)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          out of stock
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="box_content">
                    <div className="filter_title mb-2">
                      <span>Price</span>
                    </div>
                    <div className="d-flex gap-3  price_input ">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="formId1"
                        />
                        <label>Form</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="formId1"
                        />
                        <label>To</label>
                      </div>
                    </div>
                  </div>
                  <div className="box_content">
                    <div className="filter_title mb-2">
                      <span>Colors</span>
                    </div>
                    <div className="d-flex gap-3 colors  ">
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <div className="box_content">
                    <div className="filter_title">
                      <span>Size</span>
                    </div>
                    <div className="">
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          s(10)
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          S(10)
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          S(10)
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          S(10)
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          s(10)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h5> Product Tag</h5>
                  </div>
                  <div className="tag_list">
                    <ul>
                      <li>
                        <a href="">Oneplus </a>
                      </li>
                      <li>
                        <a href="">Oneplus </a>
                      </li>
                      <li>
                        <a href="">Oneplus </a>
                      </li>
                      <li>
                        <a href="">Oneplus </a>
                      </li>
                      <li>
                        <a href="">Oneplus </a>
                      </li>
                      <li>
                        <a href="">Oneplus </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card shadow ">
                <div className="card_heading">
                  <h5>Random Product</h5>
                </div>
                {/* <div className="card_row">
                  <div className="card_image">
                    <img
                      src="../../../public/images/product/19_00_260x.avif"
                      className="card-img-top normal_image"
                      alt="..."
                    ></img>
                  </div>
                  <div className="card-body">
                    <h3></h3>
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
                </div> */}
                <ul>
                  <li>
                    <div className="card_row">
                      <div className="card_image">
                        <img
                          src="../../../public/images/product/19_00_260x.avif"
                          className="card-img-top normal_image"
                          alt="..."
                        ></img>
                      </div>
                      <div className="card-body">
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
                  </li>
                  <li>
                    <div className="card_row">
                      <div className="card_image">
                        <img
                          src="../../../public/images/product/19_00_260x.avif"
                          className="card-img-top normal_image"
                          alt="..."
                        ></img>
                      </div>
                      <div className="card-body">
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
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="sorting shadow-sm">
                <div className="select_sort">
                  <h2>
                    <label htmlFor="">Sort By</label>
                  </h2>
                  <div className="select">
                    <select name="sort_by" className="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                </div>
                <div className="icon_sort">
                  <div className="product_count">21 products</div>
                  <div className="btn_group">
                    <a className="" onClick={(e)=>{gridHanldleClick(e,"grid_4")}} href="#">
                      <img
                        src="../../../public/images/our-store/icon (1).svg"
                        alt=""
                      />
                    </a>
                    <a href="" onClick={(e)=>{gridHanldleClick(e,"grid_3")}}>
                      <img
                        src="../../../public/images/our-store/icon (2).svg"
                        alt=""
                      />
                    </a>
                    <a href="" onClick={(e)=>{gridHanldleClick(e,"grid_2")}}>
                      <img
                        src="../../../public/images/our-store/icon (3).svg"
                        alt=""
                      />
                    </a>
                    <a href="" onClick={(e)=>{gridHanldleClick(e,"grid_1")}}>
                      <img
                        src="../../../public/images/our-store/icon (4).svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <ProductCard gridShow={gridSort}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStore;
