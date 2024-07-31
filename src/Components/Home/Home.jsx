import React, { useState, useEffect, useRef } from "react";
import Carosual from "./Carosual/Carosual";
import Globe from "react-globe.gl";
import "./Home.css";
import PartnerTestimonial from "./PartnerTestimonial";
import Upcoming from "./Upcoming";
import HowWeWork from "./HowWeWork";
import Footer from "../common/Footer";
import GlobeCom from "./Carosual/GlobeCom";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const globeEl = useRef(null);
  const globeImgUrl =
    "https://www.solarsystemscope.com/textures/download/2k_mars.jpg";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 50); // Adjust this timeout if needed

    return () => clearTimeout(timeoutId); // Cleanup on unmount or before re-run
  }, []);

  return (
    <>
      <div className={`home-wrapper ${loaded ? "loaded" : ""}`}>
        <div className="carosual-div">
          <GlobeCom />

          <Carosual />
        </div>
      </div>
      <PartnerTestimonial />
      <Upcoming />
      <HowWeWork />
      <Footer />
    </>
  );
};

export default Home;
