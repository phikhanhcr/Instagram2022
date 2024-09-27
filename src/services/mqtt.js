import mqtt from "mqtt";
import { BASE_MQTT_URL } from "../config/common";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

const listenAndForwardMessage = (message, regex, regexTopicLength) => {
  const regexTopic = regex.exec(message.topic);
  if (regexTopic && regexTopic.length === regexTopicLength) {
    const messageJson = JSON.parse(message.message);
    const topicLKey = regexTopic[regexTopicLength - 1];
    return [topicLKey, messageJson];
  }
  return [null];
};

export const onMessageArrived = (message) => {
  try {
    if (listenAndForwardMessage(message, /global\/user\/(.*?)\/(.*?)$/gm, 3)) {
      const [topicLKey, messageJson] = listenAndForwardMessage(
        message,
        /global\/user\/(.*?)\/(.*?)$/gm,
        3
      );

      return [topicLKey, messageJson];
    }
  } catch (e) {
    console.log("[MQTT] onMessageArrived:", e);
  }
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

export const MqttSubscribeTopic = {
  global: (id) => {
    console.log({ id });
    client.subscribe(`global/user/${id}/#`, function (err) {
      if (!err) {
        // client.publish(`global/user/${id}/tests`, "Hello mqtt");
      }
    });
  },
};

export default client;
