const express = require('express');
const router = express.Router();
const controller = require('./StocksController');

router.get('/', controller.getStocks);
router.get('/:id', controller.getStockById);
router.post('/', controller.addStock);
router.delete('/:id', controller.deleteStock);

module.exports = router;
