"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _products = _interopRequireDefault(require("./products.route"));

var _sizes = _interopRequireDefault(require("./sizes.route"));

var _users = _interopRequireDefault(require("./users.route"));

var _orders = _interopRequireDefault(require("./orders.route"));

var router = new _express["default"]();
router.use('/products', _products["default"]);
router.use('/sizes', _sizes["default"]);
router.use('/users', _users["default"]);
router.use('/orders', _orders["default"]);
var _default = router;
exports["default"] = _default;