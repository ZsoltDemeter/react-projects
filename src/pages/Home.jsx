import "./Home.css";
import Particles from "react-particles-js";
import { DefaultParticles } from "../components/PagesData";

const Home = () => {
  return (
    <>
      <Particles params={DefaultParticles} />
      <div className="home-section" id="home">
        <h1>Hello,</h1>
      </div>
    </>
  );
};

export default Home;
