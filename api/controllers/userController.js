// import section
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt, { compare } from "bcrypt";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import Coupon from "../models/Coupon.js";
import uniqid from "uniqid";
import Order from "../models/Order.js";
/**
 * @DESC Get all users data
 * @ROUTE /api/v1/user
 * @method GET
 * @access public
 */

export const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find().populate("wishlist");
  if (users.length === 0) {
    return res.status(400).json({ message: "User not found" }).select("-password");
  }
  return res.status(400).json({users});
});

/**
 * @DESC Get Single users data
 * @ROUTE /api/v1/user/:id
 * @method GET
 * @access public
 */

export const getSingleUser = asyncHandler(async (req, res) => {
  // get value from params
  const id = req.params.id;

  const user = await User.findById(id).populate("wishlist").select("-password");

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  return res.status(200).json({user});
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */

export const createUser = asyncHandler(async (req, res) => {
  // get value from body
  const userData = req.body;
  const { name, email, password } = userData;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // email checked
  const emailCheck = await User.findOne({ email });
  if (emailCheck) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // hash password
  const hashPassword = await bcrypt.hash(password, 10);

  userData.password = hashPassword;

  // create a new user
  const user = await User.create(userData);
  return res.status(200).json({ user, message: "User create successfull" });
});

/**
 * @DESC Delete User
 * @ROUTE /api/v1/user/:id
 * @method DELETE
 * @access public
 */

export const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdDelete(id);
  res.status(200).json({ user, message: "User delete successfull" });
});

/**
 * @DESC Update User
 * @ROUTE /api/v1/user/:id
 * @method PUT/PATCH
 * @access public
 */

export const updateUser = asyncHandler(async (req, res) => {
  // get value
  const { id } = req.params;
  const userData = req.body;
  const { name, email, mobile, gender } = userData;

  //   validation
  if (!name || !email || !gender) {
    res.status(200).json({ message: "All fields are required" });
  }
  //   update user
  const user = await User.findByIdAndUpdate(id, userData, { new: true });

  //   response
  res.status(200).json({ user, message: ` ${name}your data has been updated` });
});

/**
 * @DESC Update User password
 * @ROUTE /api/v1/user/updatePassword/id
 * @method PUT/PATCH
 * @access public
 */

export const updatePassword = asyncHandler(async (req, res) => {
  // get value
  const { _id } = req.me;
  const { oldPassword, newPassword, confirmPassword } = req.body;

  if (!oldPassword || !confirmPassword || !newPassword) {
    res.status(400).json({ message: ` All fields are required` });
  }

  //  check user
  const userData = await User.findById(_id);

  if (userData) {
    if (newPassword !== confirmPassword) {
      res
        .status(400)
        .json({ message: ` New password and Old Password are not equel` });
    }
    // match old Password
    const matchPass = await bcrypt.compare(oldPassword, userData.password);

    if (matchPass == false) {
      res.status(200).json({ message: ` Old password not match` });
    }
    if (matchPass == true) {
      const updatePass = await bcrypt.hash(confirmPassword, 10);
      userData.password = updatePass;
      const updateUser = await User.findByIdAndUpdate(userData._id, userData);
    }
  }

  res.status(200).json({ userData, message: ` Password update successfull` });
});

/**
 * @DESC block User
 * @ROUTE api/v1/user/:id
 * @METHOD Get
 * @ACCESS public
 */
export const blockUser = asyncHandler(async (req, res) => {
  //get value from params
  const { id } = req.params;
  //check user
  const user = await User.findById(id);
  //not found user
  if (!user) {
    res.status(400).json({ message: "user not found" });
  }
  //update block user
  const blockUser = await User.findByIdAndUpdate(
    id,
    {
      isBlocked: true,
    },
    {
      new: true,
    }
  );

  res.status(200).json({ message: "user is Block!" });
});

/**
 * @DESC unblock User
 * @ROUTE api/v1/user/:id
 * @METHOD Get
 * @ACCESS public
 */

