const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  code: { type: String, required: true, min: 3 },
  date: { type: Date, required: true, min: 3 },
});

module.exports = mongoose.model("City", citySchema);
