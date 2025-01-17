import React from 'react';
import "./landing.css"
import vector2 from "../../../assets/vector2.svg";
const LandingSecurity = () => {
    return (
      <div className="landingSecurity container">
        <div className="landingSecurity__content">
          <h1 className="tilte">
            Your Security is Our 
            <span className="span"> Top Priority!</span>
          </h1>
          <p className="description">
            At YourBank, we believe that banking should be more than just
            transactions. It should be an experience that empowers individuals
            and businesses to thrive and reach their financial goals. As a
            trusted financial institution, we are committed to delivering
            exceptional banking services that go beyond expectations. With a
            focus on innovation, personalized solutions, and unwavering
            integrity, we strive to provide the best banking experience for our
            valued customers. Join us on this exciting journey and discover a
            new level of banking excellence.
          </p>
        </div>
        <div className="landingSecurity__img position-relative">
          <div className="vector2 position-absolute">
           <img src= {vector2} alt="" />
          </div>
        </div>
      </div>
    );
}

export default LandingSecurity;
