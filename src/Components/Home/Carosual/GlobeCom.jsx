import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import MarsImage from "../../../assests/Home/2k_mars.jpg"; // Assuming the correct path

const GlobeCom = () => {
  const globeEl = useRef();

  useEffect(() => {
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1; // Slow rotation speed
  }, []);

  return (
    <div style={{ border: "1px solid red" }}>
      <Globe
        ref={globeEl}
        width={400}
        height={400}
        backgroundColor="#fff"
        globeImageUrl={
          "https://www.solarsystemscope.com/textures/download/2k_mars.jpg"
        }
      />
    </div>
  );
};

export default GlobeCom;
