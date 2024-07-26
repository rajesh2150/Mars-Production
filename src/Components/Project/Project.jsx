import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './project.css';
import Footer from '../common/Footer';

const Project = () => {
  const location = useLocation();

  useEffect(() => {
    const projectWrapper = document.querySelector('.project-wrapper');
    if (projectWrapper) {
      projectWrapper.classList.remove('loaded');
      setTimeout(() => {
        projectWrapper.classList.add('loaded');
      }, 0);
    }
  }, [location]);

  return (
    <>
      <div className="project-wrapper fade-in">
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
          <img className="project-image" alt="Project" />
        </div>
        <p className="p1">Latest Movie Teaser</p>
        <div className="ongoing-main-div">
          <img
            alt="Project Video"
            className="project-video"
            src="https://s3-alpha-sig.figma.com/img/51d2/db2d/e1a51a57fa9dc6fcd1178c263c3b627d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1BkrOvUbsDg1IEIGAM2J9EF5SarNIu5UHtkMw~Fv1bBKLTknVDSP0LiTLoKquaT5jGUIA9Z0JRlFTVQT9VfPCD1bMh00kp9NXhpOUQha3bZB9~zCX4ARItJVCZ8yd30PtHjQbSJsuKYMSm-KFASsIZ1RKcQQTIjGwzPpHuxUJefATQMZv0VWPJwSVsM20cFDXNobfrwrnv5l-UEM-3eOiYeB375Kb4xUYm-3s8h5peKLiS5SgVE2oBR3zmFbtvi95Wy9UfS1fL~D4xyYaQMztXcEFoGSR1d3qoqauK6PtTYAmI~tPmA0j8gOvt568CPObK2UDGNwTkwzsVyVWlvbA__"
          />
        </div>
        <p className="p1 ongoing-p1">Ongoing</p>
        <div className="">
          <div className="project-ongoing ongoing-main">
            <div className="">
              <p className="p1 ongoing-p1-title" style={{ color: "white" }}>
                Mounam by Taanvi Talkies
              </p>
              <p className="p2 ongoing-desc-p2">
                This is a movie which speaks about Love. What exactly is love,
                who will fall in love and what is its real meaning forms the
                core of the movie. 
                Director is touching upon various aspects like
                real love vs artificial love, scope of love, challenges one can
                face when they fall in love etc.
              </p>
            </div>
            <img
              className="ongoing-image"
              src="https://s3-alpha-sig.figma.com/img/51d2/db2d/e1a51a57fa9dc6fcd1178c263c3b627d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1BkrOvUbsDg1IEIGAM2J9EF5SarNIu5UHtkMw~Fv1bBKLTknVDSP0LiTLoKquaT5jGUIA9Z0JRlFTVQT9VfPCD1bMh00kp9NXhpOUQha3bZB9~zCX4ARItJVCZ8yd30PtHjQbSJsuKYMSm-KFASsIZ1RKcQQTIjGwzPpHuxUJefATQMZv0VWPJwSVsM20cFDXNobfrwrnv5l-UEM-3eOiYeB375Kb4xUYm-3s8h5peKLiS5SgVE2oBR3zmFbtvi95Wy9UfS1fL~D4xyYaQMztXcEFoGSR1d3qoqauK6PtTYAmI~tPmA0j8gOvt568CPObK2UDGNwTkwzsVyVWlvbA__"
              alt="Ongoing Project"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
