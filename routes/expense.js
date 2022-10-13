const express = require('express');

const {
    createExpense,
    getExpenses,
} = require('../controllers/expenseController');

const router = express.Router();

// /api/v0/expenses
router.get('/', getExpenses);

router.post('/', createExpense);

module.exports = router;