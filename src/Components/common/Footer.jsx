import React from 'react'
import "./footer.css"
import Youtube from "../../assests/Footer/youtube.png"
import Facebook from "../../assests/Footer/fb.png"
import Mail from "../../assests/Footer/Mail.png"
import Insta from "../../assests/Footer/Insta.png"
import LinkedIn from "../../assests/Footer/linkedIn.png"
import Twitter from "../../assests/Footer/Twter.png"
const Footer = () => {
    let icons=[
      Youtube,
      Facebook,
      Mail,
      Insta,
      LinkedIn,
      Twitter
       
    ]
  return (
    <div className='footer-wrapper'>
      <div className='empty-div'></div>
      <div>
       <img className='icon' src={icons[0]} alt='Mars Production'/>
       <img className='icon' src={icons[1]}  alt="Mars Production"/>
       {/* <img className='icon'src={icons[2]}   alt="Mars Production"/> */}
       <img className='icon' src={icons[3]}  alt="Mars Production" />
       <img className='icon' src={icons[4]}  alt="Mars Production" />
       <img className='icon' src={icons[5]}  alt="Mars Production" />
        
      </div>
    </div>
  )
}

export default Footer
