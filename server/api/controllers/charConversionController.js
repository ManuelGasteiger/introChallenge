const mongoose = require("mongoose");
Conversion = mongoose.model("Conversion");

// get CharCode integer from route and return according character
exports.convert = async (req, res) => {
  const charCode = req.params.code;
  const character = String.fromCharCode(charCode);

  const conversion = new Conversion({
    number: charCode,
    character: character,
    createdAt: Date.now(),
  });

  await conversion.save();

  res.json({ character: character });
};

// return history of conversions
exports.history = async (req, res) => {
  const conversions = await Conversion.find({});
  res.json(conversions);
};
