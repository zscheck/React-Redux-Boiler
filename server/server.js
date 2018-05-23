const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('common'));

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname,'/../index.html'));
});

module.exports = app;