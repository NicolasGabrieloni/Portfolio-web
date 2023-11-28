import React from "react";
import "./aboutme.css";
import MyImage from "../imagenes/me.jpg";
import "aos/dist/aos.css";

function Aboutme(props) {
  return (
    <div className="aboutContainer" id="aboutme">
      <h2 className="tittleAbout">About me</h2>
      <div className="infoContainer">
        <img
          src={MyImage}
          alt="Mi imagen"
          className="fotuki"
          data-aos="fade-right"
        />
        <div className="textContainer">
          <p>
            Hello, I am Nicolás Gabrieloni, I am 24 years old. I live in
            Santa Fe-Argentina. <br></br>
            <br></br>I find interest in everything that involves a challenge and
            an opportunity to continue learning and developing as a
            professional. I am currently learning python<br></br>
            <br></br>
            My favorite technology is Next.js
          </p>
        </div>
      </div>
      <a href="https://drive.google.com/file/d/1K5W9pKotf7_d78qczFALAGYCiD3HFHCA/view?usp=drive_link">
        <button className="cvBtn">cv spanish</button>
      </a>
      <a href="https://drive.google.com/file/d/1zAb1KX6Mdvs9iwsRBFVE5eFmpAeOwpPR/view?usp=sharing">
        <button className="cvBtn">cv english</button>
      </a>
    </div>
  );
}

export { Aboutme };
