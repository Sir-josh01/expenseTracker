import Joi from 'joi';

const expenseValidationSchema = Joi.object({
  title: Joi.string().min(3).max(30).required().messages({
    'string.min': 'Title should be at least 3 characters long',
    'any.required': 'Title is required'
  }),
  amount: Joi.number().positive().required().messages({
    'number.positive': 'Amount must be greater than zero'
  }),
  // ADD THIS BLOCK BELOW:
  type: Joi.string().valid('income', 'expense').required().messages({
    'any.only': 'Type must be either income or expense',
    'any.required': 'Type is required'
  })
});

const validateExpense = (req, res, next) => {
  const { error } = expenseValidationSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  
  next(); // Data is valid, move to the actual route handler
};

export { expenseValidationSchema, validateExpense }