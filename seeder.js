var mongoose = require('mongoose');
var models = require('./server/models');

mongoose.connect('mongodb://localhost/wuber');

var widgets = [
  new models.Widget({ category: 'Widget Prime', finish: 'red', size: 'large', quantity: 4 }),
  new models.Widget({ category: 'Widget Elite', finish: 'blue', size: 'small', quantity: 7 }),
  new models.Widget({ category: 'Widget Extreme', finish: 'green', size: 'huge', quantity: 1 }),
  new models.Widget({ category: 'Widget Prime', finish: 'green', size: 'small', quantity: 3 }),
  new models.Widget({ category: 'Widget Elite', finish: 'red', size: 'huge', quantity: 4 }),
  new models.Widget({ category: 'Widget Extreme', finish: 'blue', size: 'large', quantity: 5 })
];

// Save each document in the array and disconnect if it's the last item
for (var i = 0; i < widgets.length; i++) {
  widgets[i].save(() => {
    if (i === widgets.length - 1) {
      console.log('Seeding complete');
      mongoose.disconnect();
    }
  });
}
