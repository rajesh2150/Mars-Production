import React,{useEffect} from "react";
import "./partner.css";
import Footer from "../common/Footer";
import { useLocation } from "react-router-dom";
import Partner1 from "../../assests/Partner/Partner1.png"
import Partner2 from "../../assests/Partner/Partner2.png"
import Partner3 from "../../assests/Partner/image 28.png"
import Partner4 from "../../assests/Partner/image 25.png"

const Partner = () => {
  const location = useLocation();

  useEffect(() => {
    const projectWrapper = document.querySelector('.project-wrapper');
    if (projectWrapper) {
      projectWrapper.classList.remove('loaded');
      const timeoutId = setTimeout(() => {
        projectWrapper.classList.add('loaded');
      }, 50);
      return () => clearTimeout(timeoutId); // Cleanup on unmount or before re-run
    }
  }, [location]);
  return (
    <>
      <div className="project-wrapper">
        <div className="main-div partner-main">
          <div>
            <p className="p1">How our partnership works</p>
            <p className="p2 partner-p2">
              Mars Family – The Recipe that bonds and binds Mars Movie Productions is designed to provide an end-to-end support to the Film Field Aspirants in any vertical of film making. We @ Mars believe that the industry is in the dire need of the following precepts to bring in a new era. Transparency: Everything is kept open for the aspirants to see what is happening to them and their talents and resources. Skilled Team: MMP is stewarded by highly skilled and well-seasoned team. Realistic Vision: MMP’s vision is founded on experts’ hindsight and what is achievable, but not on wishful fancies. Our goals are Specific, Measurable, Achievable, Realistic, and Time-Bound (SMART). Co-Existence (We grow as you grow): We wish you, as collaborators, a grand success which will be the cornerstone of our success. We are designed to Co-create, Collaborate, Co-Exist, and Co-Succeed. Creative Freedom: This home-like canvas has no mindless, wooden, and restrictive rules; we have standardized the processes for optimal output while not losing our sight on creative freedom, which is our holy grail.
            </p>
          </div>
          <div>
            <img
              className="partner-image"
              src={Partner4}
              alt="Partnership Illustration"
            />
          </div>
        </div>

        {/* <div className="partner-image-wrapper">
          <div>
            <img 
            src={Partner4}
              className="partner-image-tobe-added"
              alt="Placeholder"
            />
            <p className="p2 p2-padding">Film Makers/ Producers</p>
          </div>
          <div>
            <img

              src={Partner4}
              className="partner-image-tobe-added"
              alt="Placeholder"
            />
            <p className="p2 p2-padding">Distributors / OTT / Buyers</p>
          </div>
        </div> */}

        <div className="partners-section">
          <p className="p1">Our Partners</p>
          <div className="partners-list">
            <div className="partner">
              <img
                className="partner-logo"
                src={Partner1}
                alt="Calle Vapor"
              />
              <p className="partner-name">Calle Vapor</p>
              <p className="partner-description">
                Calle Vapor es un conjunto de música afrolatina, que surge en Córdoba capital en el 2006, interpre
              </p>
            </div>
            <div className="partner">
              <img
                className="partner-logo"
                src={Partner3}
                alt="Dinesh Narra Photography"
              />
              <p className="partner-name">Dinesh Narra Photography</p>
              <p className="partner-description">
                Imagination, Artistic approach, Creative intent, Skill and Personal Touch
              </p>
            </div>
            <div className="partner">
              <img
                className="partner-logo"
                src={Partner2}
                alt="Dinesh Narra Photography"
              />
              <p className="partner-name">Dinesh Narra Photography</p>
              <p className="partner-description">
                Imagination, Artistic approach, Creative intent, Skill and Personal Touch
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;
