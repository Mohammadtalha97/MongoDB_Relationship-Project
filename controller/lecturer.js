import _ from "lodash";
import mongoose from "mongoose";

import Lecturer from "../model/lecturers.js";

export const addLecturer = async (req, res) => {
  try {
    const lecturer = await Lecturer.findOne({ email: req.body.email });

    if (lecturer) return res.status(400).send("User is already exists");

    const result = new Lecturer(
      _.pick(req.body, ["name", "email", "dateOfBirth"])
    );
    await result.save();

    res.status(200).send("Record Added Successfully");
  } catch (err) {
    for (let field in err.errors) {
      return res.send(err.errors[field].message);
    }
  }
};
export const getAllLecturer = async (req, res) => {
  const lecturers = await Lecturer.find();
  res.send(lecturers).status(200);
};
export const getLecturerById = async (req, res) => {
  const lecturer = await Lecturer.findById(req.params.id);
  if (!lecturer) return res.status(400).send("Sorry Record Not Found");
  res.send(lecturer).status(200);
};

export const updateLecturerById = async (req, res) => {
  const result = await Lecturer.findOneAndUpdate(
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
export const deleteLecturerById = async (req, res) => {
  const result = await Lecturer.findByIdAndRemove(
    { _id: mongoose.Types.ObjectId(req.params.id) },
    { rawResult: true }
  );
  console.log(result);
  if (!result.lastErrorObject.n) {
    res.status(400).send("Record Not Found");
  }
  if (result.value) {
    res.status(200).send("Record Removed");
  }
};
