import React from "react";
import "../../../styles/footer.css";
import logo from "../../../assets/dumble.png";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-down" data-aos-duration="1500">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo_img">
                <img src={logo} alt="" />
              </div>
              <h2>FitBody</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, eaque nesciunt libero magni sit veniam aperiam illo sed
              facilis vitae.
            </p>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Company</h4>

            <ul className="footer_links">
              <li>
                <a href="#">Our Program</a>
              </li>
              <li>
                <a href="#">Our plan</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>

            <ul className="footer_links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Professionals</h4>

            <ul className="footer_links">
              <li>
                <a href="#">Nutritionists</a>
              </li>
              <li>
                <a href="#">Personal Trainers</a>
              </li>
              <li>
                <a href="#">Rules and Regulations</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright - {year} developped by Boris. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
