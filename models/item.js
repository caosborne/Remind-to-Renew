var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  userId: {type: String, required: true },
  itemName: { type: String, required: true },
  cert: String,
  issueDate: Date,
  renewalDate: { type: Date, required: true },
  alertDate: { type: Date, required: true },
  renewalUrl: String,
  location: String,
  docsNeeded: String
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
