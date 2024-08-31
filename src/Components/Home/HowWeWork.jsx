import React from 'react';
import './HowWeWork.css';
import Img1 from "../../assests/Partner/Partner1.png"
import Img2 from "../../assests/Partner/Partner2.png"
const HowWeWork = () => {
   
  return (
    <div className="how-we-work">
      <h2 className="title">HOW WE WORK</h2>
      <div className="how-we-work-wrapper">
        <div className="description-wrapper">
          <p className="description">
            Mars Movie Productions is designed to provide an end-to-end support to
            the Film Field Aspirants in any vertical of film making.
            <br/>
            <br/>
            We @ Mars believe that the industry is in the dire need of the
            following precepts to bring in a new era.
            <br/>
            <br/>
            <b>Transparency</b>: Everything is kept open for the aspirants to see
            what is happening to them and their talents and resources. Nothing is
            hidden. One can see the stages of life cycle of their investment - be
            it money or talent or resource.
            <br/>
            <br/>
            <b>Optimized process</b>: Technology is developed to ensure that every
            effort is best shaped, resources optimally utilized, timelines kept,
            value-diminishing processes removed, and wastage minimized. Every
            nickel and every second an aspirant invests in this dream project here
            is put to the best use so much so that the marketable output of his
            investment is clearly visible.
          </p>
        </div>
        <div className="logos">
          <div className="logo-item">
            <img
              className='image'
              src={Img1}
              alt="Calle Vapor"
            />
            <p>Calle Vapor</p>
          </div>
          <div className="logo-item">
            <img
              className='image'
              src={Img2}

              alt="Mee Meemulu"
            />
            <p>Mee Meemulu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
