const mongoose = require('mongoose');

const widgetSchema = mongoose.Schema({
  category: String,
  finish: String,
  size: String,
  quantity: Number
});

const Widget = mongoose.model('Widget', widgetSchema);

// const widget1 = new Widget({ category: 'Widget Prime', finish: 'Red', size: 'Large', quantity: 4 });
// const widget2 = new Widget({ category: 'Widget Elite', finish: 'Blue', size: 'Small', quantity: 7 });
// const widget3 = new Widget({ category: 'Widget Extreme', finish: 'Green', size: 'Huge', quantity: 1 });
// const widget4 = new Widget({ category: 'Widget Prime', finish: 'Green', size: 'Small', quantity: 3 });
// const widget5 = new Widget({ category: 'Widget Elite', finish: 'Red', size: 'Huge', quantity: 4 });
// const widget6 = new Widget({ category: 'Widget Extreme', finish: 'Blue', size: 'Large', quantity: 5 });

// widget1.save();
// widget2.save();
// widget3.save();
// widget4.save();
// widget5.save();
// widget6.save();

exports.Widget = Widget;
