const service = require('./StocksService');

class StocksController {
    getStocks(req, res) {
        const stocks = service.getStocks();
        res.json(stocks);
    }

    getStockById(req, res) {
        const stock = service.getStockById(req.params.id);
        res.json(stock);
    }

    addStock(req, res) {
        const newStock = service.addStock(req.body);
        res.status(201).json(newStock);
    }

    deleteStock(req, res) {
        service.deleteStock(req.params.id);
        res.status(204).send();
    }
}

module.exports = new StocksController();
