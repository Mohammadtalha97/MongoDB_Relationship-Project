import express from "express";

import {
  deleteLecturerById,
  getAllLecturer,
  getLecturerById,
  addLecturer,
  updateLecturerById,
} from "../controller/lecturer.js";

const router = express.Router();

router.post("/addLecturer", addLecturer);
router.get("/getAllLecturer", getAllLecturer);
router.get("/getLecturerById/:id", getLecturerById);
router.put("/updateLecturerById/:id", updateLecturerById);
router.delete("/deleteLecturerById/:id", deleteLecturerById);

export default router;
