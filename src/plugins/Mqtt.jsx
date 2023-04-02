import { createContext, useEffect, useState } from "react";
import mqtt from "mqtt";
import { BASE_MQTT_URL } from "../config/common";

export const QosOption = createContext([]);
const qosOption = [
  {
    label: "0",
    value: 0,
  },
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
];
const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

function Mqtt() {
  const [qos, setQos] = useState(0);
  const [connectStatus, setConnectStatus] = useState(false);

  useEffect(() => {
    if (!connectStatus) {
      const client = mqtt.connect(BASE_MQTT_URL, {
        keepalive: 30,
        protocolId: "MQTT",
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        will: {
          topic: "WillMsg",
          payload: "Connection Closed abnormally..!",
          qos: 0,
          retain: true,
        },
        rejectUnauthorized: false,
        clientId: clientId
      });
      client.on("connect", function () {
        setConnectStatus(true)
        client.subscribe("presence", function (err) {
          if (!err) {
            client.publish("presence", "Hello mqtt");
          }
        });

        client.on("message", function (topic, message) {
          // message is Buffer
          console.log(message.toString());
          client.end();
        });

        console.log("Connected MQTT successfully");
      });
    }
  }, [connectStatus]);
  return <div></div>;
}

export default Mqtt;
