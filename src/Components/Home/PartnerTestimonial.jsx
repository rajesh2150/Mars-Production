import React, { useState } from "react";
import person1 from "../../assests/Home/Person1.png"
import person2 from "../../assests/Home/Person2.png"
import person3 from "../../assests/Home/Person3.png"
import person4 from "../../assests/Home/Person4.png"

const PartnerTestimonial = () => {
  const [img, SetImg] = useState(0);
  const handleClick = (ind) => {
    SetImg(ind);
  };

  const photos = [
    {
      id: 1,
      name: "Dinakar",
      field: "Artist, AevumJagat",
      desc: "మనిషి జీవిత గమనం ఓ పాఠాలు,గుణపాఠాల మయం...అందులో మరచిపోలేని,మరపురాని ప్రయాణం ఏవం జగత్ లాంటి ఓ విలువలతో కూడిన సినిమా లో నటించడం. టీం అందరూ చాలా స్నేహపూర్వకంగా కలుపుగోలుగా మెలగడం ఎన్నో మెలుకవలు నేర్చుకోవడం ఆనందదాయకం. జై కిసాన్ జై జవాన్....మన దేశంలో గర్వించ దగ్గ జీవితాలు అందులో ఓ పాత్ర నేను ధరించడం గర్వకారణం. ఈ పాత్రను నాకు అందిచిన డైరెక్టర్ ధినేష్ గారికి మరియు టీం కి ప్రత్యేక ధన్యవాదాలు.",
      img:person1
    },
    {
      id: 2,
      name: "Saraswathi Karavadi",
      field: "Artist & Lyricist, AevumJagat",
      desc: "It was my pleasure to be a part of this wonderful project. My part was picturised in a remote, beautiful village by name bhuvanapuram The team warmly received me in Madanapalle and eventually became as close as family. The film shooting was more like spending time at a picnic.. We ate  freshly brewed coffee  by our loving team I was treated with great respect.I had a wonderful time working with Mr. Dinesh Kumar, the director and Mr. Venky the DOP. I congratulate the Director for creating excellent team spirit among the members, which is highly required for good output.It was an unforgettable experience working with this team and I look forward to many more such experiences.",
      img:person2
    },
    {
      id: 3,
      name: "Vijayalakshmi",
      field: "Artist, AevumJagat",
      desc: "Its a good, beautiful, n wonderful experience worked with MARS PRODUCTION. No words to say. I am too lucky n proud that_is  one of the part in this movie AEVUM JAGATH. At the time of shoot  I felt very happy with all crew n cast. Its a memorable n sweet days which I felt in shoot time. Good  hospitality given to us with regarded treatment by MARS PRODUCTION. The title of movie is awesome.  Direction, dailogues, photography, n selected actors all are done dedicated work with MARS TEAM. Fantastic role in my reel life. This opportunity given me a lot of experience. Heartful thanks to you MARS PRODUCTION",
      img:person3
    },
    {
      id: 4,
      name: "SadhaVamsi",
      field: "JuniorDirector,Operations, Mars Productions",
      desc: "I would like to say big thanks to mars productions.Aevumjagat This one is special in many ways. It made me a better person and helped me to push my limits. I owe this positive change in me to mars team Thank you soo much for giving me this beautiful experience. Kudos to the entire cast and crew.#Aevum_jagat ",
      img:person4
    },
  ];
  return (
    <div className="PartnerTestimonial-main">
      <p className="PartnerTestimonial-text">Partner Testimonials</p>
      <div className="PartnerTestimonial-wrapper">
        <div className="PartnerTestimonial-images">
          {photos.map((photo, ind) => (
            <div>
              <img
                onClick={() => handleClick(ind)}
                className={`   PartnerTestimonial-image ${img ? "show" : ""}`}
                src={photo.img}
                 alt={photo.name}
              />
            </div>
          ))}
        </div>
        <div className="PartnerTestimonial-show">
          <div className="fields">
            <p className="name">{img ? photos[img].name : photos[0].name}</p>
            <p className="field">{img ? photos[img].field : photos[0].field}</p>
            <p className="desc">{img ? photos[img].desc : photos[0].desc}</p>
          </div>
          {/* <div> */}
            <img
              className="selected-image"
              src={`${img ? photos[img].img : photos[0].img}`}
              alt={photos[img].name}
            />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PartnerTestimonial;
