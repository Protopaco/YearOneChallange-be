const express = require('express');
const app = express();
const fetchApi = require('./utils/fetchAPI')

app.use(express.json());


app.get('/test', async (req, res) => {
    try {
        res.json({ greeting: 'HELLO!' });
    } catch (e) {
        res.text(e.message)
    }
})

app.get('/search/', async (req, res) => {
    const { page, searchText } = req.query;
    try {
        const searchResult = await fetchApi(page, searchText)
        console.log(page, searchText)
        res.status(200).json(searchResult);
    } catch (e) {
        res.json({ message: e.message })
    }
})

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
module.exports = app;
