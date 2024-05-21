"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AxiosHelper = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jwt = require("./jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getData = function getData(url) {
  var accessToken, optionFetch, response, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          accessToken = window.localStorage.getItem("accessToken");
          _context.t0 = accessToken;

          if (!_context.t0) {
            _context.next = 6;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap((0, _jwt.isValidToken)(accessToken));

        case 5:
          _context.t0 = _context.sent;

        case 6:
          if (!_context.t0) {
            _context.next = 24;
            break;
          }

          optionFetch = {
            headers: {
              Authorization: "Bearer ".concat(window.localStorage.getItem("accessToken"))
            }
          };
          _context.prev = 8;
          _context.next = 11;
          return regeneratorRuntime.awrap(_axios["default"].get(url, optionFetch));

        case 11:
          response = _context.sent;
          data = response.data;

          if (!data.data) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", data.data);

        case 17:
          return _context.abrupt("return", null);

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t1 = _context["catch"](8);
          console.log("error", _context.t1);
          return _context.abrupt("return", null);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 20]]);
};

var postData = function postData(url, body) {
  var accessToken, optionFetch, response, data;
  return regeneratorRuntime.async(function postData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          accessToken = window.localStorage.getItem("accessToken");
          _context2.t0 = accessToken;

          if (!_context2.t0) {
            _context2.next = 6;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap((0, _jwt.isValidToken)(accessToken));

        case 5:
          _context2.t0 = _context2.sent;

        case 6:
          if (!_context2.t0) {
            _context2.next = 24;
            break;
          }

          optionFetch = {
            headers: {
              Authorization: "Bearer ".concat(window.localStorage.getItem("accessToken"))
            }
          };
          _context2.prev = 8;
          _context2.next = 11;
          return regeneratorRuntime.awrap(_axios["default"].get(url, body, optionFetch));

        case 11:
          response = _context2.sent;
          data = response.data;

          if (!data.data) {
            _context2.next = 17;
            break;
          }

          return _context2.abrupt("return", data.data);

        case 17:
          return _context2.abrupt("return", null);

        case 18:
          _context2.next = 24;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t1 = _context2["catch"](8);
          console.log("error", _context2.t1);
          return _context2.abrupt("return", null);

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[8, 20]]);
};

var AxiosHelper = {
  get: getData,
  post: postData
};
exports.AxiosHelper = AxiosHelper;