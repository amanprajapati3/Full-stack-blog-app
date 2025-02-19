import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    validate: [validator.isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  education: {
    type: String,
    require: true,
  },
  Created_time: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Users_data", userSchema);
