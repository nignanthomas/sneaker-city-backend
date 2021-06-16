"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _errorhandler = _interopRequireDefault(require("errorhandler"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
// Create global app object
_dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _cors["default"])());

var http = require('http').createServer(app);

var port = process.env.APPLICATION_PORT || process.env.PORT;
var isProduction = process.env.NODE_ENV === 'production';
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));

if (!isProduction) {
  app.use((0, _errorhandler["default"])());
}

app.use(function (req, res, next) {
  if (req.header('x-forwarded-proto') !== 'https' && isProduction) {
    res.redirect("https://".concat(req.header('host')).concat(req.url));
  } else {
    next();
  }
});
http.listen(port, function () {
  return console.log("Sneaker City is running server on port ".concat(port, "..."));
});
app.use('/api/', _routes["default"]);
app.get('/', function (req, res, next) {
  res.status(200).json({
    message: 'Welcome to Sneaker City!'
  });
});
app.use('*', function (req, res, next) {
  res.status(404).json({
    status: 404,
    message: 'Sorry this route does not exist !'
  });
});
var _default = app;
exports["default"] = _default;