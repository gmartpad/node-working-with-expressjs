const http = require('http');

const routes = require("./routes")

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes.admin)

app.use(routes.shop);

app.listen(3000);