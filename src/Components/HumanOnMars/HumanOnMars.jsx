import React, { useState,useEffect } from "react";
import Footer from "../common/Footer";
import "./HumanOnMars.css";
import { useLocation } from "react-router-dom";
import Person1 from "../../assests/HumansOnMars/image 11.png";
import Person2 from "../../assests/HumansOnMars/image 12.png";
import Person3 from "../../assests/HumansOnMars/image 13.png";
import Person4 from "../../assests/HumansOnMars/image 14.png";

const HumanOnMars = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const projectWrapper = document.querySelector(".team-wrapper");
    if (projectWrapper) {
      projectWrapper.classList.remove("loaded");
      const timeoutId = setTimeout(() => {
        projectWrapper.classList.add("loaded");
      }, 50);
      return () => clearTimeout(timeoutId); // Cleanup on unmount or before re-run
    }
  }, [location]);

  const team = [
    {
      id: 1,
      name: "Dinesh Narra",
      url: Person1,
      role: "Chief Executive Officer",
    },
    {
      id: 2,
      name: "Rohith Sanjeevi",
      url: Person2,
      role: "Writer, Memer",
    },
    {
      id: 3,
      name: "Girish Kumar",
      url: Person3,
      role: "Graphic Designer, Editor",
    },
    {
      id: 4,
      name: "Pavan Kumar",
      url: Person4,
      role: "Cinematographer, Editor",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      data: {
       Name: name,
       Email: email,
       Role: role,
        Message :message,
      },
    };

    try {
      const response = await fetch("http://13.201.135.134:1337/api/Careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Handle success, like showing a success message or clearing the form
        alert("Your details have been successfully submitted!");
        setName("");
        setEmail("");
        setRole("");
        setMessage("");
      } else {
        // Handle server errors
        alert("Failed to submit your details. Please try again later.");
      }
    } catch (error) {
      // Handle network errors
      alert("An error occurred. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <center>
          <p className="carrer-p">Career opportunities</p>
          <div className="carrer-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Enter Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <br />
              <button className="connect-p" type="submit" >
                {isSubmitting ? "Submitting..." : "Connect with us"}
              </button>
            </form>
          </div>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default HumanOnMars;
