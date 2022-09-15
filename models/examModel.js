const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const examSchema = new Schema({
    examType: {
        type: String
    },
    examGrade: {
        type: Number,
        min: 0,
        max: 100
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Exam', examSchema);