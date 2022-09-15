const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
    tckn: {
        type: String,
        required: true,
        trim: true,
        match: /[0-9]{11}/
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    secondaryContact: { 
        type: String,
        trim: true,
        required: true
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
    birthDate: {
        type: Date,
    },
    birthPlace: {
        type: String,
        trim: true
    },
    parentName: {
        type: String,
        trim: true
    },
    parentTckn: {
        type: String,
        trim: true,
        match: /[0-9]{11}/
    },
    parentPhone: {
        type: String,
        trim: true
    },
    parentAddress: {
        type: String,
        trim: true
    },
    studentNotes: {
        type: String,
        trim: true
    },
    creator: {
        type: String,
        required: true
    },
    enrollments: [{
        type: Schema.Types.ObjectId,
        ref: 'Enrollment'
    }]

}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);