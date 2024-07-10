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

  const handleRotateGlobe = (newRotation) => {
    setRotation(newRotation);
  };

  // Optional initial rotation animation
  useEffect(() => {
    const animateRotation = () => {
      setRotation((prevRotation) => {
        const newX = prevRotation[0] + 0.2; // Adjust speed as desired
        return [newX % 360, prevRotation[1]]; // Loop 360 degrees for longitude
      });
    };

    const intervalId = setInterval(animateRotation, 100); // Adjust interval for animation speed

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return (<>
    <div className="home-wrapper">
      <div className="home-globe">
        <Globe height={300} width={300} />
      </div>
      <div>
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
