import React, { useState } from "react";
import Footer from "../common/Footer";
import "./News.css";
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
              src="https://s3-alpha-sig.figma.com/img/4a84/3fc5/2f6921a34dc8ad3aaeacc0206b9ea944?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lf0fSyqeyfKKzpKWIKg-ZNBF8uCMIgmBVLZCHXfjLTYaMaJhY6mPjbXOxGpLiXExev4CN5f4xiuvm0yua70eswbtTjVPOoRK-0LNWRMCR7-q6hSkDgFkzoL7Rnhbg3YDhrJ7nk54fi5zzDdl8A5ONOov1hWQ3p6qDcwDnxclgjvcZbrjklLPf-e95Qrr4KcSyfryd7-DjaUQCjyoWKMQ8whSgOf9uhuYahE1xymi6--moT9UX4VBKR1W500nTREF0jhkqJwgl0Z5UEC4559HmBUkLwaMLoiFL9gluJ3AFcyIlF~XCuolJbsRnwwgn3W-xnw9dSWnRJiG6JJKaO--Mw__"
              alt="Upcoming Movie Poster"
            />
          </div>
          <div className="upcoming-details">
            {activeTab === "latest" ? (
              <div className="latest-content">
                <div className="latest-item">
                  <div className="blog-item">
                    <img
                      className="blog-image"
                      src="https://s3-alpha-sig.figma.com/img/89ac/b776/e821f6d1384c604e34ba62332bec60a8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KVlCJUmnnfH-VVN4TtYBxbl8H-n8JNPEwYeqpj5qt-s7prgY-ZHbQOnoHwc9AX4rM55Xw7p2hfRg~5bnCnuy2moVJqkLM2s5AFyU1aL19ZNKG0CCa9l2TAdTxpsPIVZ8FEE0bjNTh6zf1m06t-DGNkq7SS4WtMP26JL6Kg4slomS58d~vT7reYaHpyBDu9osDxjtofIf9r7B6-HfqWiCeoqiC5vIHvL7MexyRFQtjgfg4DGjNe0Q56miyJqkuzf2nlt5YPH6FXdaYfa0ckqYv2z1f4jo9I8ObRHG0FC39XAp5PLHJBlp9uAcEt23pvqtcm454G3Hehxyx~UNlAO4Lw__"
                      alt="Blog 1"
                    />
                    <p className="blog-title">AevumJagat Full Movie 2024</p>
                  </div>
                </div>
                <div className="latest-item">
                  <div className="blog-item">
                    <img
                      className="blog-image"
                      src="https://s3-alpha-sig.figma.com/img/69fb/4f31/8698bb94a30fd303ec0fc8a4f6fb36cd?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ciNrGlcrRK3YwJwVQz7lwYzAjkkB7t~ETMzYDMCpG0FmYKGGF2Rfi3ZArhoWuYqvwMEO~TAFcYwz~~Rujkd4TtGuWyhMWRFh-M8zqASpSxN44vq4pnRyOvBWaM9ywbTz-mFZd8SIMFR5VQ8noNeZIRWKurwPVlHSCyUz7mrbfdACP0kunJFDenIlD84L9UgkoAFwV8Vekt-mJhSzCLFaKWvDMQn1Vk7S6pcNFQuNEFlJUf2kZazm1cuyNE9~uwWtP2V-y4aajyS87UAOt0SiDa36R9Mi6RW-uXEwqB8cff3wZA06R8P6pIN5xOA~xii8YjOPNc8Wfgm-oGdLVktZbA__"
                      alt="Blog 1"
                    />
                    <p className="blog-title">Mounam</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="blog-list">
                <div className="blog-item blog-bg">
                  <img
                    className="blog-image"
                    src="https://s3-alpha-sig.figma.com/img/0e5c/a625/da6cfa4c6966d6419219866f254c3371?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NOdTY-nf~cY~wHRIcaYQ4cBzWaUNGxDaIhGIlm-Jd8yJsU0hpuS-oxO6hkDVnrlpotgE8CJGo37xl1Pdnc5ZMYdWoTBBgYpgOF7TgIZX5CLAcr6xrWSCh8sEwFzMYhTxD4FGKTUFsR-Jtn5Zm4uQgzVpg~JSiYCgHngD8tk~3G~bGCKriO4aO0-9bBOjtG-3In4la0T7fjYIfU9QM6Qsmq2KG272~EBcmvwrNfRTuOGKLwpIfVkWpP9BxxBPYSwjGs1iZN4O6mNDmEkV1PxITE2pVyHwgAafz87OybRfKs2V7u3zAtAy~jGaOU1HE~VhR8nDVggwa0IXfCU6ND3~ow__"
                    alt="Blog 1"
                  />
                  <p className="blog-title">
                    1 Rupee Movie AevumJagat Team Prasad Rao and Dinesh Narra
                    Exclusive Interview
                  </p>
                </div>
                <div className="blog-item blog-bg">
                  <img
                    className="blog-image"
                    src="https://s3-alpha-sig.figma.com/img/b3c9/ba36/baa9f872ea04ac5dac3a61a20beccd1b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtfYwXyk8x0c02YhqEeXCATGfLer4l6K6obp5eCGw8dzKbU~s~rbGZ-Xy5ZXYbV6QdOVv2vT11ONkz0F4tSEyfBNVe-lP9j5yBq6KM2IMneKznLGWlZxD3ssPdWkQNHB8iWwZ0aakh9Td2T5aNnKjRcBuhNmp0uHmQcSGlrWMg1-0Unoi6f~embNDTcfkYS0bfuAeB6wdU~Yh240BLyupcUH2d~z3kZ3wUnXHRhIeBMxklfR~XiKaKk1PSMwZMYrnfbKvAA9ZjrmFi0kK4dX1z~PvutDcohbCHxiMSKk28nTFuQ87npkCfdZ1TaMiKf3~fsRc5KeMPd9mhdCxpMACA__"
                    alt="Blog 2"
                  />
                  <p className="blog-title">
                    Prakruti Vanam Prasad Great Words About AevumJagat Movie
                  </p>
                </div>
                <div className="blog-item blog-bg">
                  <img
                    className="blog-image"
                    src="https://s3-alpha-sig.figma.com/img/fb1c/bd82/6f1754ffb1fac182c880c2332884a33d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiLhDi37dBYSXpwNvHZvQtFE8UEAoiHtIDrAa02AusHOwnfBfvm1beZO0QxHS5IkZnOMAkMAtp612RaXtCa6icru-5IL9Mzl1sgRKK08REaB1rVRWLmAk~IK6WZtA6C8HBpgJMrmxC7dDP4he-GFU3M1lgjxSAaw5ao6WQQCDxuLir-d~Y3hiy-6sTtU0jnA-Lssd7Is6j9J2UNI9-1wJAmfQEFBVl3CCMD7-5GduL4a82R2dOiINGCiajD9x1yvRN12XMds7f8QMVtSuoZuiDjFOuA5Goq9OLUVMd~0vw5CsheKRJlvLhVad4SNmcoQ25NrUfmrbjPIpM87476FsQ__"
                    alt="Blog 3"
                  />
                  <p className="blog-title">
                    AevumJagat Movie Team Exclusive Interview_Inaya
                    Sulthana_SocialPost Interviews
                  </p>
                </div>
                <div className="blog-item blog-bg">
                  <img
                    className="blog-image"
                    src="https://s3-alpha-sig.figma.com/img/388b/5be1/15648be612933b40899c5c9ad6d35ee9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAGItcEOHlCPdPP6Hq62iR200brEy7HUnq14GxSjOpAcT3U5d9TX0Kk14zbh4lZSUkhrF-KOZRwAcZtTP51T0H53u3J0dgkxv7A5jIJmZ49RKaA-OVUXHFlIRPoV-UThvs6t7bRY4nHoqIXx4NLNxBGlDsqqBV8o-GTHxRXgJ0FRzVNoOWXXdm-MAdv8GJ5PK2x6lLtmZEDzAbXz4aVTY0rFvG2ftIVu1XimHBAFuacJNfbP7Zkbt8ICT4z6jBunOJyko8nC9Kbo0u-r7u4uVOVzdPI4VAcUvUXeP3324puQxlIWNisYtxMxeEWMmXs4JxFa1xrvxxgslWHYPvHPJg__"
                    alt="Blog 4"
                  />
                  <p className="blog-title">
                    Prakruti Vanam Prasad Great Words About AevumJagat Movie
                  </p>
                </div>
                <div className="blog-item blog-bg">
                  <img
                    className="blog-image"
                    src="https://s3-alpha-sig.figma.com/img/8f66/6921/d7f69308885e533220339eb8370a0a8a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKMacrPH5qSudqkgiCKgiL8GjnU5f5~vEVkbBg2H9PRxBBsrvYHEnV7U~2qvSUih838zNKigctVUW~BILydEJ7KTaEwpPpEyHci~WPeV2D~CqtBS9kLmrCbJWZkcZF7~fG6iiIFUatCVFtKj01SEejrGZ3wfdN3KxZ0bKOnLecVzA6Ujv5-J-RzHhS-kNzDinjRTBqtMwNyk2rD6bOL-PxxaqLTFVfWPOpoR9lQeTuGSbuP73o1jGI2Aj5HuuH9ezYDHzXB6UJUahM~qWp3dAjUhgTVq0hJU2KxI1vlC5ij12DURGiDxyFy5YNXOhga1v4s-9YC~tCAPIDJUnDwpAg__"
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
