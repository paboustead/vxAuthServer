const express = require('express');
const app = express();
var cors = require('cors');

const authRoutes = require('./auth');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/auth',authRoutes);

module.exports = app;
