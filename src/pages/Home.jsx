import Charts from "../components/charts/Charts";
import { userData } from "../components/Data";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import LargeWidgets from "../components/largeWidgets/LargeWidgets";
import SmallWidget from "../components/smallWidget/SmallWidget";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="home-widgets">
        <SmallWidget />
        <LargeWidgets />
      </div>
    </div>
  );
};

export default Home;
