import React, { useState, useEffect, useRef } from "react";
import Carosual from "./Carosual/Carosual";
import Globe from "react-globe.gl";
import "./Home.css";
import PartnerTestimonial from "./PartnerTestimonial";
import Upcoming from "./Upcoming";
import HowWeWork from "./HowWeWork";
import Footer from "../common/Footer";
const Home = () => {
  const [rotation, setRotation] = useState([0, 0]); // Initial rotation (longitude, latitude)
  const globeEl = useRef(null);
const globeImgUrl="https://www.solarsystemscope.com/textures/download/2k_mars.jpg";

  return (<>
    <div className="home-wrapper">
      <div className="home-globe">
        <Globe ref={globeEl}  globeImageUrl={globeImgUrl} bumpImageUrl={globeImgUrl} backgroundImageUrl={globeImgUrl} height={300} width={300} />
      </div>
      <div className="carosual-div">
        <Carosual />
      </div>
    </div>
      <PartnerTestimonial/>
      <Upcoming/>
      <HowWeWork/>
      <Footer/>
  </>

  );
};

export default Home;
