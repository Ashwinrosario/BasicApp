const express = require("express");
const router = express.Router();
const user = require("../Schema/userSchema");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const encryptedpassword = await bcrypt.hash(req.body.password, 10);
  const data = new user({ name: req.body.name, password: encryptedpassword });
  const result = await data.save();
  if (!result) {
    res.json({
      status: "Failed",
      message: "Not successful",
    });
  } else {
    res.json({
      status: "Success",
      message: "successful",
      data: result,
    });
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  const existingUser = await user.findOne({ name: name });

  if (existingUser) {
    console.log("exist");
    if (await bcrypt.compare(password, existingUser.password)) {
      res.json({
        status: 500,
        message: "true",
      });
    } else {
      res.json({
        status: 409,
        message: "wrong password",
      });
    }
  } else {
    console.log("doesnt exist");

    res.json({
      status: 409,
      message: "User does not exist",
    });
  }
});

module.exports = router;
