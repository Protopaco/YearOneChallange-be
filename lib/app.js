const express = require('express');
const app = express();

app.use(express.json());


app.get('/test', async (req, res) => {
    try {
        res.json({ greeting: 'HELLO!' });
    } catch (e) {
        res.text(e.message)
    }
})

app.get('/search/:searchText', async (req, res) => {
    const { searchText } = req.params;
    try {

        res.status(200).json({ greeting: "success" });
    } catch (e) {
        res.text(e.message)
    }
})

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
module.exports = app;
