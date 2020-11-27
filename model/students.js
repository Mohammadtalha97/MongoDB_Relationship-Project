import mongoose from "mongoose";

const SocialProfileSchema = new mongoose.Schema([
  {
    twitter: String,
  },
  {
    facebook: String,
  },
  {
    linkdin: String,
  },
  {
    instagram: String,
  },
]);

const studentSchema = new mongoose.Schema({
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
  dateOfBirth: {
    type: Date,
    trim: true,
    default: null,
    required: [true, "Date Of Birthday Is Required"],
  },
  phone: {
    type: Number,
    minlength: 9,
    maxlength: 10,
    required: [true, "User Phone Number Is Required"],
    validate: {
      validator: function (v) {
        return /^[789]\d{9}$/.test(v);
      },
      message: "{VALUE} is not a valid phone number!",
    },
  },
  socialProfiles: {
    type: [SocialProfileSchema],
  },
  city: {
    type: String,
    lowercase: true,
    trim: true,
    maxlength: 50,
  },
  state: {
    type: String,
    lowercase: true,
    trim: true,
    maxlength: 50,
  },
  pincode: {
    type: Number,
    minlength: 6,
    validate: {
      validator: function (v) {
        return /^[1-9][0-9]{5}$/.test(v);
      },
      message: "{VALUE} is not valid pincode",
    },
    required: [true, "Pincode Is Required"],
  },
});

export default mongoose.model("Student", studentSchema);
