"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.INITIALIZE_DETAIL_POST = exports.EACH_POST_FUNCTION = exports.eachPostInit = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _react = require("react");

var _reactRedux = require("react-redux");

var _common = require("../../../config/common");

var _jwt = require("../../../utils/jwt");

var _selector = require("../../selector/selector");

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var namespace = "detail_post";
var eachPostInit = (0, _toolkit.createAsyncThunk)("".concat(namespace, "/init"), function _callee(post_id, _ref) {
  var dispatch, rejectWithValue, signal, accessToken, response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch = _ref.dispatch, rejectWithValue = _ref.rejectWithValue, signal = _ref.signal;
          _context.prev = 1;
          accessToken = window.localStorage.getItem("accessToken");
          _context.t0 = accessToken;

          if (!_context.t0) {
            _context.next = 8;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap((0, _jwt.isValidToken)(accessToken));

        case 7:
          _context.t0 = _context.sent;

        case 8:
          if (!_context.t0) {
            _context.next = 17;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_common.BASE_API_BACKEND, "/api/posts/detail/").concat(post_id), {
            headers: {
              Authorization: "Bearer ".concat(window.localStorage.getItem("accessToken"))
            },
            signal: signal
          }));

        case 11:
          response = _context.sent;
          data = response.data;
          console.log({
            post: data.data
          });
          dispatch(INITIALIZE_DETAIL_POST({
            post: data.data
          }));
          _context.next = 18;
          break;

        case 17:
          return _context.abrupt("return", rejectWithValue("Something went wrong"));

        case 18:
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t1 = _context["catch"](1);
          dispatch(INITIALIZE_DETAIL_POST({
            post: null
          }));

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 20]]);
});
exports.eachPostInit = eachPostInit;
var initialState = {
  post: {},
  isLoading: false,
  status: null
};

var EACH_POST_FUNCTION = function EACH_POST_FUNCTION() {
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useSelector = (0, _reactRedux.useSelector)(_selector.detailPostSelector),
      post = _useSelector.post,
      isLoading = _useSelector.isLoading,
      status = _useSelector.status;

  var initializeDetailPost = (0, _react.useCallback)(function () {
    var promise = dispatch(eachPostInit());
    return function () {
      promise.abort();
    };
  }, [dispatch]);
  return {
    post: post,
    isLoading: isLoading,
    status: status,
    initializeDetailPost: initializeDetailPost
  };
};

exports.EACH_POST_FUNCTION = EACH_POST_FUNCTION;
var eachPostSlice = (0, _toolkit.createSlice)({
  name: namespace,
  initialState: initialState,
  reducers: {
    INITIALIZE_DETAIL_POST: function INITIALIZE_DETAIL_POST(state, action) {
      state.post = action.payload.post;
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, eachPostInit.pending, function (state) {
    state.isLoading = true;
    state.status = "PENDING";
  }), _defineProperty(_extraReducers, eachPostInit.fulfilled, function (state) {
    state.isLoading = false;
    state.status = "SUCCESS";
  }), _defineProperty(_extraReducers, eachPostInit.rejected, function (state) {
    state.isLoading = false;
    state.status = "FAILED";
  }), _extraReducers)
});
var INITIALIZE_DETAIL_POST = eachPostSlice.actions.INITIALIZE_DETAIL_POST;
exports.INITIALIZE_DETAIL_POST = INITIALIZE_DETAIL_POST;
var _default = eachPostSlice.reducer;
exports["default"] = _default;