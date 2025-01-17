import React from "react";
import "./misssion.css";
import missionOne from "../../../assets/mission/missionOne.svg";
import missionTwo from "../../../assets/mission/missionTwo.svg";
const MissionAbout = () => {
  return (
    <div className="missionAbout container">
      <div className="mission_content">
        <h1 className="tilte">Mission & Vision</h1>
        <p className="description">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development
        </p>
      </div>
      <div className="all_boxs">
        <div className="boxs">
          <div className="box_img box_img_frist position-relative">
            <div className="icon position-absolute">
             <img src={missionOne} alt="" />
            </div>
            <div className="img "></div>
          </div>
          <div className="box_content frist">
            <h4 className="title">Mission</h4>
            <p className="description">
              At YourBank, our mission is to empower our customers to achieve
              financial success. We are dedicated to delivering innovative
              banking solutions that cater to their unique needs. Through
              personalized services, expert guidance, and cutting-edge
              technology, we aim to build strong, lasting relationships with our
              customers. Our mission is to be their trusted partner, helping
              them navigate their financial journey and realize their dreams.
            </p>
          </div>
        </div>
        <div className="boxs boxs_2">
          <div className="box_content second">
            <h4 className="title">Vision</h4>
            <p className="description">
              Our vision at YourBank is to redefine banking by creating a
              seamless and personalized experience for our customers. We
              envision a future where banking is accessible, transparent, and
              tailored to individual preferences. Through continuous innovation
              and collaboration, we strive to be at the forefront of the
              industry, setting new standards for customer-centric banking. Our
              vision is to be the preferred financial institution, known for our
              unwavering commitment to excellence, trust, and customer
              satisfaction.
            </p>
          </div>
          <div className="box_img box_img_second position-relative">
            <div className="icon position-absolute">
            <img src={missionTwo} alt="" />
            </div>
            <div className="img_2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAbout;
