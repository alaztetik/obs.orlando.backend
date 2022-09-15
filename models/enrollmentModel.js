const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    paymentPlan: {
        type: Schema.Types.ObjectId,
        ref: 'PaymentPlan',
        required: true
    },
    preferredLanguage: {
        type: String
    },
    preferredType: {
        type: String
    },
    preferredDays: {
        type: String
    },
    preferredHours: {
        type: String
    },
    contractDate: {
        type: Date,
        required: true
    },
    givenBooks: {
        type: Boolean
    },
    enrollmentNotes: {
        type: String,
        trim: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
