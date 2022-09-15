const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({

    expenseType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    personPayed: { /* sisteme giriş yapan kişi */
        type: String,
        required: true
    },
    payDate: {
        type: Date,
        required: true
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