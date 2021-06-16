"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAllSizes = exports.findOneSize = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var findOneSize = function findOneSize(query) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return _models["default"].sizes.scope(scope).findOne(query).then(function (size) {
    return size;
  });
};

exports.findOneSize = findOneSize;

var findAllSizes = function findAllSizes(query) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return _models["default"].sizes.scope(scope).findAll(query).then(function (sizes) {
    return sizes;
  });
};

exports.findAllSizes = findAllSizes;