"use strict";

var _bluebird = require("bluebird");

module.exports = function (app) {
    var add = function () {
        var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var retorno;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return eleitorModel.create(req.body);

                        case 2:
                            retorno = _context.sent;
                            return _context.abrupt("return", R.sucesso(retorno));

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function add(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();

    var getAll = function () {
        var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var retorno;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return eleitorModel.find({});

                        case 2:
                            retorno = _context2.sent;
                            return _context2.abrupt("return", R.sucesso(retorno));

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function getAll(_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    }();

    var getById = function () {
        var _ref3 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt("return", R.sucesso({
                                message: "Ola mundo - getById eleitor"
                            }));

                        case 1:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function getById(_x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }();

    var save = function () {
        var _ref4 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            return _context4.abrupt("return", R.sucesso({
                                message: "Ola mundo - save eleitor"
                            }));

                        case 1:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function save(_x7, _x8) {
            return _ref4.apply(this, arguments);
        };
    }();

    var dell = function () {
        var _ref5 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            return _context5.abrupt("return", R.sucesso({
                                message: "Ola mundo - dell eleitor"
                            }));

                        case 1:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function dell(_x9, _x10) {
            return _ref5.apply(this, arguments);
        };
    }();

    var R = app.builder.retorno;
    var eleitorModel = app.models.eleitor;

    return {
        add: add,
        getAll: getAll,
        getById: getById,
        save: save,
        dell: dell
    };
};