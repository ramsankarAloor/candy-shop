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
      quantity: quantity,
    });

    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const candyId = req.params.id;
    const buyNumber = req.params.buy;
    const quantity = req.body.quantity - buyNumber;
    if(quantity < 0) {
      throw new Error('quantity is now under zero');
    }
    const data = await CandyInfo.findByPk(candyId);
    data.quantity = quantity;
    const updatedEntry = await data.save();
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

