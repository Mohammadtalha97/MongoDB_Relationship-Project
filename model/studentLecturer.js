import mongoose from "mongoose";

import Student from "./students.js";
import Lecturer from "./lecturers.js";

const studentLecturerSchema = new mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: Student,
    required: [true, "StudentID Is Required"],
  },
  lecture: {
    type: mongoose.Types.ObjectId,
    ref: Lecturer,
    required: [true, "LecturerID Is Required"],
  },
  semester: {
    type: Number,
    trim: true,
    lowercase: true,
    required: [true, "Semester Is Required"],
    validate: {
      validator: function (v) {
        return /^[0-9]*$/.test(v);
      },
      message: "Please Enter Number Only",
    },
  },
});

export default mongoose.model("StudentLecturer", studentLecturerSchema);
