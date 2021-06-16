"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.checkPassword = exports.hashPassword = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

_dotenv["default"].config();

var hashPassword = function hashPassword(password) {
  return _bcrypt["default"].hashSync(password, _bcrypt["default"].genSaltSync(10), null);
};

exports.hashPassword = hashPassword;

var checkPassword = function checkPassword(password, hashed) {
  return _bcrypt["default"].compareSync(password, hashed);
};

exports.checkPassword = checkPassword;

var generateToken = function generateToken(user) {
  var token = _jsonwebtoken["default"].sign({
    payload: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  }, process.env.JWT_SECRET);

  return token;
};

exports.generateToken = generateToken;