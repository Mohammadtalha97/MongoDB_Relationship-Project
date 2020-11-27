import mongoose from "mongoose";

const studentCourseSchema = new mongoose.Schema({
  course: {
    type: new mongoose.Schema({
      name: {
        type: String,
        trim: true,
        minlength: 3,
        lowercase: true,
        required: [true, "Course Name Is Required"],
        validate: {
          validator: function (v) {
            return /^[a-zA-Z]*$/.test(v);
          },
          message: "Please Enter Character Only",
        },
      },
    }),
    required: [true, "Course Is Required"],
  },
  student: {
    type: new mongoose.Schema({
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
    }),
    required: [true, "Student Object Is Required"],
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

export default mongoose.model("StudentCourse", studentCourseSchema);
