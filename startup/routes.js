import bodyParser from "body-parser";
import Express from "express";

import error from "../middleware/error.js";
import course from "../routes/course.js";
import lecturer from "../routes/lecturer.js";
import lecturerCourse from "../routes/lecturerCourse.js";
import student from "../routes/student.js";
import studentCourse from "../routes/studentCourse.js";
import studentLecturer from "../routes/studentLecturer.js";
import user from "../routes/user.js";

const starting = (app) => {
  app.use(Express.json());
  app.use(bodyParser.json({ limit: "200mb" }));
  app.use("/api/user/", user);
  app.use("/api/student", student);
  app.use("/api/course", course);
  app.use("/api/lecturer", lecturer);
  app.use("/api/studentCourse", studentCourse);
  app.use("/api/studentLecture", studentLecturer);
  app.use("/api/lecturerCourse", lecturerCourse);
  app.use(error);
};

export default starting;
