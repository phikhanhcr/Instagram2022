"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSessionUser = exports.setSession = exports.isValidToken = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jwtDecode2 = _interopRequireDefault(require("jwt-decode"));

var _common = require("../config/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isValidToken = function isValidToken(accessToken) {
  var _jwtDecode, exp, currentTime, isValid, refreshToken, response, result;

  return regeneratorRuntime.async(function isValidToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (accessToken) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", false);

        case 2:
          _jwtDecode = (0, _jwtDecode2["default"])(accessToken), exp = _jwtDecode.exp;
          currentTime = Date.now() / 1000;
          isValid = exp > currentTime;

          if (isValid) {
            _context.next = 18;
            break;
          }

          refreshToken = window.localStorage.getItem("refreshToken");
          _context.next = 9;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(_common.BASE_API_BACKEND, "/").concat(_common.URL_END_POINT.auth.refresh_token), {
            refresh_token: refreshToken,
            device_id: localStorage.getItem("deviceId")
          }));

        case 9:
          response = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(response.data);

        case 12:
          result = _context.sent;

          if (!(result.error_code === 0)) {
            _context.next = 17;
            break;
          }

          setSession(result.data.access_token, result.data.refresh_token); // dispatch(userInit());
          // dispatch(LOGIN(result));

          _context.next = 18;
          break;

        case 17:
          return _context.abrupt("return", false);

        case 18:
          return _context.abrupt("return", true);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.isValidToken = isValidToken;

var setSession = function setSession(accessToken, refreshToken, user) {
  if (accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken); // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken"); // delete axios.defaults.headers.common.Authorization;
  }
};

exports.setSession = setSession;

var setSessionUser = function setSessionUser(user) {
  if (user) {
    localStorage.setItem("user", user); // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("user"); // delete axios.defaults.headers.common.Authorization;
  }
};

exports.setSessionUser = setSessionUser;