import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import "./News.css";
import { useLocation } from "react-router-dom";
import NewsImg from "../../assests/News/News.png";
const News = () => {
  const [activeTab, setActiveTab] = useState("latest");


  const [prevNews, setPrevNews] = useState([]);
  const previousNews = [
    {
      id: 1,
      month: "July 2020",
      url: "",
    },
    {
      id: 2,
      month: "August 2020",
      url: "",
    },
    {
      id: 3,
      month: "September 2020",
      url: "",
    },
    {
      id: 4,
      month: "October 2020",
      url: "",
    },
    {
      id: 5,
      month: "November 2020",
      url: "",
    },
  ];


  const location = useLocation();

  useEffect(() => {
    const projectWrapper = document.querySelector(".news-hero-wrapper");
    if (projectWrapper) {
      projectWrapper.classList.remove("loaded");
      const timeoutId = setTimeout(() => {
        projectWrapper.classList.add("loaded");
      }, 50);
      return () => clearTimeout(timeoutId); // Cleanup on unmount or before re-run
    }
  }, [location]);

  const [events, setEvents] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        "https://admin.marsmovieproductions.com/api/events?populate=*"
      );
      const resp2 = await fetch(
        "https://admin.marsmovieproductions.com/api/news-blogs?populate=*"
      );
      const resp3 = await fetch(
        "https://admin.marsmovieproductions.com/api/news-letters"
      );

      const res = await resp.json();
      const res2 = await resp2.json();
      const res3 = await resp3.json();
      console.log("prev", res3.data);
      setEvents(res.data);
      setBlogs(res2.data);
      setPrevNews(res3.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="project-wrapper news-hero-wrapper ">
        <p className="p1  news-p">News letter</p>
        <p className="p2 news-p2">This is our latest newsletter.</p>
        <p className="p2 news-p2">
          To view all our previous newsletters, go to
          <a
            className="news-link"
            href="https://www.youtube.com/@MarsProductionsPvtLtd"
          >
            {" "}
            <p className="news-link-text"> our YouTube channel.</p>
          </a>
        </p>
        <div className="upcoming-hero">
          <div></div>
          <p className="upcoming-title"></p>
          <div className="options">
            <p
              className={`tab ${activeTab === "latest" ? "active" : ""}`}
              onClick={() => setActiveTab("latest")}
            >
              Blogs
            </p>
            <p
              className={`tab ${activeTab === "blogs" ? "active" : ""}`}
              onClick={() => setActiveTab("blogs")}
            >
              Events
            </p>
          </div>
          <div></div>
        </div>

        <div className="upcoming-wrapper news-wrapper">
          <div className="upcoming-image news-image">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZWlCUxnBkhw?si=SGxN3xrmlhJA1c2W"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="upcoming-details">
            {activeTab === "latest" ? (
              <div className="latest-content">
                {blogs?.map((blog, ind) => {
                  const blogUrl = `https://admin.marsmovieproductions.com${blog?.attributes?.image?.data[0]?.attributes?.url}`;
                  // [0].attributes.image.data[0].attributes.url
                  const url = blog?.attributes?.Link;

                  return (
                    <>
                      <div className="latest-item">
                        <div className="blog-item">
                          <a href={url} target="_blank">
                            <img
                              className="blog-image-1"
                              src={blogUrl}
                              alt="Blog 1"
                            />
                          </a>
                          <p className="blog-title">{blog.attributes?.title}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <div className="blog-list event-list">
                {events.map((event, ind) => {
                  const blogUrl = `https://admin.marsmovieproductions.com${event?.attributes?.image?.data[0]?.attributes?.url}`;
                  const url = event?.attributes?.Link;

                  return (
                    <>
                      <div className="latest-item">
                        <div className="blog-item">
                          <a href={url} target="_blank">
                            <img
                              className="blog-image-1"
                              src={blogUrl}
                              alt="Blog 1"
                            />
                          </a>

                          <p className="blog-title">
                            {event.attributes?.title}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <p className="p1 previou-p">Previous News</p>
        <div className="previous-news-wrapper">
          <div className="p1 scroll-btn">&lt;</div>

          {prevNews?.map((news, ind) => (
            <>
              <div key={news.id} className="prev-div">

                <a
                  className="news-month"
                  target="_blank"
                  href={news?.attributes?.Link}
                >
                  <div
                    style={{
                      height: "150px",
                      width: "150px",
                      backgroundColor: "#D3D3D3",
                    }}
                  >
                    <img
                      className="prev-news-image"
                      src={
                        "https://www.pngall.com/wp-content/uploads/9/Google-Drive-Logo-PNG-HD-Image.png"
                      }
                    />

                  </div>
                  <br /> {news?.attributes?.month}
                </a>
                {/* <p className="p2">{news.month}</p> */}
              </div>
            </>
          ))}

          <div className="p1 scroll-btn ">&gt;</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
