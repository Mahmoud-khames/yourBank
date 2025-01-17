import React from "react";
import "./values.css";
const ValuesCareers = () => {
  return (
    <div className="valesCareers container">
      <div className="values_content">
        <h1 className="title">
          Our <span>Values</span>
        </h1>
        <p className="description">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>
      <div className="allBox">
        <div className="boxs">
          <div className="box">
            <div className="title">
              <h4>Integrity</h4>
            </div>
            <div className="description">
              <p>
                We conduct ourselves with utmost honesty, transparency, and
                ethical behavior. We believe in doing what is right for our
                customers, colleagues, and stakeholders, even when faced with
                difficult choices.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="title">
              <h4>Customer Centricity</h4>
            </div>
            <div className="description">
              <p>
                Our customers are at the heart of everything we do. We are
                dedicated to understanding their needs, providing personalized
                solutions, and delivering exceptional service that exceeds
                expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="boxs">
          <div className="box">
            <div className="title">
              <h4>Collaboration</h4>
            </div>
            <div className="description">
              <p>
                We foster a collaborative and inclusive work environment, where
                teamwork and diversity are celebrated. By leveraging the unique
                strengths and perspectives of our employees, we drive innovation
                and achieve greater success together.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="title">
              <h4>Innovation</h4>
            </div>
            <div className="description">
              <p>
                We embrace change and constantly seek innovative solutions to
                meet the evolving needs of our customers. We encourage our
                employees to think creatively, challenge conventions, and
                explore new ideas to drive the future of banking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesCareers;
