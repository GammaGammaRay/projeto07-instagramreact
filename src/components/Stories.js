import React from "react";

let stories = [
  { profile: "driven.education", img: "img/driven.jpg" },
  { profile: "eighty_level", img: "img/eighty_level.jpg" },
  { profile: "lookatthebrazilians", img: "img/lookatbrazilians.jpg" },
  { profile: "depthofwikipedia", img: "img/depthswiki.jpg" },
  { profile: "artneversleeps", img: "img/artneversleeps.jpg" },
  { profile: "vice", img: "img/vice.jpg" },
  { profile: "intitutochao", img: "img/institutochao.jpg" },
  { profile: "midianinja", img: "img/midianinja.jpg" },
  { profile: "midianinja", img: "img/midianinja.jpg" },
];

export default function Stories() {
  return (
    <div className="stories__body">
      <div className="stories__container">
        {stories.map((story) => (
          <Story name={story.profile} img={story.img} />
        ))}
        
      </div>
      <a className="chevron" href="">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
    </div>
  );
}

function Story({ name, img }) {
  return (
    <div className="story">
      <div className="story__avatar">
        <div className="rounded-gradient-borders">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="story__profileAt">{name}</div>
    </div>
  );
}
