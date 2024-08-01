import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./project.css";
import Footer from "../common/Footer";

const Project = () => {
  const location = useLocation();

  useEffect(() => {
    const projectWrapper = document.querySelector(".project-wrapper");
    if (projectWrapper) {
      projectWrapper.classList.remove("loaded");
      setTimeout(() => {
        projectWrapper.classList.add("loaded");
      }, 0);
    }
  }, [location]);

  const [completed, setCompleted] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        "http://localhost:1337/api/completd-projects?populate=*"
      );
      const resp2 = await fetch(
        "http://localhost:1337/api/ongoing-projects?populate=*"
      );
      const res = await resp.json();
      const res2 = await resp2.json();
      console.log(res.data);
      setCompleted(res.data);
      setOngoing(res2.data);
      console.log(res2.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="project-wrapper fade-in">
        <p className="p1">Completed</p>
        {completed.map((comp, ind) => (
          <>
            <div className="main-div project" key={comp.id}>
              <div className="project-total-desc">
                <p className="p1" style={{ color: "white" }}>
                  {comp.attributes?.title}
                </p>
                <p className="p2 project-desc">
                  {comp.attributes?.description}
                </p>
              </div>
              <img className="project-image" alt="Project" />
            </div>
          </>
        ))}

        <p className="p1">Latest Movie Teaser</p>
        <div className="ongoing-main-div">
          <img
            alt="Project Video"
            className="project-video"
            src="https://s3-alpha-sig.figma.com/img/51d2/db2d/e1a51a57fa9dc6fcd1178c263c3b627d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1BkrOvUbsDg1IEIGAM2J9EF5SarNIu5UHtkMw~Fv1bBKLTknVDSP0LiTLoKquaT5jGUIA9Z0JRlFTVQT9VfPCD1bMh00kp9NXhpOUQha3bZB9~zCX4ARItJVCZ8yd30PtHjQbSJsuKYMSm-KFASsIZ1RKcQQTIjGwzPpHuxUJefATQMZv0VWPJwSVsM20cFDXNobfrwrnv5l-UEM-3eOiYeB375Kb4xUYm-3s8h5peKLiS5SgVE2oBR3zmFbtvi95Wy9UfS1fL~D4xyYaQMztXcEFoGSR1d3qoqauK6PtTYAmI~tPmA0j8gOvt568CPObK2UDGNwTkwzsVyVWlvbA__"
          />
        </div>
        <p className="p1 ongoing-p1">Ongoing</p>
        {ongoing.map((ongo, ind) => {
          const imageUrl = `http://localhost:1337${ongo?.attributes.image.data[0].attributes.url}`;
          

          return (
            <>
              <div className="">
                <div className="project-ongoing ongoing-main">
                  <div className="">
                    <p
                      className="p1 ongoing-p1-title"
                      style={{ color: "white" }}>
                      {ongo?.attributes?.title}
                    </p>
                    <p className="p2 ongoing-desc-p2">
                      {ongo?.attributes?.description}
                    </p>
                  </div>
                  <img
                    className="ongoing-image"
                    src={imageUrl}
                    alt={`${ongo?.attributes?.title}`}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Project;
