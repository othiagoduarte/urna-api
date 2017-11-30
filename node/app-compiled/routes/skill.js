'use strict';

var _bluebird = require('bluebird');

module.exports = function (app) {
	var _this = this;

	var auth = app.passportGuru.authenticate;
	var ctrl = app.controllers.skill;

	app.get('/skill', function () {
		var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var R;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return ctrl.getAll(req, res);

						case 2:
							R = _context.sent;

							res.status(R.status).jsonp(R.data);

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}());

	app.post('/skill', function () {
		var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var R;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return ctrl.add(req, res);

						case 2:
							R = _context2.sent;

							res.status(R.status).jsonp(R.data);

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this);
		}));

		return function (_x3, _x4) {
			return _ref2.apply(this, arguments);
		};
	}());

	app.put('/skill', function () {
		var _ref3 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var R;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return ctrl.save(req, res);

						case 2:
							R = _context3.sent;

							res.status(R.status).jsonp(R.data);

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, _this);
		}));

		return function (_x5, _x6) {
			return _ref3.apply(this, arguments);
		};
	}());
};