import React from "react";
import Footer from "../common/Footer";
import "./HumanOnMars.css";
const HumanOnMars = () => {
  const team = [
    {
      id: 2,
      name: "Dinesh Narra",
      url: "https://s3-alpha-sig.figma.com/img/deb6/bbba/beec711db12bbda57e0e66496d59937e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LnmdHZykfhX~hOW~PQZwHhOQVxfj~pha2JFZcZxm85rTgtS2VKWgAS7MyvuiPiNU5jQbVSXxXKtoT9d5omUhri~0MAxKW7MryONobwJGv66GwvX6ixJ32wkxeYqrmp5gnLurXDn1UOu7LjhXJJhDm51eWwIYV1nUltCimr8VXr0JZMmc05klLK~dTI5HrQ3LXALa8cDFip~5U1CAzVOzRG2uM32hlBflC-IsOovkscwgoAc40YuywDwHPzowiGK2huw0lX0rV0z72WUuMaLYDwG~dWRMME7~X5cqUi-nD-xn16WgmOI2u-DFqkczEhTdnaeLpwBy2j~~oHLEaVl3CQ__",
      role: "Chief Executive Office",
    },
    {
      id: 2,
      name: "Rohith Sanjeevi",
      url: "https://s3-alpha-sig.figma.com/img/7711/8d31/dc1acbe1ea8699544dbbdc623de3f4db?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQ8-6zJFx7p4p4LNUFGosmaLnCelTNOQXZ2n281KOQ3DnqaJF2N~xmtqnX3j115e3~A9h0itP4UV-n2hIwnoqCQdVuUlA-SEiqRCOVC~6ZwJtyKcKMPOIrjCZDy0PQB63lBZjYpiV7JkKGjA25QT37TDMFlzRtg29G9hqMtIeZFjSVVfPoULDgU5tWbYjFsIcDKkgUiUxwTicoU4Lap-WEMhXSLaz7D-Vv~K73J~TyfAaGzuXDY2Qz8uHCoQVYorcw-Ze~kujUa0orU-K9~jhf5IJW8qV66ndX0aPZuFyZEF-T53S-P3gYC1N85LY5Br7w0ilRjuHRgUHVd7mc7pIQ__",
      role: "Writer, Memer",
    },
    {
      id: 3,
      name: "Girish Kumar",
      url: "https://s3-alpha-sig.figma.com/img/15ff/8c40/40049ca755e69aca53bf40667fa186c7?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QvR7yqsdeROZ7OVAXOUor78IbcIJizoaaOmKaZ5iTmaja5nVCrZIjoGkLYVofDBmIdF~PAAtuyZy9zYhZID8KAPFDG-Dft6OmCAOeTF4pgaj1klHPF29GkXUZw2xr11XHARBAovyM~M5sgWrnewJRw~eKNeygp6e-ePqy0Nx8ez-J1pdFZIhHwMKRDBHtRqT7ICWHmps4JBQwWRuFAwxFIoz~KnvqBao9X~YiKECAETK~96vrTctzZi2q9UzAkS5IpV6OK2tkE7hLCYrQwDpQygbsBJKJNHBDQWUGLG3cVTA9orSsDxqR3qwGStosgZMFJ4Rt43DWMSMcTpLnqe1ng__",
      role: "Graphic Designer, Editor",
    },
    {
      id: 4,
      name: "Pavan Kumar",
      url: "https://s3-alpha-sig.figma.com/img/5f17/8fe3/e1869290805400a615c2bcdf1407ec7b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwuNqM0Tq6DSB-QHoz-uwYbf3rplwGlxsO~DBan2GOsKAGzgz7~fJtVCgDEJkI4gz2EquC-CnY886hOJyXWFMu8XdusWCMDDXCgvtZrU5j0SMkZFntR83IViONNPZQkacMQDtRmamRbE574HP4TZ1YRitYGcrHIEt~o7maiL1NF-q0rvcm~p~bkAab9LVPwyRQ8tW2FQG0Hggbw1bCdZHu4k75Sb0T9FuXCtfLFyNeQK36wbT7uamQM6Cr3OJj15HA~92bFwm9GUSVbt-boF76KCunFvWSonyF2dvfW1j5HJePf-qdhMJXfw5Qdc0LnSwbZ0EYhrfpv91pVU1aZSKA__",
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
            <>
              <div className="team-member">
                <div className="team-mem-details">
                  <img className="team-mem-pic" src={mem.url} alt={mem.name} />
                  <p className="team-mem-name">{mem.name}</p>
                </div>
                <div className="team-mem-desc">
                  <p className="team-mem-role">{mem.role}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* {"carrer opp details"} */}
      <div className="carrer-wrapper">
        <p className="carrer-p">Career opportunities</p>
        <div className="carrer-form">
          <form>
            <input type="text" placeholder="Enter Name"/><br/>
            <input type="email" placeholder="Enter Email"/><br/>
            <input type="text" placeholder="Enter Role"/><br/>
            <input type="text" placeholder="Enter Message"/><br/>

          </form>
          {/* <a className="visit-link">visit</a> */}
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
