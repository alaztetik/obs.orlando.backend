const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    paymentPlan: {
        type: Schema.Types.ObjectId,
        ref: 'PaymentPlan',
    },
    preferredLanguage: {
        type: String,
        enum: [
            "english",
            "german",
            "french",
            "spanish",
            "italian",
            "russian",
            "arabic",
        ]
    },
    preferredCourseType: {
        type: String,
        enum: [
            "1_1",
            "2_1",
            "3_1",
            "4_2",
            "private",
            "examPrivate",
            "examGroup",
            "kidsFall",
            "kidsSummer"
        ]
    },
    preferredDays: {
        type: String,
        enum: [
            "mondayAndWednesday",
            "tuesdayandThursday",
            "saturdayAndSunday",
            "other"
        ]
    },
    preferredHours: {
        type: String,
        enum: [
            "9_12",
            "12_15",
            "16_19",
            "19_22",
            "other"
        ]
    },
    booksGiven: {
        type: Boolean,
        required: true,
        default: false,
        enum: [
            true,
            false
        ]
    },
    enrollmentNotes: {
        type: String,
        trim: true
    },
    languageLevel: {
        type: String,
        required: true,
        default: "A1",
        enum: [
            "A1",
            "A2",
            "B1",
            "B2",
            "C1",
            "C2",
            "other"
        ]
    }, 
    creator: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
