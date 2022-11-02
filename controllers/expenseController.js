const Expense = require('../models/expenseModel');
const mongoose = require('mongoose');


const getExpense = async (req, res) => {
    // TODO implement get expense
};


const getExpenses = async (req, res) => {
    const expenses = await Expense.find({}).sort({createdAt: -1});

    res.status(200).json(expenses);
};


const createExpense = async (req, res) => {
    const {
        expenseType,
        description,
        personPayed,
        payDate,
        paymentMethod,
        payAmounth
    } = req.body;

    try {
        const expense = await Expense.create({
            expenseType,
            description,
            personPayed,
            payDate,
            paymentMethod,
            payAmounth
        });
        res.status(200).json(expense);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}


const deleteExpese = async (req ,res) => {

}


const updateExpense = async (req, res) => {
    const expense = await Expense.findOneAndUpdate({_id: req.body._id}, {
        ...req.body
    });

    if (!expense) {
        return res.status(400).json({error: 'No such expense'});
    }

    res.status(200).json(expense);
}


module.exports = {
    getExpense,
    getExpenses,
    createExpense,
    deleteExpese,
    updateExpense
};