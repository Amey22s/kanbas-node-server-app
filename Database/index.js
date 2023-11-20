// import courses from "./courses.json" assert { type: "json" };
const courses = require("./courses.json");
const modules = require("./modules.json");
const assignments = require("./courses.json");
const users = require("./courses.json");
const grades = require("./courses.json");
const enrollments = require("./courses.json");

export default {
  courses,
  modules,
  assignments,
  users,
  grades,
  enrollments,
};

