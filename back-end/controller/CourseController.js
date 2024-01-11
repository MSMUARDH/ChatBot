const Course = require("../model/CourseModel");

const getAllCourses = async (req, res) => {
  const courses = await Course.find({});
  res.status(200).json(courses);
};

const createCourse = async (req, res) => {
  const course = await Course.create({
    courseName: "softwareengineer",
    coursePrice: 480000,
  });

  res.status(200).json(course);
};

module.exports = {
  getAllCourses,
  createCourse,
};
