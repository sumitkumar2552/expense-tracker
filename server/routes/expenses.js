// server/routes/expenses.js
const express = require('express');
const router = express.Router();
const { 
  getExpenses, 
  addExpense, 
  updateExpense, 
  deleteExpense 
} = require('../controllers/expenses');

// @route   GET /api/expenses
// @desc    Get all expenses
// @access  Public
router.get('/', getExpenses);

// @route   POST /api/expenses
// @desc    Add an expense
// @access  Public
router.post('/', addExpense);

// @route   PUT /api/expenses/:id
// @desc    Update an expense
// @access  Public
router.put('/:id', updateExpense);

// @route   DELETE /api/expenses/:id
// @desc    Delete an expense
// @access  Public
router.delete('/:id', deleteExpense);

module.exports = router;