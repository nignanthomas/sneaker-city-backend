"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _expressValidator = require("express-validator");

var validate = function validate(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (errors.isEmpty()) {
    return next();
  }

  var extractedErrors = [];
  errors.array().map(function (err) {
    return extractedErrors.push((0, _defineProperty2["default"])({}, err.param, err.msg));
  });
  return res.status(422).json({
    errors: extractedErrors
  });
};

exports.validate = validate;