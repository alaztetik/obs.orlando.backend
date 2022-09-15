const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { json } = require('express');

const loginUser = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const user = await User.findOne({userName: username});

    let isMatch = false;

    if (user) {
        isMatch = await bcrypt.compareSync(password, user.password);
    }

    if (isMatch) {
        res.status(200).json({username: user.userName, role: user.adminLevel});
    } else {
        res.status(200).json({username: 'none', role: 'none'});
    }
};

module.exports = { loginUser };