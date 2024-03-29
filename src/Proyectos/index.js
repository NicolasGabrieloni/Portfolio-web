import React from "react";
import "./Proyectos.css";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";

function Proyectos(props) {
  return (
    <div className="proyectosContainer" id="proyectos">
      <div className="proyectChild">
        <h2 className="tittleP">Projects</h2>
        <div className="cards">
          <div data-aos="zoom-in" data-aos-duration="1000" className="card c3">
            <a href="https://github.com/NicolasGabrieloni/meal-planner">
              <div className="tapa">
                <h3>Meal-Planner</h3>
              </div>
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="card c4">
            <a href="https://shoppi-commerce.netlify.app/">
              <div className="tapa">
                <h3>E-commerce</h3>
              </div>
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="card c1">
            <a href="https://estudio-atlas.netlify.app/">
              <div className="tapa">
                <h3>Landing Page</h3>
              </div>
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="card c2">
            <a href="https://caloriesapp.netlify.app/">
              <div className="tapa">
                <h3>Calories App</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Proyectos };
