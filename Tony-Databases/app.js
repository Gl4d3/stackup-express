// importing packages
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// creating express app
const app = express();
const PORT = 3000;

// config middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome To SKYRIM!'
    })
});

// Start the server
app.listen(port, () => {
    console.log(`The server is running successfully on http://127.0.0.1:${port}`)
})