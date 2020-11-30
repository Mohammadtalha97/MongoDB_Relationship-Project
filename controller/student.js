import _ from "lodash";
import mongoose from "mongoose";

import Students from "../model/students.js";

export const studentDetails = async (req, res) => {
  try {
    const userId = await Students.findOne({ email: req.body.email });
    if (userId) return res.status(400).send("Already Exists");

    const student = new Students(
      _.pick(req.body, [
        "name",
        "email",
        "dateOfBirth",
        "phone",
        "socialProfiles",
        "city",
        "state",
        "pincode",
      ])
    );

    const result = await student.save();
    res.status(200).send(result);
  } catch (err) {
    for (let field in err.errors) {
      return res.status(400).send(err.errors[field].message);
    }
  }
};

export const getStudentDetails = async (req, res) => {
  throw new Error("Could not get the student details");
  const result = await Students.find();
  res.status(200).send(result);
};

export const getStudentById = async (req, res) => {
  const result = await Students.findById(req.params.id);
  if (!result) return res.status(400).send("No Record Found");
  res.status(200).send(result);
};

export const updateStudentById = async (req, res) => {
  const result = await Students.findOneAndUpdate(
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

export const deleteStudentById = async (req, res) => {
  const user = await Students.findById(req.params.id);
  if (!user) return res.status(400).send("No Record Found");
  await user.remove();
  res.send("Record Deleted");
};
