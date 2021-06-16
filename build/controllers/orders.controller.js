"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = exports.oneOrder = exports.allOrders = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _orders = require("../services/orders.service");

var allOrders = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var orders;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _orders.findAllOrders)();

          case 3:
            orders = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              data: orders
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function allOrders(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.allOrders = allOrders;

var oneOrder = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var orderId, order;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            orderId = req.params.orderId;
            _context2.next = 4;
            return (0, _orders.findOneOrder)({
              where: {
                id: orderId
              }
            });

          case 4:
            order = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              data: order
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              error: _context2.t0.message
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function oneOrder(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.oneOrder = oneOrder;

var createOrder = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$body, userId, order, deliveryDetails, deliveryMethod, payment, orderInstance;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, userId = _req$body.userId, order = _req$body.order, deliveryDetails = _req$body.deliveryDetails, deliveryMethod = _req$body.deliveryMethod, payment = _req$body.payment;
            _context3.next = 4;
            return _models["default"].orders.build({
              userId: userId,
              order: order,
              deliveryDetails: deliveryDetails,
              deliveryMethod: deliveryMethod,
              payment: payment
            });

          case 4:
            orderInstance = _context3.sent;
            orderInstance.save().then(function (order) {
              return res.status(201).json({
                data: order,
                message: "Order successfully created!"
              });
            })["catch"](function (error) {
              return res.status(500).json({
                error: error.message
              });
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              error: _context3.t0.message
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function createOrder(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createOrder = createOrder;