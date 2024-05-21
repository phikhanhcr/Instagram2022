import { createContext, useEffect, useState } from "react";
import mqttClient, { MqttSubscribeTopic } from "../services/mqtt";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

function Mqtt() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    mqttClient.on('connect', function () {
      setIsConnected(true);
      console.log('connected');
    });

    mqttClient.on('message', function (topic, message) {
        console.log("Received '" + message + "' on '" + topic + "'");
    });
  }, []);

  return <div></div>;
}

export default Mqtt;
