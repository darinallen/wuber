const mongoose = require('mongoose');

const widgetSchema = mongoose.Schema({
  category: String,
  finish: String,
  size: String,
  quantity: Number
});

const Widget = mongoose.model('Widget', widgetSchema);

// const widget1 = new Widget({ category: 'Widget Prime', finish: 'red', size: 'large', quantity: 4 });
// const widget2 = new Widget({ category: 'Widget Elite', finish: 'blue', size: 'small', quantity: 7 });
// const widget3 = new Widget({ category: 'Widget Extreme', finish: 'green', size: 'huge', quantity: 1 });
// const widget4 = new Widget({ category: 'Widget Prime', finish: 'green', size: 'small', quantity: 3 });
// const widget5 = new Widget({ category: 'Widget Elite', finish: 'red', size: 'huge', quantity: 4 });
// const widget6 = new Widget({ category: 'Widget Extreme', finish: 'blue', size: 'large', quantity: 5 });

// widget1.save();
// widget2.save();
// widget3.save();
// widget4.save();
// widget5.save();
// widget6.save();

exports.Widget = Widget;
