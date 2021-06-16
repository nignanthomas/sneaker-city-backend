"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _orders = require("../controllers/orders.controller");

var router = new _express["default"]();
router.get('/', _orders.allOrders);
router.get('/:orderId', _orders.oneOrder);
router.post('/', _orders.createOrder);
var _default = router;
exports["default"] = _default;