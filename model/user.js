import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: [true, "Name Is Required"],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Email Is Required"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },

  password: {
    type: String,
    required: [true, "Password Is Required"],
    minlength: 6,
    validate: {
      validator: function (v) {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v);
      },
      message:
        "Password must contain 1 Special, 1 Lower, 1 Number, Total 6 Character",
    },
  },
});

userSchema.methods.generateJsonWebToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY);
  return token;
};

export default mongoose.model("User", userSchema);
