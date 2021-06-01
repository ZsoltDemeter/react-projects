import "./ImageSlider.css";
import { SliderData } from "./PagesData";
import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <AiOutlineLeft className="left-arrow" onClick={prevSlide} />

      {SliderData.map((slider, index) => {
        return (
          <div
            className={index === current ? "slide image-show" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slider.image} alt={slider.alt} className="image" />
            )}
          </div>
        );
      })}
      <AiOutlineRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;
