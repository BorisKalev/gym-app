import React from "react";
import "../../../styles/exerices.css";
import lunges from "../../../assets/lunges.png";
import yoga from "../../../assets/yoga-pose.png";
import extented from "../../../assets/extended.png";

function Exercices() {
  return (
    <section id="schedule">
      <div className="container exercice_container">
        <div className="exercise_top">
          <h2 className="section_title">
            Benfits of <span className="highlights">Exercice</span>
          </h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Perspiciatis vitae, laborum adipisci minus consequuntur quasi?
          </p>
        </div>

        <div className="exercise_wrapper">
          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise_content">
              <h4>Healthy Life</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                consectetur quod earum doloribus vero? Labore.
              </p>
            </div>
          </div>

          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={yoga} alt="" />
            </span>

            <div className="exercise_content">
              <h4>Increase Flexibility</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                consectetur quod earum doloribus vero? Labore.
              </p>
            </div>
          </div>

          <div
            className="exercise_item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise_icon">
              <img src={extented} alt="" />
            </span>

            <div className="exercise_content">
              <h4>Reducing Blood Pressure</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                consectetur quod earum doloribus vero? Labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exercices;
