import mongoose from "mongoose";

import LecturerCourse from "../model/lecturerCourse.js";

export const addLecturerCourseDetails = async (req, res) => {
  try {
    let studentExits = await LecturerCourse.find({
      $and: [
        {
          course: req.body.course,
        },
        {
          lecturer: req.body.lecturer,
        },
      ],
    });

    if (studentExits.length === 0) {
      const result = new LecturerCourse(req.body);
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
export const getLecturerCourseDetails = async (req, res) => {
  const data = await LecturerCourse.find()
    .populate("lecturer")
    .populate("course");
  // .populate("student", "name email -_id")
  // .populate("lecture", "name email -_id");
  res.send(data).status(200);
};
export const getLecturerCourseById = async (req, res) => {
  const result = await LecturerCourse.find({ _id: req.params.id })
    .populate("lecturer", "name email -_id")
    .populate("course", "name email -_id");

  if (!result) return res.status(400).send("Record Not Found");
  res.send(result).status(200);
};
export const updateLecturerCourseById = async (req, res) => {
  const result = await LecturerCourse.findOneAndUpdate(
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
};
export const deleteLecturerCourseById = async (req, res) => {
  const result = await LecturerCourse.findById(req.params.id);
  if (!result) return res.status(400).send("Record Not Found");

  await result.remove();
  res.send("LecturerCourse Removed Successfully").status(200);
};
