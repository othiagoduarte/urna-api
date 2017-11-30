"use strict";

var _bluebird = require("bluebird");

var mongoose = require('mongoose');
module.exports = function (app) {
	var getAll = function () {
		var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var autores, retorno;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							autores = req.query.autores;
							_context.next = 4;
							return ComunicadoBd.find({ autor: { $in: autores } });

						case 4:
							retorno = _context.sent;
							return _context.abrupt("return", R.sucesso(retorno));

						case 8:
							_context.prev = 8;
							_context.t0 = _context["catch"](0);
							return _context.abrupt("return", R.erroServidor(_context.t0));

						case 11:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, this, [[0, 8]]);
		}));

		return function getAll(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();

	var save = function () {
		var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var comunicado, query;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							comunicado = req.body;
							query = { "_id": mongoose.Types.ObjectId(comunicado._id) };
							_context2.t0 = R;
							_context2.next = 6;
							return ComunicadoBd.findOneAndUpdate(query, comunicado, { upsert: true, new: true });

						case 6:
							_context2.t1 = _context2.sent;
							return _context2.abrupt("return", _context2.t0.sucesso.call(_context2.t0, _context2.t1));

						case 10:
							_context2.prev = 10;
							_context2.t2 = _context2["catch"](0);
							return _context2.abrupt("return", R.erroServidor(_context2.t2));

						case 13:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, this, [[0, 10]]);
		}));

		return function save(_x3, _x4) {
			return _ref2.apply(this, arguments);
		};
	}();

	var add = function () {
		var _ref3 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var comunicado, retorno;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							comunicado = req.body;
							_context3.next = 4;
							return ComunicadoBd.create(comunicado);

						case 4:
							retorno = _context3.sent;
							return _context3.abrupt("return", R.sucesso(retorno));

						case 8:
							_context3.prev = 8;
							_context3.t0 = _context3["catch"](0);
							return _context3.abrupt("return", R.erroServidor(_context3.t0));

						case 11:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 8]]);
		}));

		return function add(_x5, _x6) {
			return _ref3.apply(this, arguments);
		};
	}();

	var del = function () {
		var _ref4 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var idComunicado, query;
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							idComunicado = req.params.id;
							query = { "_id": mongoose.Types.ObjectId(idComunicado) };
							_context4.t0 = R;
							_context4.next = 6;
							return ComunicadoBd.findOneAndRemove(query);

						case 6:
							_context4.t1 = _context4.sent;
							return _context4.abrupt("return", _context4.t0.sucesso.call(_context4.t0, _context4.t1));

						case 10:
							_context4.prev = 10;
							_context4.t2 = _context4["catch"](0);
							return _context4.abrupt("return", R.erroServidor(_context4.t2));

						case 13:
						case "end":
							return _context4.stop();
					}
				}
			}, _callee4, this, [[0, 10]]);
		}));

		return function del(_x7, _x8) {
			return _ref4.apply(this, arguments);
		};
	}();

	var ComunicadoBd = app.models.comunicado;
	var R = app.builder.retorno;

	return { getAll: getAll, save: save, add: add, del: del };
};