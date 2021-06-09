import Charts from "../components/charts/Charts";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts />
    </div>
  );
};

export default Home;
