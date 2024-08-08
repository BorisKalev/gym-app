import React from "react";
import { RiPlayFill } from "react-icons/ri";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import heroImg from "../../../assets/gym-02.png";
import dumbleIcon from "../../../assets/dumble.png";
import "../../../styles/hero.css";

function Hero() {
  return (
    <section id="home">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <h2
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Exercice is the key to a
              <br />
              <span className="highlights"> Healthy</span> Lifestyle
            </h2>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              <br />
              tempora asperiores sint ab quidem dolores dicta praesentium
            </p>

            <div
              className="hero_btns"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
            >
              <button className="register_btn">Get Started</button>
              <button className="watch_btn">
                <span>
                  <RiPlayFill />
                  Watch Video
                </span>
              </button>
            </div>
          </div>

          <div className="hero_img">
            <div className="hero_img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box_img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart_rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>Heart rate</h5>
                <span>
                  <BsHeartPulseFill />
                </span>
                <h6>90 BPM</h6>
              </div>
            </div>

            <div
              className="gym_location"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <span>
                <FaLocationDot />
              </span>
              <h5>
                Find a new <br /> Gym near you
              </h5>
            </div>

            <div
              className="dumble_icon"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <img src={dumbleIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
