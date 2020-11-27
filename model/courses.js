import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
    lowercase: true,
    required: [true, "Coursename Is Required"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z]*$/.test(v);
      },
      message: "Please Enter Character Only",
    },
  },
});

export default mongoose.model("Course", courseSchema);
