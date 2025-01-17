import React from "react";
import "./press.css";
import pre_1 from "../images/pre(1).jpg";
import pre_2 from "../images/pre(2).jpg";
import pre_3 from "../images/pre(3).jpg";
import pre_4 from "../images/pre(4).jpg";
const PressAbout = () => {
  return (
    <div className="pressAbout container">
      <div className="press_content">
        <h1 className="title">Press Releases</h1>
        <p className="description">
          Stay updated with the latest happenings and exciting developments at
          YourBank through our press releases.
        </p>
        <div className="all_boxs">
          <div className="boxs">
            <div className="card">
              <img src={pre_1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  YourBank Launches New Rewards Program to Enhance Customer
                  Loyalty and Satisfaction
                </h4>
                <span>Location: India</span>
                <span>Date: 06/11/2024</span>
                <p className="card-text">
                  YourBank is pleased to announce the introduction of our new
                  Rewards Program, aimed at rewarding our loyal customers and
                  enhancing their banking experience. The program offers
                  exclusive benefits, discounts, and personalized offers
                  tailored to individual customer preferences. With this
                  initiative, YourBank reaffirms its commitment to delivering
                  exceptional value and building lasting relationships with our
                  valued customers.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={pre_2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  YourBank Launches New Rewards Program to Enhance Customer
                  Loyalty and Satisfaction
                </h4>
                <span>Location: India</span>
                <span>Date: 06/11/2024</span>
                <p className="card-text">
                  YourBank is pleased to announce the introduction of our new
                  Rewards Program, aimed at rewarding our loyal customers and
                  enhancing their banking experience. The program offers
                  exclusive benefits, discounts, and personalized offers
                  tailored to individual customer preferences. With this
                  initiative, YourBank reaffirms its commitment to delivering
                  exceptional value and building lasting relationships with our
                  valued customers.
                </p>
              </div>
            </div>
          </div>
          <div className="boxs">
            <div className="card">
              <img src={pre_3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  YourBank Launches New Rewards Program to Enhance Customer
                  Loyalty and Satisfaction
                </h4>
                <span>Location: India</span>
                <span>Date: 06/11/2024</span>
                <p className="card-text">
                  YourBank is pleased to announce the introduction of our new
                  Rewards Program, aimed at rewarding our loyal customers and
                  enhancing their banking experience. The program offers
                  exclusive benefits, discounts, and personalized offers
                  tailored to individual customer preferences. With this
                  initiative, YourBank reaffirms its commitment to delivering
                  exceptional value and building lasting relationships with our
                  valued customers.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={pre_4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  YourBank Launches New Rewards Program to Enhance Customer
                  Loyalty and Satisfaction
                </h4>
                <span>Location: India</span>
                <span>Date: 06/11/2024</span>
                <p className="card-text">
                  YourBank is pleased to announce the introduction of our new
                  Rewards Program, aimed at rewarding our loyal customers and
                  enhancing their banking experience. The program offers
                  exclusive benefits, discounts, and personalized offers
                  tailored to individual customer preferences. With this
                  initiative, YourBank reaffirms its commitment to delivering
                  exceptional value and building lasting relationships with our
                  valued customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressAbout;
