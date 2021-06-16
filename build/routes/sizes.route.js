"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _sizes = require("../controllers/sizes.controller");

var router = new _express["default"]();
router.get('/', _sizes.allSizes);
var _default = router;
exports["default"] = _default;