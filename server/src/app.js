const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");


const app = express();

/* -------------------- Global Middleware -------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));



/* -------------------- Health Check -------------------- */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "NewsHub API running" });
});

/* -------------------- Global Error Handler -------------------- */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

/* -------------------- 404 Handler -------------------- */
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
