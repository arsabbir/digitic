import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomer } from "../../features/customer/customerApiSlice.js";
import { getCustomerState } from "../../features/customer/customerSlice.js";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { Switch } from "antd";
import { timeAgo } from "../../helper/timeAgo.js";
import { getAllEnquiry } from "../../features/enquiry/EnquiryApiSlice.jsx";
import { getEnquiryState } from "../../features/enquiry/EnquirySlice.jsx";

const Enquiry = () => {
  const [search, setSearch] = useState(null);
  // hanlder section
  const handleEditCustomer = () => {};

  const customerHandleDelete = () => {};

  const handleSearch = () => {};

  // useState section
  const dispatch = useDispatch();

  // selector
  const { enquiries, isError, isLoading, message } =
    useSelector(getEnquiryState);

  useEffect(() => {}, [dispatch, enquiries, isError, isLoading, message]);

  const cols = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
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
          <button
            style={{ marginRight: "3px" }}
            className="btn btn-warning mr-2 btn-sm"
            onClick={() => handleEditCustomer(row._id)}
          >
            <AiTwotoneEdit />
          </button>
          <button
            onClick={() => customerHandleDelete(row._id)}
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
        data={enquiries}
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

export default Enquiry;
