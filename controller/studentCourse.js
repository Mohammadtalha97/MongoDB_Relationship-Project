import StudentCourse from "../model/studentCourse.js";
import mongoose from "mongoose";
export const addStudentCourseDetails = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.send("Please Enter Data").status(400);
    }
    const { email } = req.body.student;

    const allData = await StudentCourse.find();

    for (let i in allData) {
      if (allData[i].student.email === email) {
        return res.status(400).send("Student Is Already Exists");
      }
    }

    const studentCourse = new StudentCourse(req.body);
    await studentCourse.save();
    res.status(200).send("StudentCourse Added");
  } catch (err) {
    for (let field in err.errors) {
      return res.send(err.errors[field].message);
    }
  }
};
export const getStudentCourseDetails = async (req, res) => {
  try {
    const result = await StudentCourse.find();
    res.send(result).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
};
export const getStudentCourseById = async (req, res) => {
  try {
    const result = await StudentCourse.findById(req.params.id);
    if (!result) return res.status(400).send("Record Not Found");
    res.send(result).status(200);
  } catch (err) {
    res.status(500).send(err);
  }
};
export const updateStudentCourseById = async (req, res) => {
  try {
    const result = await StudentCourse.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body,
      { rawResult: true }
    );
    if (!result.lastErrorObject.n) {
      res.status(400).send("Record Not Found");
    }

    if (result.lastErrorObject.updatedExisting) {
      res.status(200).send("Record Updated");
    }
  } catch (err) {
    res.send(err).status(500);
  }
};
export const deleteStudentCourseById = async (req, res) => {
  try {
    const course = await StudentCourse.findById(req.params.id);
    if (!course) return res.status(400).send("No Record Found");
    await course.remove();
    res.send("StudentCourse Removed Successfully");
  } catch (err) {
    res.send(err).status(500);
  }
};
