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
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity - buyNumber;

    const updatedEntry = await CandyInfo.update(
      {
        candyName: name,
        description: description,
        price: price,
        quantity: quantity,
      },
      { where: { id: candyId } }
    );

    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

exports.deleteCandy = async (req, res) => {
    const candyId = req.params.id;
    const candy = await CandyInfo.findByPk(candyId);
    const result = await candy.destroy();
    res.json(result);
}
