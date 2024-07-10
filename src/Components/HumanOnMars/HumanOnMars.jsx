import React from 'react'
import Footer from '../common/Footer'

const HumanOnMars = () => {
  return (
   <>
   <div className='project-wrapper'>
   <p className='p1' style={{marginBottom:"5%"}}>THE TEAM</p>
   <div>
   <img
              className="partner-image-tobe-added"
              height={300}
              width={180}
              style={{ backgroundColor: "lightgray", borderRadius: "20px",marginRight:"5%" }}
            /> <img
            className="partner-image-tobe-added"
            height={300}
            width={180}
            style={{ backgroundColor: "lightgray", borderRadius: "20px",marginRight:"5%" }}
          /> <img
          className="partner-image-tobe-added"
          height={300}
          width={180}
          style={{ backgroundColor: "lightgray", borderRadius: "20px",marginRight:"5%" }}
        /> <img
        className="partner-image-tobe-added"
        height={300}
        width={180}
        style={{ backgroundColor: "lightgray", borderRadius: "20px",marginRight:"5%" }}
      />
   </div>
    <p className='p1'>Career opportunities</p>
    <div style={{backgroundColor:"#343235",height:"55%",width:"50%"}}>
      <a>visit</a>
    </div>
    <button>Connect with us</button>
   </div>
   <Footer/>
   </>
  )
}

export default HumanOnMars
