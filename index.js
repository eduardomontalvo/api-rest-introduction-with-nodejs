const express = require('express'); 
const bodyparser = require('body-parser');

let quotes = require('./quotes');

const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)]
};

const app = express();
const port = 3000; 

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Running: ${port}`)
})

app.get('/', (req, res) => res.status(200).send('Hello world!'));
app.get('/quotes', (req, res) => res.status(200).send(quotes));
app.get('/random', (req, res) => res.status(200).send(getRandomQuote()));
app.post('/quotes', (req, res) => {
    quotes.push(req.body.quote);
    res.status(200).send(`New Quote: ${req.body.quote}`);
});