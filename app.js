const http = require('http');

const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const routes = require("./routes")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", routes.admin)

app.use(routes.shop);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000);