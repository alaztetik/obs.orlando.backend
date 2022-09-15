const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    totalHours: {
        type: Number
    },
    maxSkip: {
        type: Number
    },
    actualSkip: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);