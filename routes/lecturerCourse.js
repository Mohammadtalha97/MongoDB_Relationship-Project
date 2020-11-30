import express from "express";
import {
  addLecturerCourseDetails,
  getLecturerCourseDetails,
  getLecturerCourseById,
  updateLecturerCourseById,
  deleteLecturerCourseById,
} from "../controller/LecturerCourse.js";

const router = express.Router();

router.post("/addLecturerCourseDetails", addLecturerCourseDetails);
router.get("/getLecturerCourseDetails", getLecturerCourseDetails);
router.get("/getLecturerCourseById/:id", getLecturerCourseById);
router.put("/updateLecturerCourseById/:id", updateLecturerCourseById);
router.delete("/deleteLecturerCourseById/:id", deleteLecturerCourseById);

export default router;
