import React, { useState, useEffect } from "react";
import "./carosual.css";
import globe from "../../../assests/pngwing 2.png";

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
        <img src={globe} alt="" />
      </div>
      <div className="carousel-box">
        <img
          className="carosual-topi"
          src="https://s3-alpha-sig.figma.com/img/a7af/c4a4/cd8d4dd080dc60b86f57dfbd6e48c9a5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTULf6QfDZEWJb3-XMNtDu9gXU2B5ntv4O0IiWk7fmfyZQx-nDO7eteNHxNL1PJfp-zCntLaQrPgiR9ep6vBVSYG~3AxZrOPgkxZGZL0TaTooX~ACJIjq4CnmUIHdq9o6WXfb6a~98NWdwO6k7PaiYvOWg1izjUhEyYU8wDLWd-cNbA1MznI1nmFN6GMdnfT6qPBHOyPLvcRTHwCgyAyTs0ETkoE1XeGB7qxrSFwlgmSbpH-G4l3NkHiG3EwWbOs1~k2-uBKZWgTcnKbQdtCnUPWIqgk2eB2hk2C-MDExReUKSka~5bWD8G~GPGL8KryD3FBKbH48H1PKnw6FfOA1Q__"
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
            src="https://s3-alpha-sig.figma.com/img/ba21/185f/a68a50e21343208170220d2c6c8049c1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yr40ujSwwbHNbS9oKLNHOoxEsfiot~HiQEiaTiJzJTIiuL5QqYj2FpbhCnBtVpF7KfH-pJfd5cJGlIkU4LoVUnKMWQc5Vr8b~FFTu3jOr~LY6faRFixvr~3t-aNe7KBk54KHnIQAHBAwVTKVQH7zACiOWNY7swEkTDhiF3B8XAK9OxXKwCOz02WwnQ6XxsRYsEAwANOFTGRYlpHSubqls~r5xtymKYxmKoObWts8NPmdQV3OFpb12MSeoTZPU4Nt1OZxRpihd3jnEj3F8aKM9mFe5J60vjjNW4j5U1tWZKVwSIOUvu9cQJdzlNZU8C1yysA-nN0bcKaTc9reomcCBg__"
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
            src="https://s3-alpha-sig.figma.com/img/513d/2cd6/4e27e113baff88c2adaf71626da959d1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RCDq~tlBwXJ96R1lJ-UCW4V1~fyCBxEqlkOcnL3wvTR2QM9Sps3HjS5YS7KCcpq-kyodUh6zYdag~Ji8c6R71f1p4z0tJZYrTZhdxU6odQ2sYP-OOX1Kv-PWRenEI0IQFQRlySpzEls6XAGvYkdCztw-cSLLeAdkImUXFSUGUjLwr7zsfHWcr1OVln~X6cnO1h9cyUqpewfcTws~RAU-fFvPOJucwgGTFCPa~UOz2V~bwGGvLErE60jSl0rRqnpTNv-E3C7H57ojEogW2cZRm1CFP7RLQGWRfe7lsghNnCO84rTT3MqmavUjcFdU3jb1nnPJvRExY0GgT0kwAygWLQ__"
            alt="Second"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
