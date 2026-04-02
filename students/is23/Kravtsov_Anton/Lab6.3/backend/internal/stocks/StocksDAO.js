const db = require('../../modules/DBConnector');

class StocksDAO {
    getAll() {
        return db.read();
    }

    getById(id) {
        const stocks = db.read();
        return stocks.find(s => s.id === parseInt(id));
    }

    create(stock) {
        const stocks = db.read();
        const newStock = { id: Date.now(), ...stock };
        stocks.push(newStock);
        db.write(stocks);
        return newStock;
    }

    delete(id) {
        const stocks = db.read();
        const filtered = stocks.filter(s => s.id !== parseInt(id));
        db.write(filtered);
    }
}

module.exports = new StocksDAO();
