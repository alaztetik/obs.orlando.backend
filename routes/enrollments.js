const express = require("express");
const { 
    getEnrollments,
    getEnrollment,
    createEnrollment,
    deleteEnrollment,
    updateEnrollment
} = require('../controllers/enrollmentController');

// controller import

const router = express.Router();

router.get("/", getEnrollments);

router.get("/:id", getEnrollment);

router.post("/", createEnrollment);

router.delete("/:id", deleteEnrollment);

router.patch("/:id", updateEnrollment);

module.exports = router;
