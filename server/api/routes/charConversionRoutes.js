module.exports = function (app) {
  var charConversion = require("../controllers/charConversionController");

  // charConversion Routes
  app.route("/character/:code").get(charConversion.convert);

  app.route("/history").get(charConversion.history);
};
