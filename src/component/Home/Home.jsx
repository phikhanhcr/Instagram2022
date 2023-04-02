import Mqtt from "../../plugins/Mqtt";
import Header from "../Header/Header";
import MainHomePage from "../MainHomePage/MainHomePage";

function Home() {
  return (
    <div>
      <Header />
      <MainHomePage />
      {/* <Mqtt /> */}
    </div>
  );
}

export default Home;
