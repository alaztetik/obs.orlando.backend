const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prospectSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    workOrSchool: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        match: /.+@.+\..+/
    },
    secondaryContact: {
        type: String,
        trim: true
    },
    dataSource: {
        type: String
    },
    preferredLesson: {
        type: String
    },
    meetingDate: {
        type: Date
    },
    recallDate: {
        type: Date
    },
    appointmentDate: {
        type: Date
    },
    prospectNotes: {
        type: String,
        trim: true
    }
});