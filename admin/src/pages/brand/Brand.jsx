import { useState } from "react";
import DataTable from "react-data-table-component";

const Brand = () => {
  const [search, setSearch] = useState(null);
  // hanlder section
  const handleEditBrand = () => {
    alert("handle Edit Brand");
  };




  
  const brandHandleDelete = () => {
    alert("brandHandleDelete");
  };


  const handleSearch = () => {
    alert("handleSearch");
  };

  const cols = [
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
          src={row.photo}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },
    {
      name: "Created At",
      selector: (row) => "12day",
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          <div className="status-toggle">
            <input
              type="checkbox"
              id="status_1"
              className="check"
              checked={row?.status ? true : false}
            />
            <label
              onClick={alert("okay")}
              htmlFor="status_1"
              className="checktoggle"
            >
              checkbox
            </label>
          </div>
        </>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <button
            className="btn btn-warning mr-1 btn-sm"
            data-toggle="modal"
            data-target="#brandEditModal"
            onClick={() => handleEditBrand(row._id)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            onClick={() => brandHandleDelete(row._id)}
            className="btn btn-danger  btn-sm"
          >
            <i className="fa fa-trash"></i>
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
        title="All Brands Data"
        columns={cols}
        data={[]}
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

export default Brand;
