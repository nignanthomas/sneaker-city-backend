"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAllOrders = exports.findOneOrder = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var findOneOrder = function findOneOrder(query) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return _models["default"].orders.scope(scope).findOne(query).then(function (order) {
    return order;
  });
};

exports.findOneOrder = findOneOrder;

var findAllOrders = function findAllOrders(query) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return _models["default"].orders.scope(scope).findAll(query).then(function (orders) {
    return orders;
  });
};

exports.findAllOrders = findAllOrders;