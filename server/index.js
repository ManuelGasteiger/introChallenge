const express = require("express");
const cors = require("cors");
const app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Conversion = require("./api/models/charConversionModel"),
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/charCodeConversionDb");

// TODO: switch CORS to proper origin
app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/charConversionRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("charCode conversion RESTful API server started on: " + port);
