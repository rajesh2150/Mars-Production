import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import MarsImage from '../../../assests/Home/2k_mars.jpg'; // Correct path to the Mars image

const GlobeCom = () => {
  const globeEl = useRef();

  useEffect(() => {
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1; // Slow rotation speed
  }, []);

  return (
    <div>
      <Globe
        ref={globeEl}
        width={400}
        height={400}
        backgroundColor="#ffffff"
        globeImageUrl={MarsImage}
      />
    </div>
  );
};

export default GlobeCom;
