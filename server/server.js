const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const models = require('./models');

const app = express();

mongoose.connect('mongodb://localhost/wuber');

// Apply middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Get all widgets
app.get('/api/widgets', function(req, res) {
  console.log('Hitting the GET api/widgets endpoint!');
  models.Widget.find(function(err, widgets) {
    if (err) {
      console.error(err);
    }
    res.json(widgets);
  });
});

// Add a new widget to the inventory
app.post('/api/widget', function(req, res) {
  console.log('Hitting the POST api/widget endpoint!');
  const widget = new models.Widget({
    category: req.body.category,
    finish: req.body.finish,
    size: req.body.size,
    quantity: req.body.quantity
  });
  widget.save(function(err) {
    if (err) {
      console.error(err);
    }
    models.Widget.find(function(err, widgets) {
      if (err) {
        console.error(err);
      }
      console.log(`widgets after addWidget: ${widgets}`);
      res.json(widgets);
    });
  });
});

// Always return index.html so react-router renders the route in the client
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Wuber app listening on port ${PORT}!`);
});
