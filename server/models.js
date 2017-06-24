const mongoose = require('mongoose');

const widgetSchema = mongoose.Schema({
  category: String,
  finish: String,
  size: String,
  quantity: Number
});

const Widget = mongoose.model('Widget', widgetSchema);

exports.Widget = Widget;

// const orderSchema = mongoose.Schema({
//   _id: Number,
//   widgets: { type: mongoose.Schema.Types.ObjectId, ref: 'Widget' }
// });

// const Order = mongoose.model('Order', orderSchema);

// exports.Order = Order;
