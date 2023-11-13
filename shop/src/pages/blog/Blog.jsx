import { NavLink } from "react-router-dom";
import Breadcrumb from "../../component/breadCrumb/BreadCrumb.jsx";
import { Seo } from "../../utils/Seo.jsx";
import BlogCard from "../../component/blogCard/BlogCard.jsx";
import "./Blog.scss";

const Blog = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "News", link: "/blog/news" },
  ];

  return (
    <>
      <Seo pageTitle={"News Ezy Shop"} />
      <Breadcrumb items={breadcrumbItems} />
      <section id="Blog_News">
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
            </div>
            <div className="col-9">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
