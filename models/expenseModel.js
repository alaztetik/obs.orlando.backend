const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({

    expenseType: {
        type: String,
        required: true,
        enum: [
            "startup",
            "electricity",
            "water",
            "internet",
            "phone",
            "naturalGas",
            "assets",
            "stationery",
            "rent",
            "restoration",
            "transportation",
            "taxes",
            "shopping",
            "food",
            "finance",
            "personelSalary",
            "personelInsurance",
            "personelBonus",
            "bookTrainingMaterial",
            "payback",
            "promo",
            "event",
            "other"
        ]
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    personPayed: {
        type: String,
        required: true
    },
    payDate: {
        type: Date,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        enum:  [
            "creditCardCorporate",
            "creditCardPersonal",
            "cash",
            "debitCardCorporate",
            "debitCardPersonal",
            "founder"
        ]
    },
    payAmounth: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Expense', expenseSchema);