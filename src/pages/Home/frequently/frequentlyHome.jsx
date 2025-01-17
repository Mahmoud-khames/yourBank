import React from "react";
import "./frequently.css";
const FrequentlyHome = () => {
  return (
    <div className="frequentlyHome container">
      <div className="frequentlyHome__content">
        <div className="title">
          <h1>
            <span>Frequently</span> Asked Questions
          </h1>
        </div>
        <div className="description">
          <p>
            Still you have any questions? Contact our Team via
            support@yourbank.com
          </p>
        </div>
      </div>
      <div className="frequentlyHome__info">
        <div className="boxs ">
          <div className="box position-relative">
            <div className="box_content">
              <h4 className="box_title">
                How do I open an account with YourBank?
              </h4>
              <p className="box_description">
                Opening an account with YourBank is easy. Simply visit our
                website and click on the "Open an Account" button. Follow the
                prompts, provide the required information, and complete the
                application process. If you have any questions or need
                assistance, our customer support team is available to help.
              </p>
            </div>
          </div>
          <div className="box position-relative">
            
            <div className="box_content">
              <h4 className="box_title">
                Are my transactions and personal information secure?
              </h4>
              <p className="box_description">
                At YourBank, we prioritize the security of your transactions and
                personal information. We employ industry-leading encryption and
                multi-factor authentication to ensure that your data is
                protected. Additionally, we regi lariy update our security
                measures to stay ahead of emerging threats. You can bank with
                confidence knowing that we have robust security systems in
                place.
              </p>
            </div>
          </div>
        </div>
        <div className="boxs frist">
          <div className="box position-relative">
          <div className="abslot position-absolute"></div>
            <div className="box_content">
              <h4 className="box_title">
                What documents do I need to provide to apply for a loan?
              </h4>
              <p className="box_description">
                The documents required for a loan application may vary depending
                on the type of loan you are applying for. Generally, you will
                need to provide identification documents such as a passport or
                driver's license, proof of income such as pay stubs or tax
                returns, and information about the collateral if applicable. Our
                loan officers will guide you through the specific requirements
                during the application process.
              </p>
            </div>
          </div>
          <div className="box position-relative">
            <div className="abslot position-absolute"></div>
            <div className="box_content">
              <h4 className="box_title">
                How can I access my accounts online?
              </h4>
              <p className="box_description">
                Accessing your accounts online is simple and secure. Visit our
                website and click on the "Login" button. Enter your username and
                password to access your accounts. If you haven't registered for
                online banking, click on the "Enroll Now" button and follow the
                registration process. If you need assistance, our customer
                support team is available to guide you.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default FrequentlyHome;
