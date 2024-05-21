"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MqttSubscribeTopic = void 0;

var _mqtt = _interopRequireDefault(require("mqtt"));

var _common = require("../config/common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

var listenAndForwardMessage = function listenAndForwardMessage(message, regex) {
  var regexTopic = regex.exec(message.topic);
  console.log({
    regexTopic: regexTopic
  });

  if (regexTopic && regexTopic.length === 3) {
    var string = String.fromCharCode.apply(null, message.payload);
    console.log({
      string: string
    });
    var decoder = new TextDecoder("utf-8");
    var decodedString = decoder.decode(message.payload);
    console.log({
      decodedString: decodedString
    });
    var messageJson = JSON.parse(message.payload);
    console.log({
      messageJson: messageJson
    }); // const topicKey = regexTopic[2];

    return true;
  }

  return false;
};

var onMessageArrived = function onMessageArrived(message) {
  try {
    console.log({
      message: message
    });

    if (listenAndForwardMessage(message, /global\/user\/(.*?)\/(.*?)$/gm)) {
      return;
    }
  } catch (e) {
    console.log("[MQTT] onMessageArrived:", e);
  }
};

var client = _mqtt.default.connect(_common.BASE_MQTT_URL, {
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

client.onMessageArrived = onMessageArrived;
client.handleMessage = onMessageArrived;
client.on("connect", function () {
  console.log("MQTT Connected");
});
client.on("disconnect", function () {
  console.log("MQTT disconnect");
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
exports.default = _default;