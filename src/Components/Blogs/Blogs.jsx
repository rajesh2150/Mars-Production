import React, { useState, useEffect } from "react";
import "./blog.css";
import axios from "axios";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const handleBlogs = async () => {
    try {
      const response = await axios.get(
        "http://13.201.135.134:1337/api/blog-dynamics?populate=*"
      );
      if (response.status === 200) {
        setBlogs(response.data.data);
        console.log(response.data.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleBlogs();
  }, []);

  return (
    <>
      <h1 className="Blog-heading">Blogs</h1>
      {blogs?.map((item, index) => (
        <div className="blogs-contaainer" key={index}>
          {/* Main _header */}
          <div className="main-header-card">
            <div className="left-header-card">
              <p>{item?.attributes?.Date}</p>
              <span>{item?.attributes?.Location}</span>
            </div>
            <div className="center-header-card">
              <h1>
                {item?.attributes?.Main_Title} <br />
                {item?.attributes?.Year}
              </h1>
            </div>
            <div className="right-header-card">
              <p>{item?.attributes?.Blog_type}</p>
            </div>
          </div>

          {/* Heading */}
          <div className="heading_container">
            <h1>{item?.attributes?.Sub_Title}</h1>
          </div>

          {/* Blog Bbody */}
          <div className="blog_body_container">
            {item?.attributes?.is_portrait === null && (
              <>
                <div className="banner_image">
                  <img
                    src={`http://13.201.135.134:1337${item?.attributes?.Banner_image?.data?.attributes?.url}`}
                    alt="Blog banner"
                  />
                </div>

                <div className="body-content">
                  <h2>{item?.attributes?.Heading}</h2>
                  <p>{item?.attributes?.Content}</p>
                  <h4>- {item?.attributes?.Author}</h4>
                </div>
              </>
            )}

            {item?.attributes?.is_portrait === true && (
              <>
                <div className="body-content">
                  <p>
                    <div className="banner_image">
                      <img
                        src={`http://13.201.135.134:1337${item?.attributes?.Banner_image?.data?.attributes?.url}`}
                        alt="Blog banner"
                      />
                    </div>
                    <h2>{item?.attributes?.Heading}</h2>
                    {item?.attributes?.Content}{" "}
                  </p>
                  <h4 className="Heading">- {item?.attributes?.Author}</h4>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
