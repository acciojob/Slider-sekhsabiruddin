import React, { useState } from "react";

const App = () => {
  const data = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const prevReview = () => {
    setCurrentReview((currentReview - 1 + data.length) % data.length);
  };

  const nextReview = () => {
    setCurrentReview((currentReview + 1) % data.length);
  };

  const randomReview = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * data.length);
    } while (randomIndex === currentReview);
    setCurrentReview(randomIndex);
  };

  return (
    <div>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review">
        <div className="person-img">
          <img src={data[currentReview].image} alt={data[currentReview].name} />
        </div>
        <h2 id={`author-${data[currentReview].id}`}>
          {data[currentReview].name}
        </h2>
        <p className="job">{data[currentReview].job}</p>
        <p className="info">{data[currentReview].text}</p>
      </div>
      <div className="buttons">
        <button className="prev-btn" onClick={prevReview}>
          Previous
        </button>
        <button className="next-btn" onClick={nextReview}>
          Next
        </button>
        <button className="random-btn" onClick={randomReview}>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default App;
