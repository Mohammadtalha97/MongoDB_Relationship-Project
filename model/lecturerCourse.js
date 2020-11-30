import mongoose from "mongoose";

import Course from "./courses.js";
import Lecturer from "./lecturers.js";

const lecturerCourseSchema = new mongoose.Schema({
  lecturer: {
    type: mongoose.Types.ObjectId,
    ref: Lecturer,
    required: [true, "LecturerID Is Required"],
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: Course,
    required: [true, "CourseID Is Required"],
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

export default mongoose.model("LecturerCourse", lecturerCourseSchema);
