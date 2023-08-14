"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CREATE_COMMENT_REPLIED = exports.CREATE_COMMENT = exports.INITIALIZE_COMMENT = exports.CommentFunction = exports.commentAsyncIdPost = exports.createCommentAsync = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _reactRedux = require("react-redux");

var _common = require("../../../config/common");

var _jwt = require("../../../utils/jwt");

var _selector = require("../../selector/selector");

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  comment: [],
  isLoading: false,
  status: null,
  idLoadingCreate: false
};
var namespace = "comment_by_id_post";
var createCommentAsync = (0, _toolkit.createAsyncThunk)("".concat(namespace, "/create"), function _callee(body, _ref) {
  var dispatch, rejectWithValue, accessToken, response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch = _ref.dispatch, rejectWithValue = _ref.rejectWithValue;
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
          return regeneratorRuntime.awrap(_axios.default.post("".concat(_common.BASE_API_BACKEND, "/api/comments/create"), _objectSpread({}, body), {
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

          if (body.comment_root_id || body.reply_to) {
            data.comment_root_id = body.comment_root_id;
            dispatch(CREATE_COMMENT_REPLIED(data));
          } else {
            dispatch(CREATE_COMMENT(data));
          }

          _context.next = 18;
          break;

        case 17:
          return _context.abrupt("return", rejectWithValue("Errors"));

        case 18:
          _context.next = 21;
          break;

        case 20:
          return _context.abrupt("return", rejectWithValue("Something went wrong"));

        case 21:
          _context.next = 26;
          break;

        case 23:
          _context.prev = 23;
          _context.t1 = _context["catch"](1);
          return _context.abrupt("return", rejectWithValue("Errors"));

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 23]]);
});
exports.createCommentAsync = createCommentAsync;
var commentAsyncIdPost = (0, _toolkit.createAsyncThunk)("".concat(namespace, "/init"), function _callee2(idPost, _ref2) {
  var dispatch, rejectWithValue, accessToken, response, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          dispatch = _ref2.dispatch, rejectWithValue = _ref2.rejectWithValue;
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
            _context2.next = 17;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(_axios.default.post("".concat(_common.BASE_API_BACKEND, "/api/comments/get-comments-by-post"), {
            post_id: idPost
          }, {
            headers: {
              Authorization: "Bearer ".concat(window.localStorage.getItem("accessToken"))
            }
          }));

        case 11:
          response = _context2.sent;
          data = response.data;
          console.log({
            data: data
          });
          dispatch(INITIALIZE_COMMENT({
            comment: data.data
          }));
          _context2.next = 18;
          break;

        case 17:
          return _context2.abrupt("return", rejectWithValue("Something went wrong"));

        case 18:
          _context2.next = 23;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t1 = _context2["catch"](1);
          dispatch(INITIALIZE_COMMENT({
            comment: null
          }));

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 20]]);
});
exports.commentAsyncIdPost = commentAsyncIdPost;

var CommentFunction = function CommentFunction() {
  var _useSelector = (0, _reactRedux.useSelector)(_selector.commentSelector),
      comment = _useSelector.comment,
      isLoading = _useSelector.isLoading,
      status = _useSelector.status;

  return {
    comment: comment,
    isLoading: isLoading,
    status: status
  };
}; // COMMENT_SLICE-----------------------------------------------------------------


exports.CommentFunction = CommentFunction;
var commentSlice = (0, _toolkit.createSlice)({
  name: namespace,
  initialState: initialState,
  reducers: {
    INITIALIZE_COMMENT: function INITIALIZE_COMMENT(state, action) {
      state.comment = action.payload.comment;
    },
    CREATE_COMMENT: function CREATE_COMMENT(state, action) {
      state.comment.push(action.payload);
    },
    CREATE_COMMENT_REPLIED: function CREATE_COMMENT_REPLIED(state, action) {
      state.comment.map(function (ele) {
        if (ele.id === action.payload.comment_root_id) {
          return _objectSpread({}, ele, {
            comment_replied_count: ele.comment_replied_count++,
            comment_replied: ele.comment_replied.push({
              comment_id: {
                id: action.payload.id,
                content: action.payload.content
              },
              user_id: action.payload.user_commented_id,
              username: action.payload.username,
              avatar: action.payload.avatar,
              reply_to: {
                user_id: action.payload.reply_to.id,
                username: action.payload.reply_to.username
              }
            })
          });
        }

        return ele;
      });
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, commentAsyncIdPost.pending, function (state) {
    state.status = "PENDING";
    state.isLoading = true;
  }), _defineProperty(_extraReducers, commentAsyncIdPost.fulfilled, function (state) {
    state.isLoading = false;
    state.status = "SUCCESS";
  }), _defineProperty(_extraReducers, commentAsyncIdPost.rejected, function (state) {
    state.status = "FAILED";
    state.isLoading = false;
  }), _defineProperty(_extraReducers, createCommentAsync.pending, function (state) {
    state.status = "PENDING";
    state.isLoadingCreate = true;
  }), _defineProperty(_extraReducers, createCommentAsync.fulfilled, function (state) {
    state.isLoadingCreate = false;
    state.status = "SUCCESS";
  }), _defineProperty(_extraReducers, createCommentAsync.rejected, function (state) {
    state.status = "FAILED";
    state.isLoadingCreate = false;
  }), _extraReducers)
});
var _commentSlice$actions = commentSlice.actions,
    INITIALIZE_COMMENT = _commentSlice$actions.INITIALIZE_COMMENT,
    CREATE_COMMENT = _commentSlice$actions.CREATE_COMMENT,
    CREATE_COMMENT_REPLIED = _commentSlice$actions.CREATE_COMMENT_REPLIED;
exports.CREATE_COMMENT_REPLIED = CREATE_COMMENT_REPLIED;
exports.CREATE_COMMENT = CREATE_COMMENT;
exports.INITIALIZE_COMMENT = INITIALIZE_COMMENT;
var _default = commentSlice.reducer;
exports.default = _default;