import { useState } from "react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { AiFillDelete, AiFillEye } from "react-icons/ai";

import { timeAgo } from "../../helper/timeAgo.js";
import {
  deleteEnquiry,
  updateEnquiry,
} from "../../features/enquiry/EnquiryApiSlice.jsx";
import { getEnquiryState } from "../../features/enquiry/EnquirySlice.jsx";
import { Link } from "react-router-dom";

const Enquiry = () => {
  const [search, setSearch] = useState(null);

  // hanlder section
  const handleViewEnquiry = () => {};
  const enquiryHandleDelete = (id) => {
    swal({
      title: "Sure",
      text: "Are you sure you want to delete",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteEnquiry(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handleSearch = () => {};

  const setEnquiryStatus = (e, i) => {
    const data = { id: i, enqData: e };
    dispatch(updateEnquiry(data));
  };
  // useState section
  const dispatch = useDispatch();

  // selector
  const { enquiries, isError, isLoading, message } =
    useSelector(getEnquiryState);
  // handler section

  // useEffect
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
          <select
            className="form-control form-select"
            value={row?.status ? row.status : "Submitted"}
            onChange={(e) => setEnquiryStatus(e.target.value, row._id)}
          >
            <option value="Submitted">Submitted</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <Link
            to={`/enquiries/${row._id}`}
            style={{ marginRight: "3px" }}
            className="btn btn-warning mr-2 btn-sm"
            onClick={() => handleViewEnquiry(row._id)}
          >
            <AiFillEye />
          </Link>
          <button
            onClick={() => enquiryHandleDelete(row._id)}
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
        title="All Enquiry Data"
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
