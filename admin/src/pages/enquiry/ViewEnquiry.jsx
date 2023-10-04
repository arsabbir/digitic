import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { getEnquiryState } from "../../features/enquiry/EnquirySlice.jsx";
import {
  getSingleEnquiry,
  updateEnquiry,
} from "../../features/enquiry/EnquiryApiSlice.jsx";
import { resetState } from "../../features/blog/BlogApiSlice.js";

const ViewEnquiry = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getEnqId = location.pathname.split("/")[2];

  const { singleEnquiry } = useSelector(getEnquiryState);

  useEffect(() => {
    dispatch(getSingleEnquiry(getEnqId));
  }, [getEnqId]);

  // go back enquiry list
  const goBack = () => {
    navigate(-1);
  };
  const setEnquiryStatus = (e, i) => {
    const data = { id: i, enqData: e };
    dispatch(updateEnquiry(data));
    dispatch(resetState());
    setTimeout(() => {
      dispatch(getSingleEnquiry(getEnqId));
    });
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-4 title">View Enquiry</h3>
        <button
          className="bg-transpatent border-0 fs-6 mb-0 d-flex align-items-center gap-1"
          onClick={goBack}
        >
          <BiArrowBack className="fs-5" /> Go Back
        </button>
      </div>
      <div className="mt-5 bg-white p-4 d-flex gap-3 flex-column rounded-3">
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Name:</h6>
          <p className="mb-0">{singleEnquiry?.name}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Mobile:</h6>
          <p className="mb-0">
            <a href={`tel:+880${singleEnquiry?.mobile}`}>
              {singleEnquiry?.mobile}
            </a>
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Email:</h6>
          <p className="mb-0">
            <a href={`mailto:${singleEnquiry?.email}`}>
              {singleEnquiry?.email}
            </a>
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Comment:</h6>
          <p className="mb-0">{singleEnquiry?.comment}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Status:</h6>
          <p className="mb-0">{singleEnquiry?.status}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h6 className="mb-0">Change Status:</h6>
          <div>
            <select
              name=""
              value={
                singleEnquiry?.status ? singleEnquiry?.status : "Submitted"
              }
              className="form-control form-select"
              id=""
              onChange={(e) => setEnquiryStatus(e.target.value, getEnqId)}
            >
              <option value="Submitted">Submitted</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEnquiry;
