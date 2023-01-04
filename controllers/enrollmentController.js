const Enrollment = require('../models/enrollmentModel');
const mongoose = require('mongoose');

const getEnrollments = async (req, res) => {
    const enrollments = await Enrollment.find({}).sort({createdAt: -1});

    res.status(200).json(enrollments);
};


const getEnrollment = (req, res) => {

};


const createEnrollment = (req, res) => {
    const {
        student,
        preferredLanguage,
        preferredCourseType,
        preferredDays,
        preferredHours,
        booksGiven,
        enrollmentNotes,
        languageLevel,
        creator
    } = req.body;

    try {
        const enrollment = Enrollment.create({
            student,
            preferredLanguage,
            preferredCourseType,
            preferredDays,
            preferredHours,
            booksGiven,
            enrollmentNotes,
            languageLevel,
            creator
        });

        res.status(201).json(enrollment);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const deleteEnrollment = (req, res) => {

};


const updateEnrollment = (req, res) => {

};

module.exports = {
    getEnrollments,
    getEnrollment,
    createEnrollment,
    deleteEnrollment,
    updateEnrollment
};