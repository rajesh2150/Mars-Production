import React, { useState } from "react";
import "./Upcoming.css";

const Upcoming = () => {
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <>
      <p className="upcoming-title">UP COMING</p>
      <div className="upcoming-wrapper">
        <div className="upcoming-image">
          <img
            className="poster"
            src="https://s3-alpha-sig.figma.com/img/f8e3/5698/32a312b4b5dc38196a8b91fef45106b8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oVJrOvzRBeac2J4Ocx1rhvn14jpWoel9ph~2nYVOc7dSSXPd0zsKSzOWsxUr76c1JBmvu4txBlY3qlOi9zFrxouDI9K1Uj3hjq1hjfqFtOHWF7Jo8OL584hu~IMYaSkLWs2nRW1tY08KUOyte9hA8X4P75ST26KUpclpH12WcLPB6HZmm177E1q00phXT9R~clbXX~0W1EeisUqNw-ndNOtKr4cUGvvkrOwZaqznZti9biLq~eXZOm3xyx1LAmY~A4AdsU~BgZVQhpRUWeXHLRBjcCRmUOPQRyaEfFiR-LtaJWmiHyjV0JKlXwLXi3vdJzWWOcr7iwp5xRuAQQToWA__"
            alt="Upcoming Movie Poster"
          />
           <p>Streaming on Aevumjagut</p>
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
          {activeTab === "latest" ? (
            <div className="latest-content">
              <div className="latest-item">
                <div className="blog-item">
                  <img
                    className="blog-image"
                    src="https://via.placeholder.com/150"
                    alt="Blog 1"
                  />
                  <p className="blog-title">
                    1 Rupee Movie AevumJagat Team Prasad Rao and Dinesh Narra
                    Exclusive Interview
                  </p>
                </div>
              </div>
              <div className="latest-item">
                <div className="blog-item">
                  <img
                    className="blog-image"
                    src="https://via.placeholder.com/150"
                    alt="Blog 1"
                  />
                  <p className="blog-title">
                    1 Rupee Movie AevumJagat Team Prasad Rao and Dinesh Narra
                    Exclusive Interview
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="blog-list">
              <div className="blog-item">
                <img
                  className="blog-image"
                  src="https://via.placeholder.com/150"
                  alt="Blog 1"
                />
                <p className="blog-title">
                  1 Rupee Movie AevumJagat Team Prasad Rao and Dinesh Narra
                  Exclusive Interview
                </p>
              </div>
              <div className="blog-item">
                <img
                  className="blog-image"
                  src="https://via.placeholder.com/150"
                  alt="Blog 2"
                />
                <p className="blog-title">
                  AevumJagat Movie Director Dinesh Narra Exclusive Interview_SP
                  Interview
                </p>
              </div>
              <div className="blog-item">
                <img
                  className="blog-image"
                  src="https://via.placeholder.com/150"
                  alt="Blog 3"
                />
                <p className="blog-title">
                  AevumJagat Movie Interview_YOU & ME_Actress Inaya
                  Sultana,Kiran Geya_Lovle Entertainment
                </p>
              </div>
              <div className="blog-item">
                <img
                  className="blog-image"
                  src="https://via.placeholder.com/150"
                  alt="Blog 4"
                />
                <p className="blog-title">
                  Prakruti Vanam Prasad Great Words About AevumJagat Movie
                </p>
              </div>
              <div className="blog-item">
                <img
                  className="blog-image"
                  src="https://via.placeholder.com/150"
                  alt="Blog 5"
                />
                <p className="blog-title">
                  AevumJagat Movie Team Exclusive Interview_Inaya
                  Sultana_SocialPost Interviews
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Upcoming;
