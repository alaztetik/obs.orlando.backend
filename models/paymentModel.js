const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentInstrument: {
        type: String,
        required: true,
        trim: true
    },
    paymenType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        min: 0,
        required: true
    },
    paymentReceiver: {
        type: String,
        required: true,
        trim: true
    },
    paymentDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);