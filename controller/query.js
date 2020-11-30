import Course from "../model/courses.js";
import LecturerCourse from "../model/lecturerCourse.js";
import StudentCourse from "../model/studentCourse.js";

export const findStudentByCourse = async (req, res) => {
  const allData = await StudentCourse.find();
  const data = allData.filter((x) => x.course.name === req.body.course);
  if (data.length > 0) {
    res.send(data).status(200);
  } else {
    res.status(400).send("Error : Course Not Found");
  }
};

export const findLecturerByCourse = async (req, res) => {
  const courseID = await Course.find({ name: req.body.course });

  if (courseID.length != 0) {
    const lecturerId = await LecturerCourse.find({
      course: courseID[0]._id,
    }).populate("lecturer", "-_id -dateOfBirth -__v");

    if (lecturerId.length != 0) {
      res.send(lecturerId).status(200);
    } else {
      res.status(500).send("Error : Lecturer Not Found");
    }
  } else {
    res.send("Error : Course Not Found").status(400);
  }
};

export const findStudentBySemester = async (req, res) => {
  const semesterData = await StudentCourse.find({
    semester: req.body.semester,
  });
  if (semesterData.length != 0) {
    const courseData = semesterData.filter(
      (x) => x.course.name === req.body.course
    );
    if (courseData.length != 0) {
      res.send(courseData);
    } else {
      res
        .status(400)
        .send(
          `Error : Course ${req.body.course} Not  Found For Semester  ${req.body.semester}`
        );
    }
  } else {
    res.status(400).send("Error : Semester Not Found");
  }
};
