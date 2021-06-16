"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupValidationRules = void 0;

var _expressValidator = require("express-validator");

var signupValidationRules = function signupValidationRules() {
  return [(0, _expressValidator.body)('email', 'Email must be a valid email address: example@email.com').isEmail(), (0, _expressValidator.body)('password', 'Password is required!').notEmpty(), (0, _expressValidator.body)('password', 'Password must be at least 8 characters!').isLength({
    min: 8
  })];
};

exports.signupValidationRules = signupValidationRules;