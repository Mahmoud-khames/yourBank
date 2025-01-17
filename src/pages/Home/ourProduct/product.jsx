import React from "react";
import "./product.css";
const ProductHome = () => {
  return (
    <div className="productHome container">
      <div className="product_content">
        <div>
          <h1 className="title">
            Our <span>Product</span>
          </h1>
          <p className="description">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
          </p>
        </div>
        <div className="pro_btn">
          <button className="pro_btn_frist btn">For Individuals</button>
          <button className="pro_btn_scond btn">For Businesses</button>
        </div>
      </div>
      <div className="product_info">
        <div className="box">
          <div className="icon">
            <span></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="28"
              viewBox="0 0 33 28"
              fill="none"
            >
              <path
                d="M14.5454 18.1814C13.5908 18.1814 13.0316 17.644 13.0316 16.6796V15.5637C9.02211 15.2881 5.02625 14.4615 0.880371 12.877V10.6038C5.98089 12.8633 11.0951 13.6624 16.6593 13.6624C22.2372 13.6624 27.3513 12.8633 32.4518 10.6038V12.877C28.3059 14.4615 24.31 15.2881 20.3006 15.5637V16.6796C20.3006 17.644 19.7414 18.1814 18.7867 18.1814H14.5454ZM5.09444 27.3432H28.2377C31.0608 27.3432 32.4518 25.9656 32.4518 23.1412V9.73586C32.4518 6.9115 31.0608 5.53378 28.2377 5.53378H5.09444C2.28506 5.53378 0.880371 6.9115 0.880371 9.73586V23.1412C0.880371 25.9656 2.28506 27.3432 5.09444 27.3432ZM9.74492 6.7324H11.8588V4.29382C11.8588 3.24673 12.4725 2.65431 13.5362 2.65431H19.7959C20.8597 2.65431 21.4598 3.24673 21.4598 4.29382V6.70485H23.5736V4.44537C23.5736 1.85523 22.2234 0.642822 19.7551 0.642822H13.5635C11.2314 0.642822 9.74492 1.85523 9.74492 4.44537V6.7324Z"
                fill="#CAFF33"
              />
            </svg>
          </div>
          <h4 className="title">Checking Accounts</h4>
          <p className="description">
            Enjoy easy and convenient access to your funds with our range of
            checking account options. Benefit from features such as online and
            mobile banking, debit cards, and free ATM access.
          </p>
        </div>
        <div className="line"></div>
        <div className="box">
          <div className="icon">
          <span></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M4.78125 4.25C3.31424 4.25 2.125 5.43924 2.125 6.90625V7.96875C2.125 9.43576 3.31424 10.625 4.78125 10.625H29.2188C30.6858 10.625 31.875 9.43576 31.875 7.96875V6.90625C31.875 5.43924 30.6858 4.25 29.2188 4.25H4.78125Z"
                fill="#CAFF33"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.37296 12.75L5.13764 25.7496C5.26978 27.996 7.13003 29.75 9.3803 29.75H24.6193C26.8696 29.75 28.7298 27.996 28.8619 25.7496L29.6266 12.75H4.37296ZM17 14.875C17.5868 14.875 18.0625 15.3507 18.0625 15.9375V22.9349L20.4987 20.4987C20.9136 20.0838 21.5864 20.0838 22.0013 20.4987C22.4162 20.9136 22.4162 21.5864 22.0013 22.0013L17.7513 26.2513C17.3364 26.6662 16.6636 26.6662 16.2487 26.2513L11.9987 22.0013C11.5838 21.5864 11.5838 20.9136 11.9987 20.4987C12.4136 20.0838 13.0864 20.0838 13.5013 20.4987L15.9375 22.9349V15.9375C15.9375 15.3507 16.4132 14.875 17 14.875Z"
                fill="#CAFF33"
              />
            </svg>
          </div>
          <h4 className="title">Savings Accounts</h4>
          <p className="description">
            Build your savings with our competitive interest rates and flexible
            savings account options. Whether you're saving for a specific goal
            or want to grow your wealth over time, we have the right account for
            you.
          </p>
        </div>
        <div className="line"></div>
        <div className="box">
          <div className="icon">
          <span></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
            >
              <path
                d="M17.3335 10.625C15.5731 10.625 14.146 12.0521 14.146 13.8125C14.146 15.5729 15.5731 17 17.3335 17C19.0939 17 20.521 15.5729 20.521 13.8125C20.521 12.0521 19.0939 10.625 17.3335 10.625Z"
                fill="#CAFF33"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.4585 6.90625C2.4585 5.43924 3.64774 4.25 5.11475 4.25H29.5522C31.0193 4.25 32.2085 5.43924 32.2085 6.90625V20.7188C32.2085 22.1858 31.0193 23.375 29.5522 23.375H5.11475C3.64774 23.375 2.4585 22.1858 2.4585 20.7188V6.90625ZM12.021 13.8125C12.021 10.8785 14.3995 8.5 17.3335 8.5C20.2675 8.5 22.646 10.8785 22.646 13.8125C22.646 16.7465 20.2675 19.125 17.3335 19.125C14.3995 19.125 12.021 16.7465 12.021 13.8125ZM26.896 12.75C26.3092 12.75 25.8335 13.2257 25.8335 13.8125V13.8231C25.8335 14.4099 26.3092 14.8856 26.896 14.8856H26.9066C27.4934 14.8856 27.9691 14.4099 27.9691 13.8231V13.8125C27.9691 13.2257 27.4934 12.75 26.9066 12.75H26.896ZM6.7085 13.8125C6.7085 13.2257 7.18419 12.75 7.771 12.75H7.78162C8.36842 12.75 8.84412 13.2257 8.84412 13.8125V13.8231C8.84412 14.4099 8.36842 14.8856 7.78162 14.8856H7.771C7.18419 14.8856 6.7085 14.4099 6.7085 13.8231V13.8125Z"
                fill="#CAFF33"
              />
              <path
                d="M3.521 25.5C2.93419 25.5 2.4585 25.9757 2.4585 26.5625C2.4585 27.1493 2.93419 27.625 3.521 27.625C11.1711 27.625 18.5805 28.6481 25.6207 30.5644C27.3073 31.0235 29.021 29.7738 29.021 27.9864V26.5625C29.021 25.9757 28.5453 25.5 27.9585 25.5H3.521Z"
                fill="#CAFF33"
              />
            </svg>
          </div>
          <h4 className="title">Loans and Mortgages</h4>
          <p className="description">
            Realize your dreams with our flexible loan and mortgage options.
            From personal loans to home mortgages, our experienced loan officers
            are here to guide you through the application process and help you
            secure the funds you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
