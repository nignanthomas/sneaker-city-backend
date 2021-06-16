"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _products = require("../controllers/products.controller");

var router = new _express["default"]();
router.get('/', _products.allProducts);
router.get('/latest', _products.latestProducts);
router.get('/:productId', _products.productById);
var _default = router;
exports["default"] = _default;