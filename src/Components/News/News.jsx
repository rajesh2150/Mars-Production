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
      const resp = await fetch("http://localhost:1337/api/events?populate=*");
      const res = await resp.json();
      console.log(res.data);
      setEvents(res.data);
      setBlogs(res.data)
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
              // src="https://s3-alpha-sig.figma.com/img/4a84/3fc5/2f6921a34dc8ad3aaeacc0206b9ea944?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lf0fSyqeyfKKzpKWIKg-ZNBF8uCMIgmBVLZCHXfjLTYaMaJhY6mPjbXOxGpLiXExev4CN5f4xiuvm0yua70eswbtTjVPOoRK-0LNWRMCR7-q6hSkDgFkzoL7Rnhbg3YDhrJ7nk54fi5zzDdl8A5ONOov1hWQ3p6qDcwDnxclgjvcZbrjklLPf-e95Qrr4KcSyfryd7-DjaUQCjyoWKMQ8whSgOf9uhuYahE1xymi6--moT9UX4VBKR1W500nTREF0jhkqJwgl0Z5UEC4559HmBUkLwaMLoiFL9gluJ3AFcyIlF~XCuolJbsRnwwgn3W-xnw9dSWnRJiG6JJKaO--Mw__"
              alt="Upcoming Movie Poster"
            />
          </div>
          <div className="upcoming-details">
            {activeTab === "latest" ? (
              <div className="latest-content">
                {
                  blogs.map((blog,ind)=>{
                    const blogUrl = `http://localhost:1337${blog.attributes.image.data.attributes.url}`

                    return(<>
                    <div className="latest-item">
                  <div className="blog-item">
                    <img
                      className="blog-image"
                      src={blogUrl}
                      alt="Blog 1"
                    />
                    <p className="blog-title">{blog.attributes?.description}</p>
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
                    const blogUrl = `http://localhost:1337${event.attributes.image.data.attributes.url}`

                    return(<>
                    <div className="latest-item">
                  <div className="blog-item">
                    <img
                      className="blog-image"
                      src={blogUrl}
                      // src="https://s3-alpha-sig.figma.com/img/89ac/b776/e821f6d1384c604e34ba62332bec60a8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KVlCJUmnnfH-VVN4TtYBxbl8H-n8JNPEwYeqpj5qt-s7prgY-ZHbQOnoHwc9AX4rM55Xw7p2hfRg~5bnCnuy2moVJqkLM2s5AFyU1aL19ZNKG0CCa9l2TAdTxpsPIVZ8FEE0bjNTh6zf1m06t-DGNkq7SS4WtMP26JL6Kg4slomS58d~vT7reYaHpyBDu9osDxjtofIf9r7B6-HfqWiCeoqiC5vIHvL7MexyRFQtjgfg4DGjNe0Q56miyJqkuzf2nlt5YPH6FXdaYfa0ckqYv2z1f4jo9I8ObRHG0FC39XAp5PLHJBlp9uAcEt23pvqtcm454G3Hehxyx~UNlAO4Lw__"
                      alt="Blog 1"
                    />
                    <p className="blog-title">{event.attributes?.description}</p>
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
         
            {previousNews.map((news, ind) => (
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
