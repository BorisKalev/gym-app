import React from "react";
import "../../../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import avatar03 from "../../../assets/avatar01.png";
import avatar02 from "../../../assets/avatar02.png";
import avatar01 from "../../../assets/gym-guy.png";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section_title">Testimonials</h2>

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img-01">
                  <img src={avatar01} alt="" className="gym-buddies-pic" />
                </div>
                <h4>Mike Steel (Pro Bodybuilder)</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi error culpa quidem nobis dignissimos eaque ullam
                  asperiores reiciendis sapiente ipsa.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img-02">
                  <img src={avatar02} alt="" />
                </div>

                <h4>Maria Louise</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  fugit animi vel ipsam nesciunt, atque rem totam esse quam ab!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_item">
                <div className="slide_img-03">
                  <img src={avatar03} alt="" />
                </div>

                <h4>Jessica Fernandez</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi error culpa quidem nobis dignissimos eaque ullam
                  asperiores reiciendis sapiente ipsa.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