export const unblockUser = asyncHandler(async (req, res) => {
  //get value from params
  const { id } = req.params;
  //check user
  const user = await User.findById(id);
  if (!user) {
    res.status(400).json({ message: "user not found" });
  }
  //update unblock user
  await User.findByIdAndUpdate(
    id,
    {
      isBlocked: false,
    },
    {
      new: true,
    }
  );

  res.status(200).json({ message: "user is unblock!" });
});

/**
 * @DESC Get Wishlist
 * @ROUTE api/v1/user/wishlist
 * @METHOD Get
 * @ACCESS public
 */

export const getWishllist = asyncHandler(async (req, res) => {
  
  // get value
  const loginUser = req.me;

  // find user wishlist
  const getWishlist = await User.findById(loginUser._id).populate("wishlist");

  //  response
  return res.status(200).json({ getWishlist, message: "Show all wishlist" });
});

/**
 * @DESC Save Address
 * @ROUTE api/v1/user/save-address
 * @METHOD Get
 * @ACCESS public
 */

export const saveAddress = asyncHandler(async (req, res) => {
  // get login user data
  const loginUser = req.me;

  // update adress
  const updateUser = await User.findByIdAndUpdate(loginUser._id, {
    address: req.body.address,
  });

  // response
  return res.status(200).json({ updateUser, message: "Save adress" });
});

/**
 * @DESC Add Cart
 * @ROUTE api/v1/user/cart
 * @METHOD Post
 * @ACCESS public
 */

export const addCartUser = asyncHandler(async (req, res) => {
  // get value
  const { cart } = req.body;
  const loginUser = req.me;

  let products = [];
  const user = await User.findById(loginUser._id);

  // check if user already have product in cart
  const alreadyExistCart = await Cart.findOne({ orderby: user._id });
  console.log(alreadyExistCart);
  // if already Exist Cart true
  if (alreadyExistCart) {
    // Use deleteOne to remove the document
    const removeCart = await Cart.findByIdAndDelete(alreadyExistCart._id);
    return res.status(200).json({ message: "Cart Remove" });
  }

  // already exist false
  let object = {};
  for (let i = 0; i < cart.length; i++) {
    object.product = cart[i]._id;
    object.color = cart[i].color;
    object.count = cart[i].count;
    // price
    let getPrice = await Product.findById(cart[i]._id).select("price").exec();
    object.price = getPrice.price;
    products.push(object);
  }
  console.log("Add");
  //cart total
  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal += products[i].price * products[i].count;
  }

  // and new cart
  const newCart = await Cart.create({
    products,
    cartTotal,
    orderby: user._id,
  });

  //response
  return res.status(200).json({ newCart, message: "Cart Add successfully" });
});

/**
 * @DESC remove cart
 * @ROUTE api/v1/user/cart
 * @METHOD Post
 * @ACCESS public
 */

export const removeCartUser = asyncHandler(async (req, res) => {
  // get login user value
  const loginUser = req.me;
  // login user data from database
  const user = await User.findOne(loginUser._id);
  const cart = await Cart.findOneAndDelete({ orderby: user._id });
  return res.status(200).json({ cart, message: "Remove Cart" });
});
/**
 * @DESC get user cart
 * @ROUTE api/v1/user/cart
 * @METHOD Post
 * @ACCESS public
 */

export const getAllCart = asyncHandler(async (req, res) => {
  // get login user value
  const loginUser = req.me;

  // login user data from database
  const cart = await Cart.findOne({ orderby: loginUser._id }).pupulate(
    "product"
  );
  return res.status(200).json({ cart, message: "All cart shows of a user" });
});

/**
 * @DESC apply coupon
 * @ROUTE api/v1/user/applycoupon
 * @METHOD Post
 * @ACCESS public
 */

