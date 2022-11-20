import React from "react";
import ProductCard from "./ProductCard";
import {sliderData} from "../slider-data";
import "../style/slider.css";
import ReactElasticCarousel from "react-elastic-carousel";

const Slider = () => {
  const breakPoint = [
    { width: 10, itemsToShow: 1 },
    { width: 480, itemsToShow: 2 },
    { width: 780, itemsToShow: 3 },
    { width: 1160, itemsToShow: 4 },
    { width: 1480, itemsToShow: 5 },
  ];

  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "44px",
          marginBottom:"5px",
          fontWeight: "300",
          lineHeight: "32px",
          letterSpacing: "0px",
        }}
      >
        TERMÉKEK
      </h2>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="sliderLine"></div>
        </div>
    <div className="slider" style={{ marginBottom: "54px" }}>
      <ReactElasticCarousel
        showArrows={true}
        //enableAutoPlay
        autoPlaySpeed={2500}
        focusOnSelect={true}
        breakPoints={breakPoint}
        style={{marginLeft:"24px"}}
        className="wrapper"
        >
        {sliderData.map((item, i) => (
          <ProductCard
            key={i}
            name={item.heading}
            image={item.image}
            desc={item.desc}
          />
        ))}
      </ReactElasticCarousel>
    </div>
            </div>
  );
};

export default Slider;
