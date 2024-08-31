import React, { useRef, useEffect} from "react";
import Globe from "react-globe.gl";
import GlobeImage from "../../assests/Home/2k_mars.jpg";
import "./Globe.css";
import {useInsertionEffect} from "react"
const GlobeComponent = ({rotateGlobe}) => {
  const globeEl = useRef();


  useEffect(() => {
    console.log("Effect Hookk")
    if (rotateGlobe && globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.1;
      setTimeout(() => {
        controls.autoRotate = true;
      }, 3600); // assuming 10 deg/sec, it takes 3600ms to rotate 360 degrees at 0.1 deg/ms
    }
  }, [rotateGlobe]);

  return (
    <div className="hero--globe">
      <Globe
        ref={globeEl}
        width={600}
        height={500}
        
        rotateSpeed={0.5}
      />
      <img  className="mars-globe"style={{borderRadius:"50%"}} src={GlobeImage} height={300} width={300}/>
    </div>
  );
};

export default GlobeComponent;
