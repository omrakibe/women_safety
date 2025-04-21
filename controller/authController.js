// controllers/authController.js
const User = require("../models/user");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
    // res.redirect("index", {name})
  } catch (err) {
    res.status(500).json({ message: "Server error!" });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    res.status(200).json({ message: "Sign in successful!" });
  } catch (err) {
    res.status(500).json({ message: "Server error!" });
  }
};

exports.renderAuthPage = (req, res) => {
  res.render("auth"); // Make sure your file is in views/auth.ejs
};
