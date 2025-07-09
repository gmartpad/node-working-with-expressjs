const http = require('http');

const express = require('express');

const app = express();

app.use("/add-product", (req, res, next) => {
    res.send('<h1>Add product page!</h1>')
})

app.use("/", (req, res, next) => {
    res.send('<h1>Home page!</h1>')
})

app.listen(3000);