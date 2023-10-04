import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { object, string, number, date } from "yup";
import { useFormik } from "formik";

import { getCouponState } from "../../features/coupon/couponSlice.js";

import CustomInput from "../../component/CustomInput/CustomInput.jsx";
import {
  createCoupon,
  getSingleCoupon,
  resetState,
  updateCoupon,
} from "../../features/coupon/couponApiSlice.js";

const schema = object().shape({
  name: string().required("Coupon Name is Required"),
  expire: date().required("Expiry Date is Required"),
  discount: number().required("Discount Percentage is Required"),
});

const AddCoupon = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getCouponId = location.pathname.split("/")[2];
  const { isSuccess, isError, singleCoupon, message } =
    useSelector(getCouponState);

  const changeDateFormet = (date) => {
    if (!date) return "";
    const parsedDate = new Date(date);

    if (isNaN(parsedDate)) return "";

    return parsedDate.toISOString().split("T")[0];
  };

  useEffect(() => {
    if (getCouponId !== undefined) {
      dispatch(getSingleCoupon(getCouponId));
    } else {
      dispatch(resetState());
    }
  }, [getCouponId, dispatch]);

  useEffect(() => {
    if (isError && !isSuccess) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, message, getSingleCoupon]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: singleCoupon?.name || "",
      discount: singleCoupon?.discount || "",
      expire: singleCoupon?.expire
        ? changeDateFormet(singleCoupon?.expire)
        : "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      if (getCouponId !== undefined) {
        const data = { id: getCouponId, couponData: values };
        dispatch(updateCoupon(data));
        toast.success("Coupon Updated Successfully");
        navigate("/coupon-list");
        formik.resetForm();
      } else {
        dispatch(createCoupon(values));
        if (!isError && message === "") {
          toast.success("Coupon Added Successfully");
          formik.resetForm();
        }
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getCouponId !== undefined ? "Edit" : "Add"} Coupon
      </h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="name"
            onChg={formik.handleChange}
            onBlr={formik.handleBlur}
            val={formik.values.name}
            label="Enter Coupon Name"
            i_id="name" // Fixed: Changed "id" to "i_id"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="date"
            name="expire"
            onChg={formik.handleChange}
            onBlr={formik.handleBlur}
            val={formik.values.expire}
            label="Enter Expiry Data"
            i_id="date" // Fixed: Changed "id" to "i_id"
          />
          <div className="error">
            {formik.touched.expire && formik.errors.expire}
          </div>
          <CustomInput
            type="number"
            name="discount"
            onChg={formik.handleChange}
            onBlr={formik.handleBlur}
            val={formik.values.discount}
            label="Enter Discount"
            i_id="discount" // Fixed: Changed "id" to "i_id"
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getCouponId !== undefined ? "Edit" : "Add"} Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;