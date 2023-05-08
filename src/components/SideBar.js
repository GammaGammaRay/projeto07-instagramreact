import React from "react";
import Suggestions from "./Suggestions";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar__userProfile">
          <a href="https://www.instagram.com/bp_3d/">
            <img src="img/benperet.jpg" alt="" style={{ width: "56px" }} />
          </a>
          <div
            style={{
              marginLeft: "17px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "baseline",
            }}
          >
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "14px",
              }}
            >
              bp_3d
            </p>
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: 300,
                fontSize: "14px",
                color: "#8E8E8E",
              }}
            >
              Benjamin Péret
            </p>
          </div>
        </div>
        <div className="sidebar__suggestionContainer">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ fontWeight: 400, color: "#8E8E8E", fontSize: "12px" }}
            >
              Sugestões para você
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 500,
                textAlign: "center",
                color: "#262626",
              }}
            >
              Ver tudo
            </div>
          </div>
          <Suggestions />
        </div>
      </div>
      <div class="sidebar__smalltype">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma <br />
        <br /> © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}
