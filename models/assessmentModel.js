const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
    exams: [{
        type: Schema.Types.ObjectId,
        ref: 'Exam'
    }],
    teacherAssessment: {
        type: Number,
        min: 0,
        max: 100
    },
    selfAssessment: {
        type: Number,
        min: 0,
        max: 100
    },
    speakingPresentationExam: {
        type: Number,
        min: 0,
        max: 100
    },
    onlinePlatformAssessment: {
        type: Number,
        min: 0,
        max: 100
    },
    isSuccessful: {
        type: Boolean,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Assessment', assessmentSchema);