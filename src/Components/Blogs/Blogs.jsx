import React, { useState, useEffect } from "react";
import "./blog.css";
import axios from "axios";
const Blogs = () => {
  const [imageType, setImageType] = useState("");
  const [blogs, setBlogs] = useState([]);

  const handleImageType = (imgSrc) => {
    const image = new Image();
    image.src = imgSrc;

    image.onload = () => {
      if (image.naturalWidth > image.naturalHeight) {
        setImageType("landscape");
      } else {
        setImageType("portrait");
      }
    };
  };

  const handleBlogs = async () => {
    try {
      const response = await axios.get(
        "http://13.201.135.134:1337/api/blog-dynamics?populate=*"
      );
      if (response.status === 200) {
        setBlogs(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   handleBlogs();
  // }, []);
  const imageUrl =
    "http://13.201.135.134:1337/uploads/thumbnail_Screenshot_2024_09_05_120046_bbf0192407.png";

  // Use useEffect to call handleImageType when the component mounts or the imageUrl changes
  useEffect(() => {
    handleImageType(imageUrl);
  }, [imageUrl]);

  return (
    <>
      <h1 className="Blog-heading">Blogs</h1>
      <div className="blogs-contaainer">
        {/* Main _header */}
        <div className="main-header-card">
          <div className="left-header-card">
            <span>12-2-2024</span>
            <p>HYDERABAD</p>
          </div>
          <div className="center-header-card">
            <h1>
              సంరాంతి పండుగ <br />
              2024
            </h1>
          </div>
          <div className="right-header-card">
            <p>DAILY</p>
          </div>
        </div>

        {/* Heading */}
        <div className="heading_container">
          <h1>వ్య స నం - ప ర్య వ సా నం</h1>
        </div>

        {/* Blog Bbody */}
        <div className="blog_body_container">
          {imageType === "landscape" && (
            <div className="banner_image">
              <img src={imageUrl} alt="Blog banner" />
            </div>
          )}

          <div className="body-content">
            <h2>మత్తు వదలరా..!</h2>
            <p>
              మనం చేసే పను లు బట్టే మనకి గు ర్తిం పు వస్తుం ది . అలాం టి పను లు
              , మనం పూర్తి స్పృ హ లో ఉం డి చేస్తేనే, మన గు ర్తిం పు మనం అను కు
              న్న విధం గా ఉం టుం ది. మన ప్రమేయం లేకుం డా జరిగే పను లు మనకు గు
              ర్తిం పు తెచ్చి నా, అది ఎక్కు వ కాలం నిలవదు . ఇతర పదార్థాలను తీసు
              కొని, అది ఇచ్చే మత్తు లో, మనకు అనిపిం చే, చేసే పను లు మనకి బాగా
              అనిపిం చినా, అది కేవలం ఆ పదార్థం యొక్క ప్రభావం ఉన్నం త వరకే కానీ,
              తరు వాత ఉం డదు . అలా చేసే పను లు మనకు హానికారం . మత్తు చేసే చేటు
              కం టే, మత్తు ప్రభావం లో ఉం డి చేసే పను లు ఇం కా ప్రమాదం . ఎం దు కం
              టే, ఆ పను లు మన గు ర్తిం పు నే మార్చే స్తాయి. మన స్థాయి ని మార్చే
              స్తాయి. అటు వం టి స్థాయి తక్కు వ పను లు చేసాం అన్న కనీస స్పృ హ కూ
              డా మనకు లేకుం డా చేయడం మత్తు పదార్థం యొక్క చమత్కా రం . మత్తు
              వదిలిన తర్వా త, మన పను ల యొక్క పర్య వసానం కి పూర్తి భాద్య త మనదే
              అవుతుం ది. మత్తు వదిలినా, పని యొక్క ఫలితం మారదు . అతి చిన్న వయసు
              లోనే మత్తు కి బానిస అయ్యి , యు వత చేసే పను ల ప్రభావం తలు చు కుం
              టేనే బాధ వేస్తుం ది. మత్తు మం చిదే. కానీ, అది వ్య సనం అయితేనే
              సమస్య . మత్తు రు చి చూ స్తా కూ డా, పను లు చేసు కు నే మా Aevumjagat
              సినిమా లోనే యు వత లా ప్రపం చం అం తటా ఉం టే బాగుం డు
            </p>
            <h4>- దినేష్ నర్రా</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
