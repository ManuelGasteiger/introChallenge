var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Conversion = new Schema({
  number: Number,
  character: String,
  createdAt: Date,
});

module.exports = mongoose.model("Conversion", Conversion);
