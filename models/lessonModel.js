const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    language: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        trim: true
    },
    campaign: {
        type: String,
        trim: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Lesson', lessonSchema);