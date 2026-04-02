const repository = require('./StocksRepository.js');

class StocksService {
    getStocks() { return repository.getStocks(); }
    getStockById(id) { return repository.getStockById(id); }
    addStock(stock) { return repository.addStock(stock); }
    deleteStock(id) { return repository.deleteStock(id); }
}

module.exports = new StocksService();
