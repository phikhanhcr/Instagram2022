import React, { createContext, useState, useEffect, useContext } from "react";
import mqtt from "mqtt";
import client, { MqttSubscribeTopic, onMessageArrived } from "../services/mqtt";

const MqttContext = createContext();

export const MqttProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState({});
  const [wildCard, setWillCard] = useState(null);

  useEffect(() => {
    client.on("connect", () => {
      console.log("Connected");
      setIsConnected(true);
    });

    client.on("connect", function () {
      console.log("MQTT Connected");
    });

    client.on("disconnect", function () {
      console.log("MQTT disconnect");
    });

    client.on("message", function (topic, message) {
      console.log({ topic, message });
      const [parseWillCard, parseMessage] = onMessageArrived({
        topic,
        message,
      });
      console.log({ parseMessage})
      setWillCard(parseWillCard);
      setData(parseMessage);
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <MqttContext.Provider
      value={{ client, isConnected, data, willCard: wildCard }}
    >
      {children}
    </MqttContext.Provider>
  );
};

export const useMqtt = () => useContext(MqttContext);
