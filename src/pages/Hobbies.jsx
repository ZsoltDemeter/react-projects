import React from "react";
import "./Hobbies.css";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/PagesData";

const Hobbies = () => {
  return (
    <div className="hobbies-section" id="hobbies">
      <ImageSlider slides={SliderData} />
      <p>
        I spend a lot of time on my computer, working, coding and whenever I
        have time, playing chess or other strategy games. I also love outdoor
        activities, hiking, sightseeing, bicycle riding and even archery,
        whenever I can find a safe place to set up my target.
      </p>
    </div>
  );
};

export default Hobbies;
