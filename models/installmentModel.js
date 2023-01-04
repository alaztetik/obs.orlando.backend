const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const installmentSchema = new Schema({
  installmentAmount: {
    type: Number,
    required: true
  },
  isPayed: {
    type: Boolean,
    required: true
  },
  installmentPaymentDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Installment', installmentSchema)