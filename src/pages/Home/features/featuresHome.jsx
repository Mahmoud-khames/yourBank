import React from "react";
import "./features.css";
const FeaturesHome = () => {
  return (
    <div className="featuresHome container">
      <div className="featuresHome__content">
        <div className="title">
          <h1>
            Our <span>Features</span>
          </h1>
        </div>
        <div className="description">
          <p>
            Experience a host of powerful features at YourBank, including
            seamless online banking, secure transactions, and personalized
            financial insights, all designed to enhance your banking experience
          </p>
        </div>
      </div>
      <div className="featuresHome__info">
        <div className="div_btn">
          <button className="btn  frist">Online Banking</button>
          <button className="btn">Financial Tools</button>
          <button className="btn">Customer Support</button>
        </div>
        <div className="boxs">
          <div className="box position-relative">
            <div className="abslot position-absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                  stroke="#CAFF33"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="box_content">
              <h4 className="box_title">24/7 Account Access</h4>
              <p className="box_description">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </div>
          </div>
          <div className="box position-relative">
            <div className="abslot position-absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                  stroke="#CAFF33"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="box_content">
              <h4 className="box_title">Secure Transactions</h4>
              <p className="box_description">
                Rest assured knowing that your transactions are protected by
                industry-leading security measures. We employ encryption and
                multi-factor authentication to safeguard your financial
                information.
              </p>
            </div>
          </div>
        </div>
        <div className="boxs">
          <div className="box position-relative">
            <div className="abslot position-absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                  stroke="#CAFF33"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="box_content">
              <h4 className="box_title">Mobile Banking App</h4>
              <p className="box_description">
                Stay connected to your finances on the go with our user-friendly
                mobile banking app. Easily manage your accounts, deposit checks,
                and make payments from your smartphone or tablet.
              </p>
            </div>
          </div>
          <div className="box position-relative">
            <div className="abslot position-absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                  stroke="#CAFF33"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="box_content">
              <h4 className="box_title">Bill Pay and Transfers</h4>
              <p className="box_description">
                Save time and avoid late fees with our convenient bill pay
                service. Set up recurring payments or make one-time transfers
                between your accounts with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHome;
