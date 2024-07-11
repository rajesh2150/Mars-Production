import React from "react";
import Footer from "../common/Footer";
import "./technology.css";

const Technology = () => {
  return (
    <>
      <div className="project-wrapper">
        <div className="main-div tech-main">
          <div className="sub-div">
            <div className="text-content">
              <p className="p1">SINEMA</p>
              <p className="p2">
                Our cutting edge end-to-end film production management software
                ensures that each stage of the production is transparently and
                seamlessly organized by Design-Execute-Sign-Off protocol with
                partner collaboration, steward modification, testing, funding
                approval, and progressing to the next stage.
              </p>
            </div>
            <div className="image-content">
              <img
                className="tech-image"
                src="https://s3-alpha-sig.figma.com/img/8327/9a11/2852809ea4abf3aa4e1da37f35a01de3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dnmmiqmVXpWSxKzM0BEnQaQrtdMXYdMdVmd4xi0OFhWYvi-VUi~QunaWDGhc2zd0saIbqLEGSTYbl0XQaRtVXWEXNDK0qftZNPeaupkSVDT~L7wOnVkduQ66jLgjIZVBlcBeUtY2YtMJ6Tcoc7cLw-RZsWB6GzACfsnWS~ifrKHnrp7bv2U2BYqmwNnDasjoQI~-ebKtVzWLD9Y5iqiMmYY1kEL7hPqHX5JEkximv2y8u3WFpXy76LS8NFwzCwYcYrorqrAJgNHllFvHQ7T92anQtQrO8beWwnMRUzXgUm~GPDTJWcp5LF8M-2Op4gju~VVtPrQtwtQD4DsEmX-wPg__"
                alt="SINEMA"
              />
            </div>
          </div>
          <div className="sub-div">
            <div className="text-content">
              <p className="p1">Innovation</p>
              <p className="p2">
                With our inhouse innovation 'Sine Theory for Story telling, we
                align the crafts of film making, resulting in better emotional
                connect to the viewers with respect to time.
              </p>
            </div>
            <div className="image-content">
              <img
                className="tech-image"
                src="https://s3-alpha-sig.figma.com/img/4f54/a9b9/42e83fd775065c2fb2d52f47cb2f664c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UzA9NqPZwtwtAtu9Heb5Uxlz-Y5lr4AreL0UHd6jLuQQywUdAm-uLSh8OQ5H7rmoAZkDMtm5aAj-AatrJERtoydU47A8160E9VNZ~qf06~Hjz8l7AOUeQU~Pl1dg02wMynb9i0cSqTvfQBMzn0-cMce-mzJu8PBKtlvoHn8ff4e~t-WUv6kegP1reQgT0tbqg3utZPqSyR24yQHTvo6dflZ6m9aKzXFQwHz8bo9tOnv~GEfz9lmIELe3C1R33NhlY1XrozYmRbISRBpWgEKv2KjwY25kctN8VyjxYfA1FKB8IBVs2DFyq3gkbm6wrCjxAKYl84TypbshYh5QW1mwbA__"
                alt="Innovation"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Technology;
