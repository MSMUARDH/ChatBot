const express = require("express");
const { default: mongoose } = require("mongoose");
const {
  createCourse,
  getAllCourses,
} = require("./controller/CourseController");

const cors = require("cors");
const {
  createBranch,
  getAllBranches,
} = require("./controller/BranchController");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.post("/create-course", createCourse);
app.get("/get-courses", getAllCourses);

app.post("/create-branch", createBranch);
app.get("/get-branches", getAllBranches);

const port = 5000;

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
  mongoose
    .connect(
      "mongodb+srv://muaz:muaz123@cluster0.ub7zzlu.mongodb.net/chatbotdb"
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    });
});
