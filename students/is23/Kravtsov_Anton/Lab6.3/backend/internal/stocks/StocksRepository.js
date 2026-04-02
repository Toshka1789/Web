const dao = require('./StocksDAO');

class StocksRepository {
    getStocks() { return dao.getAll(); }
    getStockById(id) { return dao.getById(id); }
    addStock(stock) { return dao.create(stock); }
    deleteStock(id) { return dao.delete(id); }
}

module.exports = new StocksRepository();
