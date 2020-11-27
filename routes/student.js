import express from "express";
import {
  studentDetails,
  getStudentDetails,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} from "../controller/student.js";

const router = express.Router();

router.post("/studentDetails", studentDetails);
router.get("/getStudentDetails", getStudentDetails);
router.get("/getStudentById/:id", getStudentById);
router.put("/updateStudentById/:id", updateStudentById);
router.delete("/deleteStudentById/:id", deleteStudentById);

export default router;
