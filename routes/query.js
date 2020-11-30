import express from "express";
import {
  findStudentByCourse,
  findLecturerByCourse,
  findStudentBySemester,
} from "../controller/query.js";

const router = express.Router();

router.post("/findStudentByCourse", findStudentByCourse);
router.post("/findLecturerByCourse", findLecturerByCourse);
router.post("/findStudentBySemester", findStudentBySemester);
export default router;
