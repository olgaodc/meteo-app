const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  id: { type: String, required: true, min: 3 },
});

module.exports = mongoose.model("City", citySchema);
