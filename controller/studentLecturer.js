import StudentLecturer from "../model/studentLecturer.js";

export const addStudentLecturerDetails = async (req, res) => {
  const result = new StudentLecturer(req.body);
  await result.save();

  res.send(result);
};
export const getStudentLecturerDetails = async (req, res) => {
  const data = await StudentLecturer.find()
    .populate("student", "name email -_id")
    .populate("lecture", "-_id name");

  res.send(data);
};
export const getStudentLecturerById = (req, res) => {};
export const updateStudentLecturerById = (req, res) => {};
export const deleteStudentLecturerById = (req, res) => {};
