const express = require("express");

const {
  createStudent,
  getStudent,
  getStudents,
  deleteStudent,
  updateStudent
} = require("../controllers/studentController");

const router = express.Router();

router.get("/", getStudents);

router.get("/:id", getStudent);

router.post("/", createStudent);

router.delete("/:id", deleteStudent);

router.patch("/", updateStudent);

module.exports = router;
