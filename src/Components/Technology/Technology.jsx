import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import "./technology.css";

const Technology = () => {
  const location = useLocation();

  useEffect(() => {
    const projectWrapper = document.querySelector(".project-wrapper");
    if (projectWrapper) {
      projectWrapper.classList.remove("loaded");
      const timeoutId = setTimeout(() => {
        projectWrapper.classList.add("loaded");
      }, 50);
      return () => clearTimeout(timeoutId); // Cleanup on unmount or before re-run
    }
  }, [location]);

  //fetch data
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        "https://admin.marsmovieproductions.com/api/technologies?populate=*"
      );
      const res = await resp.json();
      console.log(res.data);
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="project-wrapper technology-wrapper">
        <div className="main-div-tech tech-main">
          {data?.map((tech, ind) => {
            const { title, description, image } = tech.attributes;
            const imageUrl = `https://admin.marsmovieproductions.com/${image?.data[0]?.attributes?.url}`;
            return (
              <div key={ind} className="sub-div">
                <div className="text-content">
                  <p className="p1 tech-p1-content">{title}</p>
                  <p className="p2">{description}</p>
                </div>
                <div className="image-content">
                  <img className="tech-image" src={imageUrl} alt={title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Technology;
