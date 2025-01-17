import React from 'react';
import "./landingCareers.css"
import vector2 from "../../../assets/vector2.svg";
const LandinCareers = () => {
    return (
      <div className="landingCareers container">
        <div className="landingCareers__content">
          <h1 className="tilte">
            Welcome to <span className='span'>YourBank</span> Careers!
          </h1>
          <p className="description">
            Join our team and embark on a rewarding journey in the banking
            industry. At YourBank, we are committed to fostering a culture of
            excellence and providing opportunities for professional growth. With
            a focus on innovation, customer service, and integrity, we strive to
            make a positive impact in the lives of our customers and
            communities. Join us today and be a part of our mission to shape the
            future of banking.
          </p>
        </div>
        <div className="landingCareers__img position-relative">
          <div className="vector2 position-absolute">
           <img src={vector2} alt="" />
          </div>
        </div>
          {/* <img className="" src={img_land} alt="" /> */}
      </div>
    );
}

export default LandinCareers;
