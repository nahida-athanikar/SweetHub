const adminMiddleware = (req, res, next) => {
  // later: check req.user.role === "admin"
  next();
};

export default adminMiddleware;
