
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const SliderHome = () => {
  return (
    <div className="sliderHome container">
      <div className="slider_content">
        <div className="text">
          <h1 className="title">
            Our <span>Testimonials</span>
          </h1>
          <p className="description">
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        <div className="pro_btn">
          <button className="pro_btn_frist btn">For Individuals</button>
          <button className="pro_btn_scond btn">For Businesses</button>
        </div>
      </div>
      <div className="slider">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
            rewind={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            490: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 1,
            },
            996: {
              slidesPerView: 1,
            },
            998: {
              slidesPerView: 3,
            },
            1140: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <path
                    d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z"
                    fill="url(#paint0_linear_108_2662)"
                    stroke="#CAFF33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_108_2662"
                      x1="22.1513"
                      y1="8.06677"
                      x2="22.1513"
                      y2="36.5374"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CAFF33" />
                      <stop offset="1" stop-color="#191919" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="box_text">
                <p className="description">
                  I recently started my own business, and YourBank has been
                  instrumental in helping me set up my business accounts and
                  secure the financing I needed. Their expert guidance and
                  tailored solutions have been invaluable.
                </p>
                <p className="name">John D</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <path
                    d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z"
                    fill="url(#paint0_linear_108_2662)"
                    stroke="#CAFF33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_108_2662"
                      x1="22.1513"
                      y1="8.06677"
                      x2="22.1513"
                      y2="36.5374"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CAFF33" />
                      <stop offset="1" stop-color="#191919" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="box_text">
                <p className="description">
                  I recently started my own business, and YourBank has been
                  instrumental in helping me set up my business accounts and
                  secure the financing I needed. Their expert guidance and
                  tailored solutions have been invaluable.
                </p>
                <p className="name">John D</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <path
                    d="M4.84402 20.9212L4.84401 20.9212L4.84306 20.924C3.97266 23.4974 3.53369 25.9874 3.53369 28.3915V35.5374C3.53369 36.3658 4.20526 37.0374 5.03369 37.0374H14.2309C15.0593 37.0374 15.7309 36.3658 15.7309 35.5374L15.7309 28.3116L15.7308 28.3074C15.7054 25.2764 16.1886 22.5199 17.1727 20.0314C18.0778 17.7775 19.1728 15.6054 20.4579 13.5149C20.8813 12.8261 20.699 11.9128 20.0145 11.4567L14.9228 8.06382L14.9228 8.06382C14.3741 7.69814 13.6366 7.72756 13.1287 8.17732C11.4242 9.68636 9.87445 11.4881 8.4778 13.579L8.47711 13.58C6.95041 15.878 5.73918 18.3253 4.84402 20.9212ZM24.5557 20.9212L24.5547 20.924C23.6843 23.4974 23.2454 25.9874 23.2454 28.3915V35.5374C23.2454 36.3658 23.917 37.0374 24.7454 37.0374H33.9425C34.771 37.0374 35.4425 36.3658 35.4425 35.5374L35.4426 28.3116L35.4425 28.3074C35.4171 25.2765 35.9003 22.5201 36.8843 20.0317C37.7894 17.7777 38.8844 15.6055 40.1696 13.5149C40.593 12.8261 40.4107 11.9128 39.7261 11.4567L34.6345 8.06382L34.6345 8.06382C34.0858 7.69814 33.3483 7.72756 32.8403 8.17732L33.1718 8.55167L32.8403 8.17732C31.1359 9.68636 29.5861 11.4881 28.1895 13.579L28.1888 13.58C26.6621 15.878 25.4509 18.3253 24.5557 20.9212Z"
                    fill="url(#paint0_linear_108_2662)"
                    stroke="#CAFF33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_108_2662"
                      x1="22.1513"
                      y1="8.06677"
                      x2="22.1513"
                      y2="36.5374"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CAFF33" />
                      <stop offset="1" stop-color="#191919" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="box_text">
                <p className="description">
                  I recently started my own business, and YourBank has been
                  instrumental in helping me set up my business accounts and
                  secure the financing I needed. Their expert guidance and
                  tailored solutions have been invaluable.
                </p>
                <p className="name">John D</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderHome;
