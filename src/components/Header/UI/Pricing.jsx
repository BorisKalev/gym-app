import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { FaFire } from "react-icons/fa";
import "../../../styles/pricing.css";
function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing_top">
          <h2 className="section_title">
            Gym
            <span className="highlights"> Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Possimus repellendus quas maxime quos. Labore, eum.
          </p>
        </div>

        <div className="pricing_wrapper">
          <div
            className="pricing_item pricing_item-01"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="pricing_card-top">
              <h2 className="section-title">Regular Member</h2>
              <h2 className="pricing section_title">
                50$ <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Customer Support
                </li>

                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Standard Options
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  5 classses per week
                </li>
              </ul>

              <button className="register_btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing_item pricing_item-02"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="pricing_card-top">
              <h2 className="section-title">Premium Member</h2>
              <h2 className="pricing section_title">
                70$ <span>/month</span>
              </h2>
              <h5>
                Most popular membership
                <span className="fire-icon">
                  <FaFire />
                </span>
              </h5>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Customer Support
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Personal Trainer
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Premium Options
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  5 classses per week
                </li>
              </ul>

              <button className="register_btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing_item pricing_item-03"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="pricing_card-top">
              <h2 className="section-title">Platinum Member</h2>
              <h2 className="pricing section_title">
                100$ <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Customer Support
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Personal Trainer
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Platinum Options
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>
                  Unlimited Classes
                </li>
              </ul>

              <button className="register_btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
