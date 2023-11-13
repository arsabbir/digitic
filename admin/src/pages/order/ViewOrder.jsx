import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { Switch } from "antd";
import { timeAgo } from "../../helper/timeAgo.js";
import { Link, useLocation } from "react-router-dom";
import { deleteBrand } from "../../features/product/productApiSlice.js";
import { sweetDelete } from "../../utils/SweetAlert.js";
import { getOrderState } from "../../features/order/orderSlice.js";
import { getSingUserOrder } from "../../features/order/orderApiSlice.js";

// import sectin end

const ViewOrder = () => {
  const [search, setSearch] = useState(null);
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const handleSearch = () => {};

  // useState section
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingUserOrder(userId));
  }, []);

  // selector
  const { singleUserOrder, isError, isLoading, message } =
  useSelector(getOrderState);
  useEffect(() => {}, [dispatch, singleUserOrder, isError, isLoading, message]);
  console.log(singleUserOrder);




  const cols = [
    {
      name: "SNo",
      selector: (row, index) => index + 1,
    },
    {
      name: "Product Name",
      selector: (row) => row.product.name,
    },
    {
      name: "Brand",
      selector: (row) => row.product.brand,
    },
    {
      name: "Count",
      selector: (row) => row.count,
    },
    {
      name: "Color",
      selector: (row) => row.product.color,
    },

    {
      name: "Created At",
      selector: (row) => timeAgo(row.product.createdAt),
    },
    
    {
      name: "Action",
      selector: (row) => (
        <>
          <Link
            to={`/brand/${row._id}`}
            style={{ marginRight: "3px" }}
            className="btn btn-warning mr-2 btn-sm"
          >
            <AiTwotoneEdit />
          </Link>
          <button
            onClick={() => sweetDelete(dispatch(deleteBrand(`${row._id}`)))}
            className="btn btn-danger  btn-sm"
          >
            <AiFillDelete className="" />
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <DataTable
        className="shadow-sm digitic-table"
        title="View Order"
        columns={cols}
        data={singleUserOrder?.products}
        theme="solarized"
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
    </>
  );
};

export default ViewOrder;
