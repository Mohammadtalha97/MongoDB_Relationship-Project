import dotenv from "dotenv";
import Express from "express";

import connectDB from "./config/databaseConnection.js";
import course from "./routes/course.js";
import lecturer from "./routes/lecturer.js";
import student from "./routes/student.js";
import user from "./routes/user.js";
import studentCourse from "./routes/studentCourse.js";
import studentLecturer from "./routes/studentLecturer.js";

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listing at port ${PORT}`);
});
