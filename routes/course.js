import express from "express";

import {
  addCourse,
  deleteCourseById,
  editCourseNameById,
  getAllCourse,
  getCourseById,
} from "../controller/course.js";

const router = express.Router();

router.post("/addCourse", addCourse);
router.get("/getAllCourse", getAllCourse);
router.get("/getCourseById/:id", getCourseById);
router.delete("/deleteCours/:id", deleteCourseById);
router.put("/editCourseNameById/:id", editCourseNameById);

export default router;
