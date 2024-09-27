"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MqttSubscribeTopic = exports.onMessageArrived = void 0;

var _mqtt = _interopRequireDefault(require("mqtt"));

var _common = require("../config/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

var listenAndForwardMessage = function listenAndForwardMessage(message, regex, regexTopicLength) {
  var regexTopic = regex.exec(message.topic);

  if (regexTopic && regexTopic.length === regexTopicLength) {
    var messageJson = JSON.parse(message.message);
    var topicLKey = regexTopic[regexTopicLength - 1];
    return [topicLKey, messageJson];
  }

  return [null];
};

var onMessageArrived = function onMessageArrived(message) {
  try {
    if (listenAndForwardMessage(message, /global\/user\/(.*?)\/(.*?)$/gm, 3)) {
      var _listenAndForwardMess = listenAndForwardMessage(message, /global\/user\/(.*?)\/(.*?)$/gm, 3),
          _listenAndForwardMess2 = _slicedToArray(_listenAndForwardMess, 2),
          topicLKey = _listenAndForwardMess2[0],
          messageJson = _listenAndForwardMess2[1];

      return [topicLKey, messageJson];
    }
  } catch (e) {
    console.log("[MQTT] onMessageArrived:", e);
  }
};

exports.onMessageArrived = onMessageArrived;

var client = _mqtt["default"].connect(_common.BASE_MQTT_URL, {
  keepalive: 30,
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false
  },
  rejectUnauthorized: false,
  clientId: clientId,
  username: "Instagram123",
  password: "oke"
});

var MqttSubscribeTopic = {
  global: function global(id) {
    console.log({
      id: id
    });
    client.subscribe("global/user/".concat(id, "/#"), function (err) {
      if (!err) {// client.publish(`global/user/${id}/tests`, "Hello mqtt");
      }
    });
  }
};
exports.MqttSubscribeTopic = MqttSubscribeTopic;
var _default = client;
exports["default"] = _default;