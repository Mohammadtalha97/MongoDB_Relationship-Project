import mongoose from "mongoose";

import asyncMiddleware from "../middleware/async.js";
import StudentLecturer from "../model/studentLecturer.js";

export const addStudentLecturerDetails = async (req, res) => {
  try {
    let studentExits = await StudentLecturer.find({
      $and: [
        {
          student: req.body.student,
        },
        {
          lecture: req.body.lecture,
        },
      ],
    });

    if (studentExits.length === 0) {
      const result = new StudentLecturer(req.body);
      await result.save();

      res.send(result);
    } else {
      res.status(400).send("Values Are Exists");
    }
  } catch (err) {
    for (let field in err.errors) {
      return res.send(err.errors[field].message);
    }
  }
};
export const getStudentLecturerDetails = asyncMiddleware(async (req, res) => {
  const data = await StudentLecturer.find()
    // .populate("student")
    // .populate("lecture");
    .populate("student", "name email -_id")
    .populate("lecture", "name email -_id");

  res.send(data);
});
export const getStudentLecturerById = asyncMiddleware(async (req, res) => {
  const result = await StudentLecturer.findById(req.params.id);
  if (!result) return res.status(400).send("Record Not Found");
  res.send(result).status(200);
});
export const updateStudentLecturerById = asyncMiddleware(async (req, res) => {
  const result = await StudentLecturer.findOneAndUpdate(
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
});
export const deleteStudentLecturerById = asyncMiddleware(async (req, res) => {
  const result = await StudentLecturer.findById(req.params.id);
  if (!result) return res.status(400).send("Record Not Found");

  await result.remove();
  res.send("StudentLecturer Removed Successfully").status(200);
});
