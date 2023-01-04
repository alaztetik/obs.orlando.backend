const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentPlanSchema = new Schema({
    contractDate: {
        type: Date,
        required: true
    },
    agreedTotalPayment: {
        type: Number,
        required: true,
        min: 0
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: [
            "cash",
            "installments"
        ]
    },
    paymentInAdvance: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        min: 0
    },
    balancePaymentDate: {
        type: Date
    },
    paymentNotes: {
        type: String,
        trim: true
    },
    installments: [{
        type: Schema.Types.ObjectId,
        ref: 'Installment'
    }],
    creator: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('PaymentPlan', paymentPlanSchema);