import { useEffect } from "react";
import Mqtt from "../../plugins/Mqtt";
import Header from "../Header/Header";
import MainHomePage from "../MainHomePage/MainHomePage";
import mqttClient from "../../services/mqtt";

function Home() {

  return (
    <div>
      <Mqtt />
      <Header />
      <MainHomePage />
    </div>
  );
}

export default Home;
