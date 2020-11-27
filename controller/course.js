import Course from "../model/courses.js";
import mongoose from "mongoose";

export const addCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send("Course Added Succesfully");
  } catch (err) {
    res.status(500).send(err.errors["name"].message);
  }
};

export const getAllCourse = async (req, res) => {
  try {
    const result = await Course.find();
    res.send(result).status(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(400).send("No Record Found");
    await course.remove();
    res.send("Course Removed Successfully");
  } catch (err) {
    res.send(err).status(500);
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(400).send("Record Not Found");

    res.send(course).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
};

export const editCourseNameById = async (req, res) => {
  try {
    const result = await Course.findOneAndUpdate(
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
    res.status(500).send(err);
  }
};
