import dotenv from "dotenv";
import Express from "express";
import "express-async-errors";
/*
  What is Monkey patching? :
  It is a technique to add, modify, or suppress the default behavior of a piece of code,
  at runtime without changing its original source code.
*/

import connectDB from "./config/databaseConnection.js";
import error from "./middleware/error.js";
import course from "./routes/course.js";
import lecturer from "./routes/lecturer.js";
import lecturerCourse from "./routes/lecturerCourse.js";
import student from "./routes/student.js";
import studentCourse from "./routes/studentCourse.js";
import studentLecturer from "./routes/studentLecturer.js";
import user from "./routes/user.js";

dotenv.config({ path: "./.env" });
const app = new Express();

if (!process.env.JWT_SECRET_KEY) {
  console.error("FATAL ERROR : Secret is not defined");
  process.exit(1);
}

connectDB();

// app.use(bodyParser.json({ limit: "200mb" }));
app.use(Express.json());
app.use("/api/user/", user);
app.use("/api/student", student);
app.use("/api/course", course);
app.use("/api/lecturer", lecturer);
app.use("/api/studentCourse", studentCourse);
app.use("/api/studentLecture", studentLecturer);
app.use("/api/lecturerCourse", lecturerCourse);

//for error handlling
app.use(error);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listing at port ${PORT}`);
});
