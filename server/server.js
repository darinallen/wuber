const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// server static files
app.use(express.static(path.join(__dirname, '../public')));

// Always return index.html so react-router renders the route in the client
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

app.listen(8080, function() {
  console.log('Wuber app listening on port 8080!');
});
