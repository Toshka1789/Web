const fs = require('fs');
const path = require('path');

class DBConnector {
    constructor() {
        this.filePath = path.resolve(__dirname, '../db/stocks.json');
    }

    read() {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data);
    }

    write(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 4), 'utf8');
    }
}

module.exports = new DBConnector();
