require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3000;

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(port, () => console.log(`Proxy server running on port ${port}!`));