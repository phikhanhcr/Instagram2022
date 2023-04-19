import { useEffect } from "react";
import Mqtt from "../../plugins/Mqtt";
import Header from "../Header/Header";
import MainHomePage from "../MainHomePage/MainHomePage";
import mqttClient from "../../services/mqtt";

function Home() {
  // useEffect(() => {
  //   mqttClient.on("message", function (topic, message) {
  //     console.log({ topic, message });
  //   });
  // }, []);

  return (
    <div>
      <Header />
      <MainHomePage />
      <Mqtt />
    </div>
  );
}

export default Home;
