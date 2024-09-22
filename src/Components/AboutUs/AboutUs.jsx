import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./about.css";
import Footer from "../common/Footer";
import "../common/footer.css";
import About1 from "../../assests/AboutUS/image 10.png"
import About2 from "../../assests/AboutUS/image 24.png"
// import logo from "Mars-Production\src\assests\Mars_productions_flat-01 1.png"
import logo from "../../assests/Mars_productions_flat-01 1.png"
const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    const projectWrapper = document.querySelector(".about-us-wrapper");
    if (projectWrapper) {
      projectWrapper.classList.remove("loaded");
      const timeoutId = setTimeout(() => {
        projectWrapper.classList.add("loaded");
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  return (
    <>
      <div className="about-us-wrapper">
        <div className="main-div about-us-main">
          <div className="left-side">
            <div className="leftside-one">
              <p className="aboutus-p1">Mars Productions Private Limited</p>
              <p className="aboutus-p2">
                Mars Productions Private Limited is a Film & Technology
                Production company located at Sri Kalahasthi, Andhra Pradesh,
                India. Mars Productions Private Limited is registered with the
                Government of India on 4th September 2020 as a group of
                companies with Film production as its first step of operations.
                Mars movie productions is part of Mars productions and is
                registered with Google as a Digital company on 14th May 2020.
              </p>
            </div>
            {/* <div className="leftside-two">
              <p className="aboutus-p1">Founders Note</p>
              <p className="aboutus-p2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div> */}
          </div>
          <div className="right-side">
            <img
              className="right-side-image"
              src={logo}
              alt="Company Logo"
            />
            <p>
              
            </p>
          </div>
        </div>
        <div className="second-main-div">
          <div className="about-leftside second-main-div">
            <div className="about-leftside-1">
              <div>
                <p className="p1">Our Vision</p>
                <p className="p2 p-desc">
                  To create an eco system of creators and consumers with
                  equality and efficiency at its center.
                </p>
              </div>
              <img
                alt="Mars Production"
                className="about-image"
                src={About1}
              />
            </div>
            <div className="about-leftside-1">
              <div>
                <p className="p1">Our Mission</p>
                <p className="p2 p-desc">
                  To give voice to every individual with a story worth telling
                  the world by innovating in their respective craft.
                </p>
              </div>
              <img
                alt="Mars Production"
                className="about-image about-image-2"
                src={About2}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
