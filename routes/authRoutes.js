// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// router.get("/", authController.renderAuthPage);
router.get("/", (req, res) => {
    res.render("index"); 
  });
  
router.post("/signup", authController.signup);
router.post("/signin", authController.signin);

module.exports = router;
