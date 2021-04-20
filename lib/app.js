const express = require('express');
const app = express();

const fetchApi = require('./utils/fetchAPI')
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.header('Origin'));
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

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
        res.json(searchResult);
    } catch (e) {
        res.json({ message: e.message })
    }
})

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
module.exports = app;
