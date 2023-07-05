import React, { useState, useEffect } from "react";

const App = () => {
  const data = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      name: "maria ferguson",
      title: "office manager",
      quote:
        "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      name: "john doe",
      title: "regular guy",
      quote:
        "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
      name: "peter smith",
      title: "product designer",
      quote:
        "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      name: "susan andersen",
      title: "the boss",
      quote:
        "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((currentReview + 1) % data.length);
  };

  const prevReview = () => {
    setCurrentReview((currentReview - 1 + data.length) % data.length);
  };

  const randomReview = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentReview(randomIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1 id="review-heading">Reviews</h1>
      <div id="review-container">
        {data.map((element, index) => (
          <div
            key={element.id}
            className={index === currentReview ? "slide active" : "slide"}
          >
            <h2 id={"person" + "-" + index}>{element.name}</h2>
            <img
              src={element.image}
              alt="pic"
              id={"person" + "-" + index + "-" + "image"}
              className="image-div"
            />
            <h3>{element.title}</h3>
            <p>{element.quote}</p>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevReview}>
        Prev
      </button>
      <button className="next" onClick={nextReview}>
        Next
      </button>
      <button className="random" onClick={randomReview}>
        Random
      </button>
    </div>
  );
};

export default App;
