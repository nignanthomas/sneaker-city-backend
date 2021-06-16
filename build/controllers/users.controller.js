"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.signup = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _users = require("../services/users.service");

var _users2 = require("../utils/users.util");

var _excluded = ["password"];

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, firstName, lastName, email, password, city, phone, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password, city = _req$body.city, phone = _req$body.phone;
            _context.next = 4;
            return _models["default"].users.build({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: (0, _users2.hashPassword)(password),
              city: city,
              phone: phone,
              role: 1
            });

          case 4:
            user = _context.sent;
            user.save().then(function (user) {
              return res.status(201).json({
                message: 'User successfully created!',
                data: {
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName
                }
              });
            })["catch"](function (error) {
              return res.status(500).json({
                error: error.errors[0].message
              });
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function signup(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body2, email, submittedPassword, user, _user$dataValues, password, userData, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, submittedPassword = _req$body2.password;
            _context2.next = 4;
            return (0, _users.findOneUser)({
              where: {
                email: email
              }
            });

          case 4:
            user = _context2.sent;
            if (!user) res.status(404).json({
              error: 'User with that email not found!'
            });
            if (!(0, _users2.checkPassword)(submittedPassword, user.password)) res.status(400).json({
              error: 'Password does not match!'
            });
            _user$dataValues = user.dataValues, password = _user$dataValues.password, userData = (0, _objectWithoutProperties2["default"])(_user$dataValues, _excluded);
            token = (0, _users2.generateToken)(user);
            return _context2.abrupt("return", res.status(200).json({
              data: {
                user: userData,
                token: token
              }
            }));

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              error: _context2.t0.message
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function login(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;