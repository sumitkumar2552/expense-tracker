// Update the deleteExpense function in server/controllers/expenses.js
exports.deleteExpense = async (req, res) => {
    try {
      const expense = await Expense.findById(req.params.id);
  
      if (!expense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
  
      // Replace remove() with deleteOne()
      await Expense.deleteOne({ _id: req.params.id });
      res.json({ message: 'Expense removed' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };