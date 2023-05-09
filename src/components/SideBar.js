import React, { useState } from 'react';
import Suggestions from "./Suggestions";

export default function SideBar() {
  const [img, setImg] = useState('img/benperet.jpg')
  const [name, setName] = useState('bp_3d');

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar__userProfile">
            <img onClick={handleImgClick} src={img}  style={{ width: "56px" }} />
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
              <div >
                {name}{''}<ion-icon name="pencil-outline" onClick={changeName} style={{fontSize:'16px', marginLeft:'6px'}}/>
              </div>
            </p>
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: 300,
                fontSize: "14px",
                color: "#8E8E8E",
              }}
            ></p>
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
      <div className="sidebar__smalltype">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma <br />
        <br /> © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );

  function changeName() {
    let name = prompt("Qual seu nome?");
    if(name === null || name === undefined || name === '') {
      alert("Nome não foi alterado")
      return
    }
    setName(name);
  }
  
  function handleImgClick() {
    changeImg();
  }

  function changeImg() {
    let img = prompt("Qual a url da imagem?");
    if(img === null || img === undefined || img === '' || !isUrl(img)) {
      alert("Imagem não foi alterada")
      return
    }
    setImg(img); 
  }

  function isUrl(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-zA-Z\\d]([a-zA-Z\\d-]{0,61}[a-zA-Z\\d])?)\\.)+[a-zA-Z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-zA-Z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
}

