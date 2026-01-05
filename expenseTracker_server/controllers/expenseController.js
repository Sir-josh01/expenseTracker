import { Expense } from "../models/expense.js";

const getExpense = async (req, res) => {
  try {
    const expenses = await Expense.find()
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses" });
  }
};

const createExpense = async (req, res) => {
  try {
    const { title, amount, type } = req.body;
    const newExpense = await Expense.create({
      title, amount, type
    });
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ message: "Cannot create due to a server error", err });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const deleted = await Expense.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: "Invalid ID format to delete" });
  }
};

const updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // Check if the expense existed
    if (!updatedExpense) {
      return res.status(404).json({ message: "Update not found" });
    }

    res.status(200).json(updatedExpense);
  } catch (err) {
    res.status(400).json({ message: "Update Failed" });
  }
};

export { getExpense, createExpense, deleteExpense, updateExpense };
