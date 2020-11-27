import express from "express";
import {
  addStudentCourseDetails,
  getStudentCourseDetails,
  getStudentCourseById,
  updateStudentCourseById,
  deleteStudentCourseById,
} from "../controller/studentCourse.js";

const router = express.Router();

router.post("/addStudentCourseDetails", addStudentCourseDetails);
router.get("/getStudentCourseDetails", getStudentCourseDetails);
router.get("/getStudentCourseById/:id", getStudentCourseById);
router.put("/updateStudentCourseById/:id", updateStudentCourseById);
router.delete("/deleteStudentCourseById/:id", deleteStudentCourseById);

export default router;
