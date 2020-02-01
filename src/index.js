const express = require('express');
const bodyParser = require('body-parser');
const scrap = require('./scraper/index.js');

const app = express();
scrap();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./controller/index')(app);

app.listen(5000);
