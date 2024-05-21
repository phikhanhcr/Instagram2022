"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CHECK_NEW_NOTIFY = exports.MARK_ALL_READ = exports.ADD_NOTIFY_REALTIME = exports.LOGOUT_SET_NOTIFY = exports.INITIALIZE_NOTIFICATION = exports.NotifyFunction = exports.checkNewNotifyInitialized = exports.markAllReadNotificationAsyncThunk = exports.getNotificationAsyncThunk = void 0;

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

var initialState = {
  notifications: [],
  isLoadingNotify: false,
  statusNotify: null,
  checkNewNotify: false
};
var namespace = "notification"; // NOTIFICATION-ASYNC THUNK-----------------------------------------------------------------

var getNotificationAsyncThunk = (0, _toolkit.createAsyncThunk)("".concat(namespace, "/getMyNotify"), function _callee(_, _ref) {
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
            _context.next = 20;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_common.BASE_API_NOTIFICATION, "/api/notifications"), {
            headers: {
              Authorization: "Bearer ".concat(window.localStorage.getItem("accessToken"))
            }
          }));

        case 11:
          response = _context.sent;
          data = response.data;

          if (!data) {
            _context.next = 17;
            break;
          }

          dispatch(INITIALIZE_NOTIFICATION(data.data));
          _context.next = 18;
          break;

        case 17:
          return _context.abrupt("return", rejectWithValue("Something went wrong"));

        case 18:
          _context.next = 21;
          break;

        case 20:
          return _context.abrupt("return", rejectWithValue("Session expired, plz login to go go go"));

        case 21:
          _context.next = 26;
          break;

        case 23:
          _context.prev = 23;
          _context.t1 = _context["catch"](1);
          return _context.abrupt("return", rejectWithValue("Something went wrong"));

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 23]]);
});
exports.getNotificationAsyncThunk = getNotificationAsyncThunk;
var markAllReadNotificationAsyncThunk = (0, _toolkit.createAsyncThunk)("".concat(namespace, "/markAllRead"), function _callee2(_, _ref2) {
  var dispatch, rejectWithValue, signal, accessToken, response, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          dispatch = _ref2.dispatch, rejectWithValue = _ref2.rejectWithValue, signal = _ref2.signal;
          _context2.prev = 1;
          accessToken = window.localStorage.getItem("accessToken");
          _context2.t0 = accessToken;

          if (!_context2.t0) {
            _context2.next = 8;
            break;
          }

          _context2.next = 7;
          return regeneratorRuntime.awrap((0, _jwt.isValidToken)(accessToken));

        case 7:
          _context2.t0 = _context2.sent;

        case 8:
          if (!_context2.t0) {
            _context2.next = 20;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_common.BASE_API_NOTIFICATION, "/api/notifications/read-all"), {
            headers: {
              Authorization: "Bearer ".concat(window.localStorage.getItem("accessToken"))
            }
          }));

        case 11:
          response = _context2.sent;
          data = response.data;

          if (!data) {
            _context2.next = 17;
            break;
          }

          dispatch(MARK_ALL_READ());
          _context2.next = 18;
          break;

        case 17:
          return _context2.abrupt("return", rejectWithValue("Something went wrong"));

        case 18:
          _context2.next = 21;
          break;

        case 20:
          return _context2.abrupt("return", rejectWithValue("Session expired, plz login to go go go"));

        case 21:
          _context2.next = 26;
          break;

        case 23:
          _context2.prev = 23;
          _context2.t1 = _context2["catch"](1);
          return _context2.abrupt("return", rejectWithValue("Something went wrong"));

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 23]]);
});
exports.markAllReadNotificationAsyncThunk = markAllReadNotificationAsyncThunk;
var checkNewNotifyInitialized = (0, _toolkit.createAsyncThunk)("".concat(namespace, "/checkNewNotify"), function _callee3(_, _ref3) {
  var dispatch, rejectWithValue, signal, accessToken, response, data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          dispatch = _ref3.dispatch, rejectWithValue = _ref3.rejectWithValue, signal = _ref3.signal;
          _context3.prev = 1;
          accessToken = window.localStorage.getItem("accessToken");
          _context3.t0 = accessToken;

          if (!_context3.t0) {
            _context3.next = 8;
            break;
          }

          _context3.next = 7;
          return regeneratorRuntime.awrap((0, _jwt.isValidToken)(accessToken));

        case 7:
          _context3.t0 = _context3.sent;

        case 8:
          if (!_context3.t0) {
            _context3.next = 20;
            break;
          }

          _context3.next = 11;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(_common.BASE_API_NOTIFICATION, "/api/notifications/check-new"), {
            headers: {
              Authorization: "Bearer ".concat(window.localStorage.getItem("accessToken"))
            }
          }));

        case 11:
          response = _context3.sent;
          data = response.data;

          if (!data) {
            _context3.next = 17;
            break;
          }

          dispatch(CHECK_NEW_NOTIFY(data.data.is_new));
          _context3.next = 18;
          break;

        case 17:
          return _context3.abrupt("return", rejectWithValue("Something went wrong"));

        case 18:
          _context3.next = 21;
          break;

        case 20:
          return _context3.abrupt("return", rejectWithValue("Session expired, plz login to go go go"));

        case 21:
          _context3.next = 26;
          break;

        case 23:
          _context3.prev = 23;
          _context3.t1 = _context3["catch"](1);
          return _context3.abrupt("return", rejectWithValue("Something went wrong"));

        case 26:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 23]]);
}); // NOTIFICATION-SELECTOR-----------------------------------------------------------------

