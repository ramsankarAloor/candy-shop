const CandyInfo = require("../models/candyInfo");

exports.getInfo = async (req, res) => {
  const info = await CandyInfo.findAll();
  res.json(info);
};

exports.postNewInfo = async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newEntry = await CandyInfo.create({
      candyName: name,
      description: description,
      price: price,
      quantity : quantity
    });

    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

// exports.deleteExpense = async (req, res) => {
//     const expenseId = req.params.id;
//     const expense = await Expenses.findByPk(expenseId);
//     const result = await expense.destroy();
//     res.json(result);
// }

