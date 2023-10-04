import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { Switch } from "antd";
import { timeAgo } from "../../helper/timeAgo.js";
import { Link } from "react-router-dom";
import { getBlogState } from "../../features/blog/BlogSlice.js";
import { deleteBlogCate, getAllBlogCate } from "../../features/blog/BlogApiSlice.js";
import { sweetDelete } from "../../utils/SweetAlert.js";
const Customer = () => {
  const [search, setSearch] = useState(null);
  // hanlder section
  const handleSearch = () => {};

  // useState section
  const dispatch = useDispatch();

  // selector
  const { blogCategories, singleBlogCate, isError, isLoading, message } =
    useSelector(getBlogState);

  useEffect(() => {
    dispatch(getAllBlogCate);
  }, [dispatch, blogCategories, singleBlogCate, isError, isLoading, message]);

  const cols = [
    {
      name: "SNo.",
      selector: (row, index) => index - 1,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },

    {
      name: "Created At",
      selector: (row) => timeAgo(row.createdAt),
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          <div className="status-toggle">
            <Switch checked={row?.status ? true : false} />
          </div>
        </>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <Link
            to={`/blog-category/${row._id}`}
            style={{ marginRight: "3px" }}
            className="btn btn-warning mr-2 btn-sm"
          >
            <AiTwotoneEdit />
          </Link>
          <button
            onClick={() => sweetDelete(dispatch(deleteBlogCate(`${row._id}`)))}
            className="btn btn-danger  btn-sm"
          >
            <AiFillDelete className="" />
          </button>
        </>
      ),
    },
  ];
  return (
    <div>
      {" "}
      <DataTable
        className="shadow-sm digitic-table"
        title="All Blog Category Data"
        columns={cols}
        data={blogCategories}
        selectableRow
        highlightOnHover
        pagination
        pointerOnHover
        fixedHeader
        subHeader
        subHeaderComponent={
          <input
            type="search"
            className="form-control"
            style={{ width: "200px" }}
            placeholder="Search..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        }
      />
    </div>
  );
};

export default Customer;
