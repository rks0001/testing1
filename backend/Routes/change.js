const express = require("express");
const router = express.Router();
const User = require("../models/User_model");
const bcrypt = require("bcryptjs");

router.post("/change_password", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(401)
      .json({ status: 401, message: "Enter email and password" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ status: 401, message: "Invalid user" });
    }

    const salt = await bcrypt.genSalt(10);
    const newpassword = await bcrypt.hash(password, salt);

    await User.findOneAndUpdate({ email }, { password: newpassword });

    res.json({ status: 200, message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
});

module.exports = router;
