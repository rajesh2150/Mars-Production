import React, { useEffect, useState } from "react";
import "./Upcoming.css";
import Banner from "../../assests/Home/1353248101_Banner 1.png"
const Upcoming = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const [latest,setLatest]=useState([])
  const [blogs,setBlogs] =useState([])
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("http://localhost:1337/api/latests?populate=*");
      const resp2 = await fetch("http://localhost:1337/api/blogs?populate=*");
      const res = await resp.json();
      const res2 = await resp2.json();
      console.log(res.data);
      console.log(res2.data);
      setLatest(res.data);
      setBlogs(res2.data)
      
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="upcoming-hero">
        <p className="upcoming-title">UP COMING</p>
        <div className="options">
          <p
            className={`tab ${activeTab === "latest" ? "active" : ""}`}
            onClick={() => setActiveTab("latest")}>
            Latest
          </p>
          <p
            className={`tab ${activeTab === "blogs" ? "active" : ""}`}
            onClick={() => setActiveTab("blogs")}>
            Blogs
          </p>
        </div>
        <div></div>
      </div>

      <div className="upcoming-wrapper">
        <div className="upcoming-image">
          <p className=" streaming-p">Streaming on Aevumjagut</p>

          <img
            className="poster"
            src={Banner}
            alt="Upcoming Movie Poster"
          />
          <div className="visit-now">
            <a
              href="https://www.aevumjagut.com"
              target="_blank"
              rel="noopener noreferrer">
              Visit Now →
            </a>
          </div>
        </div>
        <div className="upcoming-details">
          {activeTab === "latest" ? (
            <div className="latest-content">
             
             {latest.map((latest,ind)=>{
              const imgurl = `http://localhost:1337${latest.attributes.image.data.attributes.url}`

              return(
                <>
                <div className="latest-item">
                <div className="blog-item">
                  <img
                    className="blog-image"
                    src={imgurl}
                    alt={latest.attributes.title}
                  />
                  <p className="blog-title">{latest?.attributes.description}</p>
                </div>
              </div>
                </>
              )
             })}
            </div>
          ) : (
            <div className="blog-list">

              {blogs.map((blog,ind)=>{

                const imgUrl = `http://localhost:1337${blog?.attributes.image.data.attributes.url}`;
                return(
                  <>
                  <div className="blog-item blog-bg" key={ind}>
                <img
                  className="blog-image"
                  src={imgUrl}

                  alt="Blog 1"
                />
                <p className="blog-title">
                 {blog.attributes?.title}
                </p>
              </div>
                  </>
                )
              })}
              
              

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Upcoming;
