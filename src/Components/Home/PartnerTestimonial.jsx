import React, { useState } from "react";

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
      img: "https://s3-alpha-sig.figma.com/img/f7f8/7a0e/b2fdaecb864ab041cd96f0a92651e68f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mq3YmkUhcocBsiV0iR3WsfTRp1BhFWFqBti9jCDjHQEA58zI4cmzNL1eob4pU0F1NyYevhC9AvEHrNeQIcx9JMD1omY7m8PgQV2U8bcgNLyIRkhxLRiJ3vqquE-rTTlnwgb1jLuvgQkhFaepAIwfewSThwzrdStfQ9qbZ1SuJ91Qa6D283kTKimae32LaqHc7l5OcFxyrroG0~2PKY1d4sg1Mp8iq5euiKjpJu2yO1u3TsQBdmsw5JcpZ7UC1orVQJ8rhepF0V1y2cR3c6v31P4So3ypzIbNJhN-3lT3dTQ7o1FJIjfSsXwmD-PXpMHxhQVo3AQTSvVCX2RF3~X6bw__",
    },
    {
      id: 2,
      name: "Saraswathi Karavadi",
      field: "Artist & Lyricist, AevumJagat",
      desc: "It was my  pleasure to be a part of this wonderful project. My part was picturised in a remote, beautiful village by name bhuvanapuram The team warmly received me in Madanapalle and eventually became as close as family. The film shooting was more like spending time at a picnic.. We ate  freshly brewed coffee  by our loving team I was treated with great respect.I had a wonderful time working with Mr. Dinesh Kumar, the director and Mr. Venky the DOP. I congratulate the Director for creating excellent team spirit among the members, which is highly required for good output.It was an unforgettable experience working with this team and I look forward to many more such experiences.",
      img: "https://s3-alpha-sig.figma.com/img/9288/7ee9/6eef66fd9c9aa574c954b0bfdc329d61?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lsItKrOF-9wX7G0b8zS16d3wL3i~8qB-zB6hjM~VR2jy-dlg2J8GPWddNJPbMa1fNN1wVOwvT9YVTX9td5wshaWaa9dzSxDz~SyOKomSQfcror-~tzsx1GXxgvqcyNrIcLDPgIIloZDc05DHCowGAIEDIlAFqeInHGTkuf-AZsoCofk8qtzwK6QTCXf3m-HCTqZ7rBj2257hJ1n1rRIXHCeKPbWRnYqk6YnM5XPNOFBbV3IbXSMo8vupb4ah~LGkZMwPFBsEtFlsiw3WaVWlHftmpSyQhI~djADUyKiIsVjrwmsZ5k9zgIpF~cRk~RjQ5htzTOugcJ4oW3-yEPNsJA__",
    },
    {
      id: 3,
      name: "Vijayalakshmi",
      field: "Artist, AevumJagat",
      desc: "Its a good, beautiful, n wonderful experience worked with MARS PRODUCTION. No words to say. I am too lucky n proud that_is  one of the part in this movie AEVUM JAGATH. At the time of shoot  I felt very happy with all crew n cast. Its a memorable n sweet days which I felt in shoot time. Good  hospitality given to us with regarded treatment by MARS PRODUCTION. The title of movie is awesome.  Direction, dailogues, photography, n selected actors all are done dedicated work with MARS TEAM. Fantastic role in my reel life. This opportunity given me a lot of experience. Heartful thanks to you MARS PRODUCTION",
      img: "https://s3-alpha-sig.figma.com/img/4937/cdee/2eb8aca1ab18f6f955e27a332b2bf634?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ncw-jLXXQ9Bi5edeERrrlGBK0f3jRZ4iET0or~uUNk-E1aAc3z6jypSpqvV9K08BJLcwMjRCJWhkxfT-Tn1YhQcF-i-S4J0uzbfmivoTP6d3ImnoqXEYMuIoLHEvR2LkpHx~8l~YrRh~ITJQvpOjK3XN-rOHzOW7pm795jaYhGtBq1BauPhqQlPE~WnuKouP0ohOT7pUTbWh4VzBKvsp0XtE1r9iB3R-3QzQbvAURv9Zavi0sPPpxnmz4urX~uEf5JCFlH07MU8Wa0wOaG7vTD93M-wKAN7NVJJaKKcfCaDt-ag8TqmvE-ZnXCHDecLg2GPf3jCNAtXgJJ-DpZH1~g__",
    },
    {
      id: 4,
      name: "SadhaVamsi",
      field: "JuniorDirector,Operations, Mars Productions",
      desc: "I would like to say big thanks to mars productions.Aevumjagat This one is special in many ways. It made me a better person and helped me to push my limits. I owe this positive change in me to mars team Thank you soo much for giving me this beautiful experience. Kudos to the entire cast and crew.#Aevum_jagat ",

      img: "https://s3-alpha-sig.figma.com/img/fc2d/47a7/059c0e3926e6b18fc2efb1f1a7586664?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lMTPcBzseKgrgPXJVRBKYn-y0L-c0lO4QrsXRQH-JbOl3YOL34w4Y4uDbcGYLpbbe20V0hjElkY2aGdWTtIaOqWZ2v0XZ1byd-3zRiW7aD9~IUV311cJ52ac8IkRgLwqKgVmxqWTgYWbY8SdyuLwsJod8g57yrjUaHLrOoJvvoP7X2pnAcjrR9PoZvHnZkXzTPgfL9zR4JTnbMDOe9OGTCRBLKpwKOZYxy9rjcBcoWKG9cWXr3R1NZt-UL1grhlas3VFQjkrj~1IaarbnwZ5c-OJhnOBzrTXUgxOugCCeewfqjgV295TFe9QNmTHds8Gbbs5ariP4yeC-1Hs4SSpyQ__",
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
            />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PartnerTestimonial;
