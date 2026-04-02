const express = require('express');
const cors = require('cors');
const stocksRoutes = require('./internal/stocks/index');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use('/api/items', stocksRoutes);

app.listen(PORT, () => {
    console.log(`Cервер запущен на http://localhost:${PORT}`);
});
