const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  articleName: String,
  articleImage: String,
  articleLink: String,
  articleAuthor: String,
  articlePublisher: String
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  articles: [articleSchema]
});

module.exports = mongoose.model("User", userSchema);
