import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: [true, "Firstname Is Required"],
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    minlength: 4,
    maxlength: 50,
    required: [true, "Lastname Is Required"],
    trim: true,
    lowercase: true,
  },
});

const lecturerSchema = new mongoose.Schema({
  name: {
    type: nameSchema,
    required: true,
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
});

export default mongoose.model("Lecturer", lecturerSchema);
