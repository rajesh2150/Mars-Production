import React from "react";
import "./partner.css";
import Footer from "../common/Footer";
const Partner = () => {
  return (
    <>
      <div className="project-wrapper">
        <div className="main-div">
          <div>
            <p className="p1"> How our partnership works</p>
            <p className="p2">
              Mars Family – The Recipe that bonds and binds Mars Movie
              Productions is designed to provide an end-to-end support to the
              Film Field Aspirants in any vertical of film making. We @ Mars
              believe that the industry is in the dire need of the following
              precepts to bring in a new era. Transparency : Everything is kept
              open for the aspirants to see what is happening to them and their
              talents and resources. Skilled Team : MMP is stewarded by highly
              skilled and well-seasoned team. Realistic Vision : MMP’s vision is
              founded on experts’ hindsight and what is achievable, but not on
              wishful fancies. Our goals are Specific, Measurable, Achievable,
              Realistic, and Time-Bound (SMART). Co - Existence ( We grow as you
              grow ): We wish you, as collaborators, a grand success which will
              be the cornerstone of our success. We are designed to Co-create,
              Collaborate, Co-Exist, and Co-Succeed. Creative Freedom : This
              home-like canvas has no mindless, wooden, and restrictive rules;
              we have standardized the processes for optimal output while not
              losing our sight on creative freedom, which is our holy grail.
            </p>
          </div>
          <div>
            <img
              className="partner-image"
              src="https://s3-alpha-sig.figma.com/img/d872/3f29/eb2af273c684f9144379ca460a820399?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J2454rqI4ysEbfqwV3kLg1~P7ToLwcAEHX~x9rw58ZEW-Q1x3hAfXrO1FKS~WXW12qy~-nXppdbIwvuQUu0nuedRiE2u9xjSroREOrKxCTl~K64ISZcgKD9iaDHIw9wL~I4lv3NTW8AK9QSoPxK9vZ12synZWtY8Uqy2kT~ZwQEkiWvgwHPhzdz5q9TipmFu-2IM7Ci38G4iA~B2psFvINv~DJv3tXTlgjBbTiliCBq6LvYS4eqElPizWOeWhEpa5b6SOG~UfVDEFu4xKN6mCGpywVCHaV8rJuONagYDcUYmxET5T7F6WV-3LXnRRAj123gnyEeQEDJSxhBFI4SfeA__"
            />
          </div>
        </div>
        <div style={{ marginTop: "5%", display: "flex", marginLeft: "15%" }}>
          <div style={{ marginLeft: "5%" ,paddingRight:"5%"}}>
            <img
              className="partner-image-tobe-added"
              height={300}
              width={180}
              style={{ backgroundColor: "lightgray", borderRadius: "20px" }}
            />
            <p className="p2">Film Makers/ Producers</p>
          </div>
          <div>
            <img
              className="partner-image-tobe-added"
              height={300}
              width={180}
              style={{ backgroundColor: "lightgray", borderRadius: "20px" }}
            />
            <p className="p2">Film Makers/ Producers</p>
          </div>
        </div>
        <p className="p1">Our Partners</p>
        <div style={{paddingLeft:"5%"}}>
        <img
              className="partner-image-tobe-added"
              height={300}
              width={180}
              style={{ backgroundColor: "lightgray", borderRadius: "20px",marginRight:"5%" }}
            /><img
            className="partner-image-tobe-added"
            height={300}
            width={180}
            style={{ backgroundColor: "lightgray", borderRadius: "20px",marginRight:"5%"  }}
          /><img
          className="partner-image-tobe-added"
          height={300}
          width={180}
          style={{ backgroundColor: "lightgray", borderRadius: "20px",marginRight:"5%"  }}
        />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Partner;
