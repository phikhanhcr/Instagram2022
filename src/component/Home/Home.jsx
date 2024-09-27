import { useMqtt } from "../../context/MqttProvider";
import Header from "../Header/Header";
import MainHomePage from "../MainHomePage/MainHomePage";

function Home() {
  const {  data, willCard } = useMqtt();
  console.log({ data, willCard });
  return (
    <div>
      <Header />
      <MainHomePage />
    </div>
  );
}

export default Home;
