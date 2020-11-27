import express from "express";
import {
  addStudentLecturerDetails,
  getStudentLecturerDetails,
  getStudentLecturerById,
  updateStudentLecturerById,
  deleteStudentLecturerById,
} from "../controller/studentLecturer.js";

const router = express.Router();

router.post("/addStudentLecturerDetails", addStudentLecturerDetails);
router.get("/getStudentLecturerDetails", getStudentLecturerDetails);
router.get("/getStudentLecturerById/:id", getStudentLecturerById);
router.put("/updateStudentLecturerById/:id", updateStudentLecturerById);
router.delete("/deleteStudentLecturerById/:id", deleteStudentLecturerById);

export default router;
