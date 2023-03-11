const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("Connected to Database..."))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
