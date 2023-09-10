const express = require('express');

const router = express.Router();
const sellerController = require('../controllers/seller');

router.get('/candy-info', sellerController.getInfo);

router.post('/new-info', sellerController.postNewInfo);

router.put('/update-info/:id/:buy', sellerController.updateQuantity);

router.delete('/delete/:id', sellerController.deleteCandy);

// router.delete('/expenses/:id', sellerController.deleteExpense);

module.exports = router;