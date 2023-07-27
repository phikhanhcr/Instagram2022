import mqtt from "mqtt";
import { BASE_MQTT_URL } from "../config/common";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

const listenAndForwardMessage = (message, regex) => {
  const regexTopic = regex.exec(message.topic);
  if (regexTopic && regexTopic.length === 3) {
    const string = String.fromCharCode.apply(null, message.payloadString);
    console.log({ string });
    let decoder = new TextDecoder("utf-8");
    let decodedString = decoder.decode(message.payloadString);

    console.log({ decodedString });
    const messageJson = JSON.parse(message.payloadString);
    console.log({ messageJson });
    // const topicKey = regexTopic[2];
    return true;
  }
  return false;
};

const onMessageArrived = (message) => {
  try {
    if (listenAndForwardMessage(message, /global\/user\/(.*?)\/(.*?)$/gm)) {
      return;
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

client.onMessageArrived = onMessageArrived;
client.handleMessage = onMessageArrived;

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
