const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentPlanSchema = new Schema({
    total: {
        type: Number,
        required: true,
        min: 0
    },
    payloadType: {
        type: String,
        required: true
    },
    advancedPayment: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    payments: [{
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('PaymentPlan', paymentPlanSchema);