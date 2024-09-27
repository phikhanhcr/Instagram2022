"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GET_ALL_CHANNELS = exports.ConversationFunction = exports.getConversationsAsyncById = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _reactRedux = require("react-redux");

var _jwt = require("../../../utils/jwt");

var _selector = require("../../selector/selector");

var _common = require("../../../config/dist/common");

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  conversations: [],
  isLoading: false
};
var namespace = "conversation";
var getConversationsAsyncById = (0, _toolkit.createAsyncThunk)("".concat(namespace, "/all_channels"), function _callee(_, _ref) {
  var dispatch, signal, rejectWithValue, accessToken, response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch = _ref.dispatch, signal = _ref.signal, rejectWithValue = _ref.rejectWithValue;
          _context.prev = 1;
          accessToken = window.localStorage.getItem("accessToken"); // need to check if invalid token

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
            _context.next = 16;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_common.BASE_API_CHAT, "/chat/channels"), {
            headers: {
              Authorization: "Bearer ".concat(window.localStorage.getItem("accessToken"))
            },
            params: {
              limit: 10
            },
            signal: signal
          }));

        case 11:
          response = _context.sent;
          data = response.data;

          if (data.data.length) {
            dispatch(GET_ALL_CHANNELS(data.data));
          }

          _context.next = 17;
          break;

        case 16:
          return _context.abrupt("return", rejectWithValue("Token expired"));

        case 17:
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t1 = _context["catch"](1);
          return _context.abrupt("return", rejectWithValue("Something went wrong......."));

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 19]]);
});
exports.getConversationsAsyncById = getConversationsAsyncById;

var ConversationFunction = function ConversationFunction() {
  var _useSelector = (0, _reactRedux.useSelector)(_selector.conversationSelector),
      conversations = _useSelector.conversations,
      isLoading = _useSelector.isLoading,
      status = _useSelector.status;

  return {
    conversations: conversations,
    isLoading: isLoading,
    status: status
  };
}; // conversation_SLICE-----------------------------------------------------------------


exports.ConversationFunction = ConversationFunction;
var conversationSlice = (0, _toolkit.createSlice)({
  name: namespace,
  initialState: initialState,
  reducers: {
    GET_ALL_CHANNELS: function GET_ALL_CHANNELS(state, action) {
      state.conversations = action.payload;
      console.log({
        state: state.conversations
      });
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, getConversationsAsyncById.pending, function (state) {
    state.status = "PENDING";
    state.isLoading = true;
  }), _defineProperty(_extraReducers, getConversationsAsyncById.fulfilled, function (state) {
    state.isLoading = false;
    state.status = "SUCCESS";
  }), _defineProperty(_extraReducers, getConversationsAsyncById.rejected, function (state) {
    state.status = "FAILED";
    state.isLoading = false;
  }), _extraReducers)
});
var GET_ALL_CHANNELS = conversationSlice.actions.GET_ALL_CHANNELS;
exports.GET_ALL_CHANNELS = GET_ALL_CHANNELS;
var _default = conversationSlice.reducer;
exports["default"] = _default;