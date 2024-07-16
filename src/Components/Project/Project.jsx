import React from "react";
import "./project.css";
import Footer from "../common/Footer";
const Project = () => {
  
  return (
    <>
      <div className="project-wrapper">
        <p className="p1">Completed</p>
        <div className="main-div project">
          <div className="project-total-desc">
            <p className="p1" style={{ color: "white" }}>
              AevumJagat
            </p>
            <p className="p2 project-desc">
              AevumJagat is a story of a fictional village named Bhuvanapuram,
              located in Andhra Pradesh. Kamal and Ramabantu are two
              protagonists residing in the village. How they and the rest of the
              villagers made that village, a Heaven on Earth forms the story. 
              Though its a story of a village, inner lying concept can be
              carefully extrapolated to the whole world to make this whole world
              a Heaven like place.
            </p>
          </div>
          {/* <div> */}
            <img className="project-image"
              // style={{ backgroundColor: "lightgray" }}
              // height={300}
              // width={500}
            />
          {/* </div> */}
        </div>
        <p className="p1">Latest Movie Teaser</p>
        <div className="main-div">
          <img
            className="project-video"
            src="https://s3-alpha-sig.figma.com/img/51d2/db2d/e1a51a57fa9dc6fcd1178c263c3b627d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1BkrOvUbsDg1IEIGAM2J9EF5SarNIu5UHtkMw~Fv1bBKLTknVDSP0LiTLoKquaT5jGUIA9Z0JRlFTVQT9VfPCD1bMh00kp9NXhpOUQha3bZB9~zCX4ARItJVCZ8yd30PtHjQbSJsuKYMSm-KFASsIZ1RKcQQTIjGwzPpHuxUJefATQMZv0VWPJwSVsM20cFDXNobfrwrnv5l-UEM-3eOiYeB375Kb4xUYm-3s8h5peKLiS5SgVE2oBR3zmFbtvi95Wy9UfS1fL~D4xyYaQMztXcEFoGSR1d3qoqauK6PtTYAmI~tPmA0j8gOvt568CPObK2UDGNwTkwzsVyVWlvbA__"
          />
        </div>
        <p className="p1 ongoing-p1" >
          Ongoing
        </p>
        <div className=" ">
          <div className="project-ongoing ongoing-main">
            <div className="">
              <p className="p1 ongoing-p1-title" style={{ color: "white" }}>
                Mounam by Taanvi Talkies
              </p>
              <p className="p2 ongoing-desc-p2">More details will be updated soon.</p>
            </div>
            {/* <div> */}
              <img
                className="ongoing-image"
                src="https://s3-alpha-sig.figma.com/img/69fb/4f31/8698bb94a30fd303ec0fc8a4f6fb36cd?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ciNrGlcrRK3YwJwVQz7lwYzAjkkB7t~ETMzYDMCpG0FmYKGGF2Rfi3ZArhoWuYqvwMEO~TAFcYwz~~Rujkd4TtGuWyhMWRFh-M8zqASpSxN44vq4pnRyOvBWaM9ywbTz-mFZd8SIMFR5VQ8noNeZIRWKurwPVlHSCyUz7mrbfdACP0kunJFDenIlD84L9UgkoAFwV8Vekt-mJhSzCLFaKWvDMQn1Vk7S6pcNFQuNEFlJUf2kZazm1cuyNE9~uwWtP2V-y4aajyS87UAOt0SiDa36R9Mi6RW-uXEwqB8cff3wZA06R8P6pIN5xOA~xii8YjOPNc8Wfgm-oGdLVktZbA__"
              />
            {/* </div> */}
          </div>
          
        </div>
        
      </div>
      <Footer />
      
    </>
    
  );
  
};

export default Project;
