const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { email } = req.body;

  return res.status(201).json({
    id: "user_123",
    email: email,
  });
});

module.exports = router;