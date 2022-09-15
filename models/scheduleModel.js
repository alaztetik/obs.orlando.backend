const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    groupDays: [{
        day: {
            type: Date /* day */
        },
        hours: [{
            start: { type: Date }, /* hour */
            end: { type: Date }
        }]
    }]

}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', scheduleSchema);