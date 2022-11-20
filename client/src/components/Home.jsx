import React, { useEffect, useState } from "react";
import { sliderData } from "../slider-data";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "../style/home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6500;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div>
      <div className="pic-slider">
        <ChevronLeftIcon className="arrow prev" onClick={prevSlide} />
        <ChevronRightIcon className="arrow next" onClick={nextSlide} />

        {sliderData.map((slide, index) => {
          const { image, heading, desc } = slide;
          return (
            <div
              key={index}
              className={
                index === currentSlide ? "pic-slide current" : "pic-slide"
              }
            >
              {index === currentSlide && (
                <>
                  <img src={image} alt="pic-slide" />
                  <div className="slide-content">
                    <h2 style={{color:"white"}}>{heading}</h2>
                    <p style={{color:"white"}}>{desc}</p>
                    <hr />
                    <a href="/shop" className="slide-content-btn">
                      Ugrás a termékekre
                    </a>
                  </div>
                  
                  {/* <div className="card-content">
                    <Card
                      className="muiCardom"
                      sx={{
                        maxWidth: "380px",
                        opacity: "0.85",
                        borderRadius: "20px",
                        padding: "10px 10px 10px 10px",
                        maxHeight: "400px",
                      }}
                    >
                      <div className="card-title">
                        <h1>
                          FOGÁSZATI ESZKÖZÖK <br />
                          FORGALMAZÁSA
                          <br /> ÉS SZERVIZELÉSE
                        </h1>
                      </div>

                      <div className="card-desc">
                        <p>
                          Gyors,minőségi szolgáltatás
                          <br />
                          Naprakész megoldások
                          <br />
                          Elégedett ügyfelek
                        </p>
                      </div>

                      <div className="card-btn">
                        <Button
                          href="#foo"
                          sx={{
                            opacity: "unset",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                          }}
                        >
                          Kapcsolatfelvétel
                        </Button>
                      </div>
                    </Card>
                  </div> */}
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="szechenyi">
        <a href="/szechenyi"><img className="szechenyiImg" src="/images/szechenyi.png" alt=""/></a>
      </div>
    </div>
  );
};

export default Home;
