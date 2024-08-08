import React from "react";
import "../../../styles/start.css";
import trainerImg from "../../../assets/coachings.webp";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start_wrapper">
          <div className="start_img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
              className="coaching-img"
            />
          </div>

          <div
            className="start_content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section_title">
              Ready to make a <span className="highlights">change ?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae
              in quis amet quo reiciendis esse vitae corrupti dignissimos
              perferendis?
            </p>
            <button className="register_btn">Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
