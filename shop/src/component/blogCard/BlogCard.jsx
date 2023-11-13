import { useLocation } from "react-router-dom";
import "./BlogCard.scss";

const BlogCard = ({ title }) => {
  const locattion = useLocation();
  const endpoin = locattion.pathname;
  console.log(endpoin);
  return (
    <>
      <div className={endpoin == "/blog/news" ? "blog p-0" : "blog"}>
        <div className="contain">
          <div className="row">
            <h4 className={endpoin == "/blog/news"? "d-none" : " d-block mb-4 fs-3"}>{title}</h4>
            <div className="col-12 ">
              <div className={endpoin == "/blog/news"? "blog_page" :"home_page"}>

              <div className="card shadow-sm" >
                <img
                  src="../../../public/images/blog/blog-1_405x.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span>10 Octobor,2023 </span>
                  <h5 className="card-title">A beautiful sunday morning...</h5>
                  <p className="card-text">
                    To enjoy alternately the sight of their distress. He really
                    shouted with pleasure; and, shaking...
                  </p>
                  <a href="#" className="btn ">
                    Read More
                  </a>
                </div>
              </div>
              <div className="card shadow-sm" >
                <img
                  src="../../../public/images/blog/blog-1_405x.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span>10 Octobor,2023 </span>
                  <h5 className="card-title">A beautiful sunday morning...</h5>
                  <p className="card-text">
                    To enjoy alternately the sight of their distress. He really
                    shouted with pleasure; and, shaking...
                  </p>
                  <a href="#" className="btn ">
                    Read More
                  </a>
                </div>
              </div>
              <div className="card shadow-sm" >
                <img
                  src="../../../public/images/blog/blog-1_405x.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span>10 Octobor,2023 </span>
                  <h5 className="card-title">A beautiful sunday morning...</h5>
                  <p className="card-text">
                    To enjoy alternately the sight of their distress. He really
                    shouted with pleasure; and, shaking...
                  </p>
                  <a href="#" className="btn ">
                    Read More
                  </a>
                </div>
              </div>
              <div className="card shadow-sm" >
                <img
                  src="../../../public/images/blog/blog-1_405x.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span>10 Octobor,2023 </span>
                  <h5 className="card-title">A beautiful sunday morning...</h5>
                  <p className="card-text">
                    To enjoy alternately the sight of their distress. He really
                    shouted with pleasure; and, shaking...
                  </p>
                  <a href="#" className="btn ">
                    Read More
                  </a>
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

export default BlogCard;
