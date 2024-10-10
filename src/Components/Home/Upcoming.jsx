import React, { useEffect, useState } from "react";
import "./Upcoming.css";
import Banner from "../../assests/Home/1353248101_Banner 1.png";
import { Link } from "react-router-dom";
import { color } from "three/webgpu";
const Upcoming = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const [latest, setLatest] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        "https://admin.marsmovieproductions.com/api/latests?populate=*"
      );
      const resp2 = await fetch(
        "https://admin.marsmovieproductions.com/api/blogs?populate=*"
      );
      const resp3 = await fetch(
        "https://admin.marsmovieproductions.com/api/upcomings?populate=*"
      );
      const res = await resp.json();
      const res2 = await resp2.json();
      const res3 = await resp3.json();
      console.log(res.data);
      console.log(
        "upcoming is ",
        res3.data[0].attributes.image.data[0].attributes.url
      );
      setLatest(res.data);
      setBlogs(res2.data);
      setUpcoming(res3.data);
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
            onClick={() => setActiveTab("latest")}
          >
            Latest
          </p>
          <p
            className={`tab ${activeTab === "blogs" ? "active" : ""}`}
            onClick={() => setActiveTab("blogs")}
          >
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
            src={`https://admin.marsmovieproductions.com${upcoming[0]?.attributes?.image?.data[0]?.attributes?.url}`}

            alt="Upcoming Movie Poster"
          />
          <div className="visit-now">
            <a
              href="https://www.aevumjagat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Now →
            </a>
          </div>
        </div>
        <div className="upcoming-details">
          {activeTab === "latest" ? (
            <div className="latest-content">
              {latest?.map((latest, ind) => {
                const imgurl = `https://admin.marsmovieproductions.com${latest?.attributes?.image?.data[0]?.attributes?.url}`;
                const url = latest?.attributes?.Link;

                // [0].attributes.image.data[0].attributes.url

                return (
                  <>
                    <div className="latest-item">
                      <div className="blog-item">
                        <a href={url} target="_blank">
                          <img
                            className="blog-image"
                            src={imgurl}
                            alt={latest?.attributes?.title}
                          />
                        </a>
                        <p className="blog-title">
                          {latest?.attributes?.title}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <div className="blog-list">
              {blogs.map((blog, ind) => {
                const imgUrl = `https://admin.marsmovieproductions.com${blog?.attributes.image.data[0].attributes.url}`;
                const url = blog?.attributes?.Link;
                // const imgurl = `https://admin.marsmovieproductions.com/${latest?.attributes?.image?.data[0]?.attributes?.url}`

                return (
                  <>
                    <div className="blog-item blog-bg" key={ind}>
                      <a href={url} target="_blank">
                        <img className="blog-image" src={imgUrl} alt="Blog 1" />
                      </a>
                      <p className="blog-title">{blog.attributes?.title}</p>
                    </div>
                  </>
                );
              })}

              <Link
                to="blog"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "20px",
                  marginTop: "1rem",
                }}
              >
                More &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Upcoming;
