import React from "react";
import "./today.css";
import vector from "../../../assets/vector.svg";
const TodayHome = () => {
  return (
    <div className="todayHome container position-relative">
      <div className="vector position-absolute">
        <img src={vector} alt="" />
      </div>
      <div className="today_content">
        <h1 className="title">
          Start your financial journey with
          <span> YourBank today!</span>
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
          pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
          Nascetur viverra arcu sed amet cursus purus.
        </p>
      </div>
      <div className="today_btn">
        <button className="today_btn_frist btn">Open Account</button>
      </div>
    </div>
  );
};

export default TodayHome;
