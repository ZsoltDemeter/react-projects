import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,415</span>
          <span className="featured-money-rate">
            -11.4 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$4,615</span>
          <span className="featured-money-rate">
            -2.7 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$1,321</span>
          <span className="featured-money-rate">
            1.4 <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
