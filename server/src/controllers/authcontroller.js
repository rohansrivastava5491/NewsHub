const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// forgot-password
const redisClient = require("../config/redis");
const sendEmail = require("../utils/sendEmail");

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const code = Math.floor(100000 + Math.random() * 900000);

    await redisClient.setEx(
      email,
      600,                // TTL in seconds
      code.toString()     // ✅ MUST be string
    );

    await sendEmail(email, code);

    res.json({ message: "Verification code sent to email" });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashed });
  res.status(201).json({ message: "User created" });
};
exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  res.json({ token });
};
