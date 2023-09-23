import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";

import { ImBlog } from "react-icons/im";

import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Outlet } from "react-router-dom";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Button, Dropdown, Layout, Menu, Space, theme } from "antd";
const { Header, Sider, Content } = Layout;
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authApiSlice.js";

const MainLayout = () => {
  // useState
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // handler
  const handleLogoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  // dropdown menu item
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <p onClick={(e) => handleLogoutUser(e)}>Logout</p>,
      key: "3",
    },
  ];
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0 center-text">
            <span className="sm-logo">AR</span>
            <span className="lg-logo">Abdur Rahman</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
              //
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Add Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-3 shadow-sm"
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "5px",
            height: "55px",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            { className: "trigger", onClick: () => setCollapsed(!collapsed) }
          )}

          <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
            <div className="position-relative px-2">
              <IoIosNotifications size={20} />
              <span
                style={{ width: "13px", height: "13px" }}
                className="d-flex badge bg-warning align-items-center   position-absolute justify-content-center"
              >
                3
              </span>
            </div>

            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a
                onClick={(e) => e.preventDefault()}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "3px",
                    alignContent: "center",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      width={32}
                      height={32}
                      style={{
                        objectFit: "cover",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsSKhtuu9QsBbKIHsILn7XC8LE5Vi2MbMAw&usqp=CAU"
                      alt=""
                    />
                  </div>

                  <div
                    style={{
                      paddingLeft: "5px",
                      color: "black",
                    }}
                  >
                    <h5 style={{ margin: "0", textDecoration: "none" }}>
                      Abdur Rahman
                    </h5>
                    <p style={{ margin: "0" }}>ar420sabbir@gmail.com</p>
                  </div>
                </div>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <main>
            <Outlet />
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
