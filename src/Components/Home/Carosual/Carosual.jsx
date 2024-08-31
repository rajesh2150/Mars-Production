import React, { useState, useEffect } from "react";
import "./carosual.css";
import globe from "../../../assests/pngwing 2.png";
import Globe from "react-globe.gl";
import GlobeCom from "./GlobeCom";
import carImg1 from "../../../assests/Home/Carosual1.png"
import carImg2 from "../../../assests/Home/Carosual2.png"
import MarsLogo from "../../../assests/Home/MarsProLogo.png"
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 6000); // 3 seconds fade out + 3 seconds fade in = 6 seconds total

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="globe">
        {/* <Globe/> */}
        <img src={globe} className=".img-mars" alt="Mars Production"/>
      </div>
      <div>
        <img
          alt="Mars Production"
          className="carosual-top"
          src={MarsLogo}
        />
      </div>

      {/* First div */}
      <div
        className={`carousel-item ${
          currentIndex === 0 ? "fade-in" : "fade-out"
        }`}
      >
        <div className="carousel-title-wrapper">
          <div className="carousel-details first">
            <div className="paragraphs">
              <p className="carousel-heading">
                To Make timeless films intended for a better tomorrow
              </p>
              <p className="carousel-paragraph">
                Crafting Cinematic Dreams Where Stories Come to Life
              </p>
              <a className="carousel-link" href="#">
                View Last Project
              </a>
            </div>
          </div>
          <img
          
            className="carousel-image carousel-image-one"
            src={carImg1}
            alt="First"
          />
        </div>
      </div>

      {/* Second div */}
      <div
        className={`carousel-item ${
          currentIndex === 1 ? "fade-in" : "fade-out"
        }`}
      >
        <div className="carousel-title-wrapper">
          <div className="carousel-details carousel-second">
            <div>
              <p className="carousel-heading">
                Bringing
                <p className="carosual-heading"> Dreams to Screen</p>
              </p>
              <p className="carousel-paragraph">
                With cutting edge technology and optimized value creation
                processes, we work to help film creation contributors, including
                craft and resource owners, to realize their dream of partaking
                in or creating timeless winner films that are patronized across
                times.
              </p>
              <a className="carousel-link" href="#">
                View Last Project
              </a>
            </div>
          </div>
          <img
            className="carousel-image"
            src={carImg2}
            alt="Second"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
