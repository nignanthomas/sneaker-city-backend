"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _mocha = require("mocha");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

(0, _mocha.describe)('router test', function () {
  (0, _mocha.it)('it should display welcome message ', function (done) {
    _chai["default"].request(_index["default"]).get('/').end(function (err, res) {
      res.should.have.property('status').eql(200);
      res.body.should.have.property('message').eql('Welcome to Sneaker City!');
      done();
    });
  });
  (0, _mocha.it)('it should test wrong routes ', function (done) {
    _chai["default"].request(_index["default"]).get('/pi').end(function (err, res) {
      res.should.have.property('status').eql(404);
      res.body.should.have.property('message').eql('Sorry this route does not exist !');
      done();
    });
  });
});