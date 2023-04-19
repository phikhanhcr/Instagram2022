import mqtt from "mqtt";
import { BASE_MQTT_URL } from "../config/common";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);
const listenAndForwardMessage = (message, regex) => {
  const regexTopic = regex.exec(message.topic);
  console.log({ regexTopic });
  if (regexTopic && regexTopic.length === 3) {
    const messageJson = JSON.parse(message.payloadString);
    const topicKey = regexTopic[2];
    this.$nuxt.$emit(topicKey, messageJson);
    return true;
  }
  return false;
};

const client = mqtt.connect(BASE_MQTT_URL, {
  keepalive: 30,
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
  clientId,
  username: "Instagram123",
  password: "oke",
});

client.on("connect", function () {
  console.log("MQTT Connected");
});

export const MqttSubscribeTopic = {
  global: (id) => {
    client.subscribe(`global/user/${id}/#`, function (err) {
      if (!err) {
        client.publish("presence", "Hello mqtt");
      }
    });
  },
};

export default client;
