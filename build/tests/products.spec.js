"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _mocha = require("mocha");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

(0, _mocha.describe)('Products Test', function () {
  (0, _mocha.it)('it should retrieve products ', function (done) {
    _chai["default"].request(_index["default"]).get('/api/products').end(function (err, res) {
      res.should.have.property('status').eql(200);
      res.body.data.should.be.a('array');
      done();
    });
  });
});