const express = require('express');

const {
    createExpense,
    getExpenses,
    updateExpense,
    deleteExpese
} = require('../controllers/expenseController');

const router = express.Router();

// /api/v0/expenses
router.get('/', getExpenses);

router.post('/', createExpense);

router.patch('/', updateExpense);

router.delete('/', deleteExpese);

module.exports = router;