export const applyCoupon = asyncHandler(async (req, res) => {
  // get login user value
  const { coupon } = req.body;
  const loginUser = req.me;
  const user = await User.findOne(loginUser._id);

  // validate coupon
  const validCoupon = await Coupon.findOne({ name: coupon });

  if (validCoupon === null) {
    return res.status(400).json({ message: "Invalid coupon" });
  }
  const cartCheck = await Cart.findOne({ orderby: user._id });
  console.log(cartCheck);
  // if cart is empty
  if (cartCheck == null) {
    return res.status(400).json({ message: "Cart is empty" });
  }
  let { cartTotal } = await Cart.findOne({ orderby: user._id }).populate(
    "products.product"
  );

  // total cart after discount
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);

  const discountCart = await Cart.findOneAndUpdate({
    orderby: user._id,
    totalAfterDiscount,
  });

  return res
    .status(200)
    .json({ totalAfterDiscount, message: "Apply Coupon Done" });
});

/**
 * @DESC create order
 * @ROUTE api/v1/user/cart/cash-order
 * @METHOD Post
 * @ACCESS public
 */

export const createOrder = asyncHandler(async (req, res) => {
  // get value
  const { COD, couponApplied } = req.body;
  const loginUser = req.me;
  // validation
  // if (!COD || !couponApplied) {
  //   return res
  //   .status(200)
  //   .json({ message: "All field are required" });
  // }
  if (!COD) {
    return res.status(200).json({ message: "Create cash order failed" });
  }

  // get login user data from database
  const user = await User.findOne(loginUser._id);
  // user cart
  let userCart = await Cart.findOne({ orderby: user._id });
  if (!userCart) {
    return res.status(200).json({ message: "Cart Empty" });
  }
  let finalAmount = 0;

  // if couponApplied true
  if (couponApplied && userCart.totalAfterDiscount) {
    finalAmount = userCart.totalAfterDiscount;
  } else {
    finalAmount = userCart.cartTotal;
  }

  // new order
  let newOrder = await Order.create({
    products: userCart.products,
    paymentIntent: {
      id: uniqid(),
      method: "COD",
      amouunt: finalAmount,
      created: Date.now,
      currency: "usd",
    },
    orderBy: user._id,
    orderStatus: "Cash On Delivery",
  });

  let update = userCart.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id },
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });
console.log(update.filter,update.update);
  const updated = await Product.bulkWrite(update, {});
  return res.json({ message: "Order successfull" });
});

/**
 * @DESC Get all order
 * @ROUTE api/v1/user/allorders
 * @METHOD Post
 * @ACCESS public
 */

export const getAllOrders = asyncHandler(async (req, res) => {
  const allUserorders = await Order.find()
    .populate("products.product")
    .populate("orderBy")
    .exec();

  return res.json({allUserorders, message: "All Order Show" });
});

/**
 * @DESC Get Single Order
 * @ROUTE api/v1/user/cash-order
 * @METHOD Post
 * @ACCESS public
 */

export const getOrder = asyncHandler(async (req, res) => {
  // login user
  const loginUser = req.me;

  const userOrder = await Order.findOne({ orderby: loginUser._id })
    .populate("products.product")
    .populate("orderby");

  // response
  return res.json({userOrder, message: "All Order Show" });
});
/**
 * @DESC Get order by user id
 * @ROUTE api/v1/user/getorderbyuserid
 * @METHOD Post
 * @ACCESS public
 */

export const getOrderUserId = asyncHandler(async (req, res) => {
  // login user
  const  {_id}  = req.params;

  const userOrder = await Order.findOne({ orderby: _id })
    .populate("products.product")
    .populate("orderBy");
if (!userOrder) {
  return res.json({ message: "This User not order" });
}
  // response
  return res.json({userOrder, message: "User Order Show" });
});

/**
 * @DESC Update order status
 * @ROUTE api/v1/user/order/update-order/:id
 * @METHOD Post
 * @ACCESS public
 */

export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  // validation
  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }
  // update status
  const updateStatus = await Order.findByIdAndUpdate(
    id,
    {
      orderStatus: status,
      paymentIntent: { status: status },
    },
    { new: true }
  );

  return res
    .status(200)
    .json({ updateStatus, message: "Order updated successfully" });
});
