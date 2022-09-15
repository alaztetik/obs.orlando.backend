const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    lesson: {
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    },
    attendance: {
        type: Schema.Types.ObjectId,
        ref: 'Attendance'
    },
    assessment: {
        type: Schema.Types.ObjectId,
        ref: 'Assessment'
    },
    lessonDateAndHour: {
        type: Schema.Types.ObjectId,
        ref: 'Schedule'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Group', groupSchema);