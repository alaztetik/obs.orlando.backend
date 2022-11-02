const express = require('express');

const {
    createExpense,
    getExpenses,
    updateExpense
} = require('../controllers/expenseController');

const router = express.Router();

// /api/v0/expenses
router.get('/', getExpenses);

router.post('/', createExpense);

router.patch('/', updateExpense);

module.exports = router;