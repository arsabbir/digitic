import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { Switch } from "antd";
import { timeAgo } from "../../helper/timeAgo.js";
import { getCouponState } from "../../features/coupon/couponSlice.js";
import { Link } from "react-router-dom";
import { sweetDelete } from "../../utils/SweetAlert.js";
import { deleteCoupon } from "../../features/coupon/couponApiSlice.js";

const CouponList = () => {
  const [search, setSearch] = useState(null);
  // hanlder section

  const customerHandleDelete = (id) => {
    swal({
      title: "Sure",
      text: "Are you sure you want to delete",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCoupon(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });    
  };

  const handleSearch = () => {};

  // useState section
  const dispatch = useDispatch();

  // selector
  const { coupons, isError, isLoading, message } = useSelector(getCouponState);

  useEffect(() => {}, [dispatch, coupons, isError, isLoading, message]);

  const cols = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Discount",
      selector: (row) => row.discount,
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
            to={`/coupon/${row._id}`}
            style={{ marginRight: "3px" }}
            className="btn btn-warning mr-2 btn-sm"
          >
            <AiTwotoneEdit />
          </Link>
          <button
            onClick={() => customerHandleDelete(`${row._id}`)}
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
        data={coupons}
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
    </div>
  );
};

export default CouponList;
