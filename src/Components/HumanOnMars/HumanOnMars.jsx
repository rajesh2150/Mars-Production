import React, { useEffect } from "react";
import Footer from "../common/Footer";
import "./HumanOnMars.css";
import { useLocation } from "react-router-dom";
import Person1 from "../../assests/HumansOnMars/image 11.png"
import Person2 from "../../assests/HumansOnMars/image 12.png"
import Person3 from "../../assests/HumansOnMars/image 13.png"
import Person4 from "../../assests/HumansOnMars/image 14.png"
const HumanOnMars = () => {
  const location = useLocation();

  useEffect(() => {
    const projectWrapper = document.querySelector('.team-wrapper');
    if (projectWrapper) {
      projectWrapper.classList.remove('loaded');
      const timeoutId = setTimeout(() => {
        projectWrapper.classList.add('loaded');
      }, 50);
      return () => clearTimeout(timeoutId); // Cleanup on unmount or before re-run
    }
  }, [location]);

  const team = [
    {
      id: 1,
      name: "Dinesh Narra",
      url:Person1,
      // url: "https://s3-alpha-sig.figma.com/img/deb6/bbba/beec711db12bbda57e0e66496d59937e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LnmdHZykfhX~hOW~PQZwHhOQVxfj~pha2JFZcZxm85rTgtS2VKWgAS7MyvuiPiNU5jQbVSXxXKtoT9d5omUhri~0MAxKW7MryONobwJGv66GwvX6ixJ32wkxeYqrmp5gnLurXDn1UOu7LjhXJJhDm51eWwIYV1nUltCimr8VXr0JZMmc05klLK~dTI5HrQ3LXALa8cDFip~5U1CAzVOzRG2uM32hlBflC-IsOovkscwgoAc40YuywDwHPzowiGK2huw0lX0rV0z72WUuMaLYDwG~dWRMME7~X5cqUi-nD-xn16WgmOI2u-DFqkczEhTdnaeLpwBy2j~~oHLEaVl3CQ__",
      role: "Chief Executive Office",
    },
    {
      id: 2,
      name: "Rohith Sanjeevi",
      url:Person2,
      role: "Writer, Memer",
    },
    {
      id: 3,
      name: "Girish Kumar",
      url:Person3,

      role: "Graphic Designer, Editor",
    },
    {
      id: 4,
      name: "Pavan Kumar",
      url:Person4,
      role: "Cinematographer, Editor",
    },
  ];

  return (
    <>
      <div className="team-wrapper">
        <p className="p1 team-p1" style={{ marginBottom: "5%" }}>
          THE TEAM
        </p>
        <div className="team-members">
          {team.map((mem, ind) => (
            <div className="team-member" key={ind}>
              <div className="team-mem-details">
                <img className="team-mem-pic" src={mem.url} alt={mem.name} />
                <p className="team-mem-name">{mem.name}</p>
              </div>
              <div className="team-mem-desc">
                <p className="team-mem-role">{mem.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carrer-wrapper">
        <p className="carrer-p">Career opportunities</p>
        <div className="carrer-form">
          <form>
            <input type="text" placeholder="Enter Name" /><br />
            <input type="email" placeholder="Enter Email" /><br />
            <input type="text" placeholder="Enter Role" /><br />
            <input type="text" placeholder="Enter Message" /><br />
          </form>
        </div>
        <div className="connect-with-us">
          <p className="connect-p">Connect with us</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HumanOnMars;
