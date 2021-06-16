"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAllProducts = exports.findOneProduct = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _models = _interopRequireDefault(require("../database/models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var productAssociations = {
  include: [{
    association: 'category',
    attributes: ['id', 'name']
  }, {
    association: 'sizes',
    attributes: ['quantity', 'sizeId'],
    include: [{
      association: 'size',
      attributes: ['number', 'country']
    }]
  }]
};

var findOneProduct = function findOneProduct(query) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return _models["default"].products.scope(scope).findOne(_objectSpread(_objectSpread({}, query), productAssociations)).then(function (product) {
    return product;
  });
};

exports.findOneProduct = findOneProduct;

var findAllProducts = function findAllProducts(query) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return _models["default"].products.scope(scope).findAll(_objectSpread(_objectSpread({}, query), productAssociations)).then(function (products) {
    return products;
  });
};

exports.findAllProducts = findAllProducts;