exports.checkNewNotifyInitialized = checkNewNotifyInitialized;

var NotifyFunction = function NotifyFunction() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var initializeNotify = (0, _react.useCallback)(function () {
    dispatch(checkNewNotifyInitialized());
  }, [dispatch]);

  var _useSelector = (0, _reactRedux.useSelector)(_selector.notificationSelector),
      checkNewNotify = _useSelector.checkNewNotify,
      statusNotify = _useSelector.statusNotify,
      isLoadingNotify = _useSelector.isLoadingNotify,
      notifications = _useSelector.notifications;

  return {
    notifications: notifications,
    isLoadingNotify: isLoadingNotify,
    statusNotify: statusNotify,
    checkNewNotify: checkNewNotify,
    initializeNotify: initializeNotify
  };
}; // NOTIFICATION-SLICE-----------------------------------------------------------------


exports.NotifyFunction = NotifyFunction;
var notificationSlice = (0, _toolkit.createSlice)({
  name: namespace,
  initialState: initialState,
  reducers: {
    INITIALIZE_NOTIFICATION: function INITIALIZE_NOTIFICATION(state, action) {
      state.notifications = action.payload;
    },
    LOGOUT_SET_NOTIFY: function LOGOUT_SET_NOTIFY(state, action) {
      state.notifications = [];
    },
    ADD_NOTIFY_REALTIME: function ADD_NOTIFY_REALTIME(state, action) {
      state.notifications.push(action.payload);
    },
    MARK_ALL_READ: function MARK_ALL_READ(state) {
      state.notifications.map(function (ele) {
        return ele.seen === true;
      });
      state.checkNewNotify = false;
    },
    CHECK_NEW_NOTIFY: function CHECK_NEW_NOTIFY(state, action) {
      state.checkNewNotify = action.payload;
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, getNotificationAsyncThunk.pending, function (state) {
    state.statusNotify = "PENDING";
    state.isLoadingNotify = true;
  }), _defineProperty(_extraReducers, getNotificationAsyncThunk.fulfilled, function (state) {
    state.isLoadingNotify = false;
    state.statusNotify = "SUCCESS";
  }), _defineProperty(_extraReducers, getNotificationAsyncThunk.rejected, function (state) {
    state.statusNotify = "FAILED";
    state.isLoadingNotify = false;
  }), _defineProperty(_extraReducers, checkNewNotifyInitialized.pending, function (state) {
    state.statusNotify = "PENDING";
    state.isLoadingNotify = true;
  }), _defineProperty(_extraReducers, checkNewNotifyInitialized.fulfilled, function (state) {
    state.isLoadingNotify = false;
    state.statusNotify = "SUCCESS";
  }), _defineProperty(_extraReducers, checkNewNotifyInitialized.rejected, function (state) {
    state.statusNotify = "FAILED";
    state.isLoadingNotify = false;
  }), _extraReducers)
});
var _notificationSlice$ac = notificationSlice.actions,
    INITIALIZE_NOTIFICATION = _notificationSlice$ac.INITIALIZE_NOTIFICATION,
    LOGOUT_SET_NOTIFY = _notificationSlice$ac.LOGOUT_SET_NOTIFY,
    ADD_NOTIFY_REALTIME = _notificationSlice$ac.ADD_NOTIFY_REALTIME,
    MARK_ALL_READ = _notificationSlice$ac.MARK_ALL_READ,
    CHECK_NEW_NOTIFY = _notificationSlice$ac.CHECK_NEW_NOTIFY;
exports.CHECK_NEW_NOTIFY = CHECK_NEW_NOTIFY;
exports.MARK_ALL_READ = MARK_ALL_READ;
exports.ADD_NOTIFY_REALTIME = ADD_NOTIFY_REALTIME;
exports.LOGOUT_SET_NOTIFY = LOGOUT_SET_NOTIFY;
exports.INITIALIZE_NOTIFICATION = INITIALIZE_NOTIFICATION;
var _default = notificationSlice.reducer;
exports["default"] = _default;