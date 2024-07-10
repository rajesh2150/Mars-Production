import React from "react";
import "./about.css";
import Footer from "../common/Footer";
import "../common/footer.css";
const AboutUs = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className="main-div">
          <div className="left-side">
            <div className="leftside-one">
              <p className="p1">Mars Productions Private Limited</p>
              <p className="p2">
                Mars Productions Private Limited is a Film & Technology
                Production company located at Sri Kalahasthi, Andhra Pradesh,
                India. Mars Productions Private Limited is registered with the
                Government of India on 4th September 2020 as a group of
                companies with Film production as its first step of operations.
                Mars movie productions is part of Mars productions and is
                registered with Google as a Digital company on 14th May 2020.
              </p>
            </div>
            <div className="leftside-two">
              <p className="p1">Founders Note</p>
              <p className="p2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div className="right-side">
            <img
              src="path_to_your_image.jpg"
              height={200}
              width={180}
              style={{
                backgroundColor: "lightgray",
                borderRadius: "15px",
                marginBottom: "2%",
              }}
              alt="Company Logo"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
        <div className="second-main-div ">
          <div className="about-leftside second">
            <div className="about-leftside-1">
              
              <p className="p1">Our Vision</p>
              <p className="p2">
                To create an eco system of creators and consumers with equality
                and efficiency at its center.
              </p>
            </div>
            <div>
            <img className="about-image" src="https://s3-alpha-sig.figma.com/img/04ca/e612/cc829f28cb4f3ea28af16dc99e58cabb?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPpwqHfr99euHw~RKSn1BS3KEecTeW8b7KYL-dXhMkEsP89xzNcJFq-UAERltI6pKBfpTXeKDxOR613LWuBWBFPUy~Iw8hRGtru5cc9OQ6RFaNEhIqE9MfiSDPWGkQj6mnjv9-A4VYNbj0Fj2XQmcrY3qRyft3VliP-8DlTZlC-YmSxVz2YhyqX67u4CPomNJdc8UaCIfKelGBe2AHnAAc85ubK0GoVBgGe5iJux76QzMuT3YEFUTLTl5fe-TQfj4DHYWrQH~BhfpIBXqs7KQ1LRq5dAosBNoiXQD8-4UQ76eCf3rtAufcSnrqKutdpzp8ZOlIJhTm30YkazmNEkGw__" />
            </div>

            <div className="about-leftside-">
              <p className="p1">Our Mission</p>
              <p className="p2">
                To give voice to every individual with a story worth telling the
                world by innovating in their respective craft.
              </p>
            </div>
            <div>
            <img className="about-image" src="https://s3-alpha-sig.figma.com/img/f8b5/5013/9648fd94bf0f85e797d684332d5b86e9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQG9klqtUmEMbgf4KXP6VrkJM73P0qPQl1KIQiu3xb6vX-rFurAeRx7D7rPTtSjN~YAssvbtQ2ad0CzYflUg6t218BRmHcWaT6Lv~vs6zRTpeLzaDgUnK5CqISOpzbzXvUE-0HSTZhHILaTwLQ-lb9IvXV7AcYMx1J7yF8KGY3Fi3fCWPycE6uN9R8XKwsmrhlMm5BjVKDErfM5hAIaLSJqSL1rGzqi06L-EtsnpmeMbHCVU-03s2XXZQJRQTxN1dObR8nPF4B1Y0n67anCHZMOpJxJP9uXGHkZZeiI2h2x80-qXodr1waj8w3M0-xcR0mT~t50e8~1NYcBn7ZNHTg__" />
            </div>

          </div>
         
        </div>
      </div>
        <Footer />
    </>
  );
};

export default AboutUs;
