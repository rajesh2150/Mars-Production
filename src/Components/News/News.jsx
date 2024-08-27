import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import "./News.css";
import { useLocation } from "react-router-dom";
import NewsImg from "../../assests/News/News.png"
const News = () => {
  const [activeTab, setActiveTab] = useState("latest");

  // const [activeTab, setActiveTab] = useState("latest");
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
    const projectWrapper = document.querySelector('.news-hero-wrapper');
    if (projectWrapper) {
      projectWrapper.classList.remove('loaded');
      const timeoutId = setTimeout(() => {
        projectWrapper.classList.add('loaded');
      }, 50);
      return () => clearTimeout(timeoutId); // Cleanup on unmount or before re-run
    }
  }, [location]);

  const [events,setEvents]=useState([])
  const [blogs,setBlogs]=useState([])
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("http://13.201.135.134:1337/api/events?populate=*");
      const resp2 = await fetch("http://13.201.135.134:1337/api/news-blogs?populate=*");
      const res = await resp.json();
      const res2 = await resp2.json();
      console.log(res.data);
      setEvents(res.data);
      setBlogs(res2.data)
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
          <a className="news-link">
            {" "}
            our
            <br />
            YouTube channel.{" "}
          </a>
        </p>
        <div className="upcoming-hero">
          <div></div>
          <p className="upcoming-title"></p>
          <div className="options">
            <p
              className={`tab ${activeTab === "latest" ? "active" : ""}`}
              onClick={() => setActiveTab("latest")}>
              Blogs
            </p>
            <p
              className={`tab ${activeTab === "blogs" ? "active" : ""}`}
              onClick={() => setActiveTab("blogs")}>
              Events
            </p>
          </div>
          <div></div>
        </div>

        <div className="upcoming-wrapper news-wrapper">
          <div className="upcoming-image news-image">
            <img
              className="poster news-poster"
              src={NewsImg}
              alt="Upcoming Movie Poster"
            />
          </div>
          <div className="upcoming-details">
            {activeTab === "latest" ? (
              <div className="latest-content">
                {
                  blogs?.map((blog,ind)=>{
                    const blogUrl = `http://13.201.135.134:1337${blog?.attributes?.image?.data[0]?.attributes?.url}`
                    // [0].attributes.image.data[0].attributes.url

                    return(<>
                    <div className="latest-item">
                  <div className="blog-item">
                    <img
                      className="blog-image"
                      src={blogUrl}
                      alt="Blog 1"
                    />
                    <p className="blog-title">{blog.attributes?.title}</p>
                  </div>
                </div>
                    </>)
                  })
                }
                
              </div>
            ) : (
              <div className="blog-list">
                                {
                  events.map((event,ind)=>{
                    const blogUrl = `http://13.201.135.134:1337${event?.attributes?.image?.data[0]?.attributes?.url}`

                    return(<>
                    <div className="latest-item">
                  <div className="blog-item">
                    <img
                      className="blog-image"
                      src={blogUrl}
                      alt="Blog 1"
                    />
                    <p className="blog-title">{event.attributes?.title}</p>
                  </div>
                </div>
                    </>)
                  })
                }
               
          
              </div>
            )}
          </div>
        </div>

        <p className="p1 previou-p">Previous News</p>
        <div className="previous-news-wrapper">
          <div className="p1 scroll-btn">prev 
          </div>
         
            {previousNews?.map((news, ind) => (
              <> 
                <div key={news.id} className="prev-div"> 
                  <img className="prev-news-image" src={news.url} alt="News"/>
                  <p className="p2">{news.month}</p>
                </div>
              </>
            ))}

          <div className="p1 scroll-btn ">next</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
