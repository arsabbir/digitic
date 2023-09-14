export const isAdmin = (req, res, next) => {
  //get user information
  const user = req.me;
  if (!user) {
    res.status(200).json({ message: "Unauthorized" });
  }
  //check admin
  if (user.role !== "admin") {
    res.status(400).json({ message: "Your are not admin" });
  } else {
    next();
  }
};
