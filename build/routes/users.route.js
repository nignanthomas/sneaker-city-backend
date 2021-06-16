"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = require("../controllers/users.controller");

var _users2 = require("../middlewares/users.validator");

var _validate = require("../middlewares/validate.validator");

var router = new _express["default"]();
router.post('/signup', (0, _users2.signupValidationRules)(), _validate.validate, _users.signup); // router.post('/signup', signup);

router.post('/login', _users.login);
var _default = router;
exports["default"] = _default;