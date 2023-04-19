import { createContext, useEffect, useState } from "react";
import mqttClient, { MqttSubscribeTopic } from "../services/mqtt";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

function Mqtt() {
  const [qos, setQos] = useState(0);
  const [connectStatus, setConnectStatus] = useState(false);
  useEffect(() => {

    mqttClient.on("message", function (topic, message) {
      console.log({ topic, message })
    });
  }, [connectStatus]);
  return <div></div>;
}

export default Mqtt;
