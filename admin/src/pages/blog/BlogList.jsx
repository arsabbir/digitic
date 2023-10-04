import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomer } from "../../features/customer/customerApiSlice.js";
import { getCustomerState } from "../../features/customer/customerSlice.js";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { Switch } from "antd";
import { timeAgo } from "../../helper/timeAgo.js";
import { deleteBlog, getAllBlog } from "../../features/blog/BlogApiSlice.js";
import { getBlogState } from "../../features/blog/BlogSlice.js";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Customer = () => {
  const [search, setSearch] = useState(null);
  // hanlder section
  const handleEditCustomer = () => {};

  const blogHandleDelete = (id) => {

    swal({
      title: "Sure",
      text: "Are you sure you want to delete",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        
         dispatch(deleteBlog(id))
        
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    
  };

  const handleSearch = () => {};

  // useState section
  const dispatch = useDispatch();

  // selector
  const { blogs, isError, isLoading, message } = useSelector(getBlogState);
  useEffect(() => {dispatch(getAllBlog())}, [dispatch, blogs, isError, isLoading, message]);

  const cols = [
    {
      name: "Name",
      selector: (row) => row.title,
    },
    {
      name: "Brand Logo",
      selector: (row) => (
        <img
          style={{
            width: "50px",
            height: "50px",
            margin: "10px",
            objectFit: "cover",
          }}
          src={row.photos.url}
        />
      ),
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
          <Link to={`/blog/${row._id}`}
            style={{ marginRight: "3px" }}
            className="btn btn-warning mr-2 btn-sm"
            onClick={() => handleEditCustomer(row._id)}
          >
            <AiTwotoneEdit />
          </Link>
          <button
            onClick={() => blogHandleDelete(row._id)}
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
        className="shadow-sm wolmart-table"
        title="All Customer Data"
        columns={cols}
        data={blogs}
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
