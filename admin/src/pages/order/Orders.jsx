import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { Switch } from "antd";
import { timeAgo } from "../../helper/timeAgo.js";
import { Link } from "react-router-dom";
// import { sweetDelete } from "../../utils/SweetAlert.js";
import { deleteBrand } from "../../features/product/productApiSlice.js";
import { sweetDelete } from "../../utils/SweetAlert.js";
import { getOrderState } from "../../features/order/orderSlice.js";
import { deleteOrder } from "../../features/order/orderApiSlice.js";
import swal from "sweetalert";
const Orders = () => {
  const [search, setSearch] = useState(null);

  const handleSearch = () => {};

  // useState section
  const dispatch = useDispatch();

  // selector
  const { orders, isError, isLoading, message } = useSelector(getOrderState);

  console.log(orders);
  const handleDeleteOrder = (id) => {
    swal({
      title: "Sure",
      text: "Are you sure you want to delete",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteOrder(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  useEffect(() => {}, [dispatch, orders, isError, isLoading, message]);

  const cols = [
    {
      name: "SNo",
      selector: (row, index) => index + 1,
    },
    {
      name: "Name",
      selector: (row) => row?.orderBy?.name,
    },

    {
      name: "Product",
      selector: (row) => (
        <>
          <Link to={`/orders/${row?.orderBy?._id}`}>View User Order</Link>
        </>
      ),
    },
    {
      name: "Amount",
      selector: (row) => row?.paymentIntent?.amouunt,
    },
    {
      name: "Created At",
      selector: (row) => row?.orderBy?.createdAt
    },

    {
      name: "Action",
      selector: (row) => (
        <>
          <Link
            // to={`/order/${row._id}`}
            style={{ marginRight: "3px" }}
            className="btn btn-warning mr-2 btn-sm"
          >
            <AiTwotoneEdit />
          </Link>
          <button
            onClick={() => handleDeleteOrder(row.orderBy._id)}
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
      {" "}
      <DataTable
        className="shadow-sm wolmart-table"
        title="All Order Data"
        columns={cols}
        data={orders}
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

export default Orders;
