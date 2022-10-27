const Student = require("../models/studentModel");
const mongoose = require('mongoose');
const { json } = require("express");


const getStudent = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such student.'});
    }

    const student = await Student.findById(id);

    if (!student) {
        return res.status(404).json({error: 'No such student'});
    }

    res.status(200).json(student);
}


const getStudents = async (req, res) => {
    const students = await Student.find({}).sort({createdAt: -1});

    res.status(200).json(students);
}


const createStudent = async (req, res) => {
  const {
    firstName,
    lastName,
    tckn,
    phone,
    address,
    secondaryContact,
    workOrSchool,
    email,
    birthDate,
    birthPlace,
    parentName,
    parentTckn,
    parentPhone,
    parentAddress,
    studentNotes,
    creator
  } = req.body;

  try {
    const student = await Student.create({
      firstName,
      lastName,
      tckn,
      phone,
      address,
      secondaryContact,
      workOrSchool,
      email,
      birthDate,
      birthPlace,
      parentName,
      parentTckn,
      parentPhone,
      parentAddress,
      studentNotes,
      creator
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such student'});
  }

  const student = await Student.findOneAndDelete({_id: id})

  if (!student) {
    return res.status(404).json({ error: 'No such student'});
  }

  res.status(200).json(student);
}


const updateStudent = async (req, res) => {
  /* const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such student'});
  } */

  const student = await Student.findOneAndUpdate({_id: req.body._id}, {
    ...req.body
  });

  if(!student) {
    return res.status(400).json({error: 'No such student'});
  }

  res.status(200).json(student);
}

module.exports = {
    getStudent,
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent
};