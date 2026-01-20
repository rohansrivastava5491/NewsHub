require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const redisClient = require("./config/redis");

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    // MongoDB
    await connectDB();
    console.log("MongoDB connected");

    // Redis (explicit connect)
    await redisClient.connect();
    console.log("Redis connected");

    // Server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
})();
