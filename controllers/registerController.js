const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { json } = require('express');


const createUser = async (req, res) => {
    
    const {
        firstName,
        lastName,
        adminLevel,
        userName,
        password
    } = req.body;
    
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    
    try {
        const user = await User.create({
            firstName,
            lastName,
            adminLevel,
            userName,
            password: hash
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { createUser };