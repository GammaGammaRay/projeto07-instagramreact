import React from "react";

let suggestions = [
  { profile: "bad.vibes.memes", img: "img/badvibe.jpg", text: "Segue você" },
  { profile: "iwouldpreferno", img: "img/iwouldpreferno.jpg", text: "Segue você" },
  { profile: "humans_of_capitalism", img: "img/humans_of_capitalism.jpg", text: "Novo no Instagram" },
];

function Suggestions() {
  return (
    <div class="sidebar__suggestionContainer">
      {suggestions.map((suggestion) => (
        <Suggestion
          name={suggestion.profile}
          img={suggestion.img}
          text={suggestion.text}
        />
      ))}
    </div>
  );
}

function Suggestion({ name, img, text }) {
  return (
    <div className="sidebar__suggestion">
      <div class="sidebar__suggestion__containerLeft">
        <div class="sidebar__suggestion__avatar">
          <img src={img} alt="" />
        </div>
        <div class="sidebar__suggestion__text">
          <div class="sidebar__suggestion__profile">{name}</div>
          <div class="sidebar__suggestion__status">{text}</div>
        </div>
      </div>

      <a href="">
        <div class="sidebar__suggestion__action">Seguir</div>
      </a>
    </div>
  );
}

export default Suggestions;
