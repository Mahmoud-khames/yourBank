import React from "react";
import inr from "../images/Image.jpg";
import usd from "../images/Image (1).jpg";
import img_1 from "../images/Icon.jpg";
import img_2 from "../images/Icon (1).jpg";
import img_3 from "../images/Icon (2).jpg";
import img_4 from "../images/Icon (3).jpg";
import "./landing.css";
import vector from '../../../assets/vector.svg'
import { useNavigate } from "react-router";
const Landinghome = () => {
  const navigate = useNavigate();
  return (
    <div className="landinghome container">
      <div className="vector position-absolute">
        <img src={vector} alt="" />
      </div>
      <div className="landinghome__content">
        <div className="landinghome__text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.16907 2.16563C6.85588 1.37578 7.86943 0.875 9 0.875C10.1305 0.875 11.144 1.37573 11.8308 2.16551C12.8751 2.09255 13.946 2.45513 14.7455 3.25464C15.545 4.05415 15.9076 5.12507 15.8347 6.16933C16.6243 6.85613 17.125 7.86957 17.125 9C17.125 10.1306 16.6242 11.1443 15.8342 11.8311C15.907 12.8751 15.5444 13.9458 14.7451 14.7452C13.9457 15.5446 12.875 15.9072 11.8309 15.8344C11.1441 16.6242 10.1306 17.125 9 17.125C7.8695 17.125 6.856 16.6243 6.1692 15.8345C5.12493 15.9075 4.054 15.5449 3.25448 14.7454C2.45496 13.9459 2.09238 12.8749 2.16534 11.8307C1.37565 11.1439 0.875 10.1304 0.875 9C0.875 7.86951 1.37571 6.85602 2.16546 6.16921C2.09258 5.12504 2.45517 4.05423 3.25462 3.25478C4.05406 2.45533 5.12489 2.09274 6.16907 2.16563ZM12.0086 7.48827C12.2092 7.20739 12.1442 6.81705 11.8633 6.61642C11.5824 6.41579 11.192 6.48084 10.9914 6.76173L8.29525 10.5364L6.94194 9.18306C6.69786 8.93898 6.30214 8.93898 6.05806 9.18306C5.81398 9.42714 5.81398 9.82286 6.05806 10.0669L7.93306 11.9419C8.06297 12.0719 8.24346 12.138 8.42655 12.1229C8.60964 12.1077 8.7768 12.0128 8.88358 11.8633L12.0086 7.48827Z"
              fill="#CAFF33"
            />
          </svg>
          <span>No LLC Required, No Credit Check.</span>
        </div>
        <div className="landing_title">
          <h1>
            Welcome to YourBank Empowering Your <span>Financial Journey</span>
          </h1>
          <p>
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>
        </div>
        <div className="landing_button">
          <button className="btn" onClick={()=>{
            navigate('/profile')
          }}>Open Account</button>
        </div>
      </div>
      <div className="landinghome__info">
        <div className="absolute position-absolute">
          <div className="layer_absolute">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.41518 4.38867C8.70122 4.38867 8.9331 4.61928 8.9331 4.90375V8.50926H12.5585C12.8446 8.50926 13.0765 8.73986 13.0765 9.02433C13.0765 9.3088 12.8446 9.5394 12.5585 9.5394H8.9331V13.1449C8.9331 13.4294 8.70122 13.66 8.41518 13.66C8.12914 13.66 7.89726 13.4294 7.89726 13.1449V9.5394H4.27183C3.98579 9.5394 3.75391 9.3088 3.75391 9.02433C3.75391 8.73986 3.98579 8.50926 4.27183 8.50926H7.89726V4.90375C7.89726 4.61928 8.12914 4.38867 8.41518 4.38867Z"
                  fill="#1A1A1A"
                />
              </svg>
            </div>
            <div className="layer_text">
              <h5 className="layer_head">+ $5000,00</h5>
              <p className="layer_p">Monthly Income</p>
            </div>
          </div>
        </div>
        <div className="transactions">
          <div className="title_trans">
            <h5>Your Transactions</h5>
          </div>
          <div className="layer">
            <div className="layer_one">
              <div className="layer_part1">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7072 1.94287C11.4737 2.19302 11.4882 2.5841 11.7398 2.81638L13.4803 4.42374L6.36197 4.42374C6.01872 4.42374 5.74047 4.70047 5.74047 5.04183C5.74047 5.38319 6.01872 5.65992 6.36197 5.65992L13.4803 5.65992L11.7398 7.26728C11.4882 7.49956 11.4737 7.89064 11.7072 8.14079C11.9408 8.39094 12.334 8.40542 12.5856 8.17314L15.4859 5.49476C15.6126 5.37781 15.6845 5.2137 15.6845 5.04183C15.6845 4.86996 15.6126 4.70585 15.4859 4.5889L12.5856 1.91052C12.334 1.67824 11.9408 1.69273 11.7072 1.94287ZM6.40307 8.53581C6.1695 8.28566 5.77626 8.27118 5.52473 8.50346L2.62438 11.1818C2.49774 11.2988 2.42578 11.4629 2.42578 11.6348C2.42578 11.8066 2.49774 11.9707 2.62438 12.0877L5.52473 14.7661C5.77626 14.9984 6.1695 14.9839 6.40307 14.7337C6.63663 14.4836 6.62207 14.0925 6.37054 13.8602L4.62997 12.2529H11.7483C12.0916 12.2529 12.3698 11.9761 12.3698 11.6348C12.3698 11.2934 12.0916 11.0167 11.7483 11.0167H4.62997L6.37054 9.40932C6.62207 9.17704 6.63663 8.78596 6.40307 8.53581Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </div>
                <div className="layer_text">
                  <h5 className="layer_head">Transaction</h5>
                  <p className="layer_p">Joel Kenley</p>
                </div>
                <span>-$68.00</span>
              </div>
            </div>
            <div className="layer_two">
              <div className="layer_part1">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7072 1.94287C11.4737 2.19302 11.4882 2.5841 11.7398 2.81638L13.4803 4.42374L6.36197 4.42374C6.01872 4.42374 5.74047 4.70047 5.74047 5.04183C5.74047 5.38319 6.01872 5.65992 6.36197 5.65992L13.4803 5.65992L11.7398 7.26728C11.4882 7.49956 11.4737 7.89064 11.7072 8.14079C11.9408 8.39094 12.334 8.40542 12.5856 8.17314L15.4859 5.49476C15.6126 5.37781 15.6845 5.2137 15.6845 5.04183C15.6845 4.86996 15.6126 4.70585 15.4859 4.5889L12.5856 1.91052C12.334 1.67824 11.9408 1.69273 11.7072 1.94287ZM6.40307 8.53581C6.1695 8.28566 5.77626 8.27118 5.52473 8.50346L2.62438 11.1818C2.49774 11.2988 2.42578 11.4629 2.42578 11.6348C2.42578 11.8066 2.49774 11.9707 2.62438 12.0877L5.52473 14.7661C5.77626 14.9984 6.1695 14.9839 6.40307 14.7337C6.63663 14.4836 6.62207 14.0925 6.37054 13.8602L4.62997 12.2529H11.7483C12.0916 12.2529 12.3698 11.9761 12.3698 11.6348C12.3698 11.2934 12.0916 11.0167 11.7483 11.0167H4.62997L6.37054 9.40932C6.62207 9.17704 6.63663 8.78596 6.40307 8.53581Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </div>
                <div className="layer_text">
                  <h5 className="layer_head">Transaction</h5>
                  <p className="layer_p">Mark Smith</p>
                </div>
                <span>-$68.00</span>
              </div>
            </div>
            <div className="layer_three">
              <div className="layer_part1">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7072 1.94287C11.4737 2.19302 11.4882 2.5841 11.7398 2.81638L13.4803 4.42374L6.36197 4.42374C6.01872 4.42374 5.74047 4.70047 5.74047 5.04183C5.74047 5.38319 6.01872 5.65992 6.36197 5.65992L13.4803 5.65992L11.7398 7.26728C11.4882 7.49956 11.4737 7.89064 11.7072 8.14079C11.9408 8.39094 12.334 8.40542 12.5856 8.17314L15.4859 5.49476C15.6126 5.37781 15.6845 5.2137 15.6845 5.04183C15.6845 4.86996 15.6126 4.70585 15.4859 4.5889L12.5856 1.91052C12.334 1.67824 11.9408 1.69273 11.7072 1.94287ZM6.40307 8.53581C6.1695 8.28566 5.77626 8.27118 5.52473 8.50346L2.62438 11.1818C2.49774 11.2988 2.42578 11.4629 2.42578 11.6348C2.42578 11.8066 2.49774 11.9707 2.62438 12.0877L5.52473 14.7661C5.77626 14.9984 6.1695 14.9839 6.40307 14.7337C6.63663 14.4836 6.62207 14.0925 6.37054 13.8602L4.62997 12.2529H11.7483C12.0916 12.2529 12.3698 11.9761 12.3698 11.6348C12.3698 11.2934 12.0916 11.0167 11.7483 11.0167H4.62997L6.37054 9.40932C6.62207 9.17704 6.63663 8.78596 6.40307 8.53581Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </div>
                <div className="layer_text">
                  <h5 className="layer_head opacity-0">Transaction</h5>
                  <p className="layer_p">Lenen Roy</p>
                </div>
                <span>-$68.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="exchange">
          <h5>Money Exchange</h5>
          <div className="box">
            <div className="box_all">
              <div className="box_img">
                <img src={inr} alt="" />
                <span>INR</span>
              </div>
              <div className="box_text">
                <p>Indian Rupees</p>
              </div>

              <div className="p">5,0000</div>
            </div>
            <div className="box_all">
              <div className="box_img">
                <img src={usd} alt="" />
                <span>USD</span>
              </div>
              <div className="box_text">
                <p>United States Dollar</p>
              </div>

              <div className="p">12,00</div>
            </div>
          </div>
        </div>
        <button className="btn">Exchange</button>
        <div className="support position-absolute">
          <div className="sup_text">
            <p>Supported Currency</p>
          </div>
          <div className="sup_icon">
            <img src={img_1} alt="" />
            <img src={img_2} alt="" />
            <img src={img_3} alt="" />
            <img src={img_4} alt="" />
          </div>
        </div>
        <div className="vector_2 position-absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="219"
            height="201"
            viewBox="0 0 219 201"
            fill="none"
          >
            <g opacity="0.4">
              <path
                d="M155.688 1.80912L195.723 0.349854L194.271 40.3995L187.598 40.166L188.619 12.1845L59.5665 141.286L54.8475 136.565L183.907 7.45649L155.929 8.47798L155.688 1.80912Z"
                fill="url(#paint0_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M128.396 89.9417L128.199 84.3965L161.479 83.178L160.276 116.478L154.726 116.281L155.579 93.0207L48.2906 200.35L44.3667 196.424L151.662 89.088L128.396 89.9417Z"
                fill="url(#paint1_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M173.981 104.024L173.886 101.331L190.041 100.74L189.458 116.909L186.766 116.814L187.175 105.519L135.091 157.623L133.188 155.718L185.271 103.615L173.981 104.024Z"
                fill="url(#paint2_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M104.808 102.28L104.714 99.5873L120.869 98.9963L120.285 115.158L117.594 115.063L118.002 103.775L65.9192 155.871L64.0156 153.967L116.106 101.864L104.808 102.28Z"
                fill="url(#paint3_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M75.8166 16.307L75.7217 13.6147L91.877 13.0237L91.2862 29.1851L88.5949 29.0902L89.0106 17.8028L36.9273 69.8987L35.0237 67.9943L87.107 15.8911L75.8166 16.307Z"
                fill="url(#paint4_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M187.97 53.2849L187.919 51.9205L196.117 51.6213L195.818 59.8224L194.454 59.7786L194.665 54.0437L168.233 80.4857L167.271 79.5153L193.695 53.0733L187.97 53.2849Z"
                fill="url(#paint5_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M93.5691 77.5452L93.5253 76.1807L101.723 75.8816L101.424 84.0827L100.06 84.0389L100.265 78.304L73.84 104.746L72.8699 103.776L99.3018 77.3409L93.5691 77.5452Z"
                fill="url(#paint6_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M210.251 98.5149L210.208 97.1505L218.406 96.8513L218.107 105.052L216.743 105.009L216.947 99.2737L190.522 125.716L189.552 124.745L215.984 98.3106L210.251 98.5149Z"
                fill="url(#paint7_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M130.949 3.1079L130.905 1.74349L139.103 1.44434L138.804 9.64542L137.44 9.59435L137.644 3.86672L111.219 30.3014L110.249 29.3382L136.681 2.89631L130.949 3.1079Z"
                fill="url(#paint8_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M110.359 68.7532L111.205 45.4924L3.92394 152.822L0 148.896L107.296 41.5597L84.0291 42.4134L83.8322 36.8609L117.113 35.6497L115.909 68.9502L110.359 68.7532Z"
                fill="url(#paint9_linear_301_4938)"
                style={{ mixBlendMode: "screen" }}
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_301_4938"
                x1="180.481"
                y1="-8.45197"
                x2="85.3747"
                y2="156.196"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_301_4938"
                x1="148.809"
                y1="75.8603"
                x2="69.7361"
                y2="212.741"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_301_4938"
                x1="183.89"
                y1="97.1878"
                x2="145.503"
                y2="163.638"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_301_4938"
                x1="114.718"
                y1="95.4443"
                x2="76.3385"
                y2="161.89"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_301_4938"
                x1="85.726"
                y1="9.47169"
                x2="47.3466"
                y2="75.9174"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_301_4938"
                x1="192.996"
                y1="49.8187"
                x2="173.516"
                y2="83.5359"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_301_4938"
                x1="98.6016"
                y1="74.0789"
                x2="79.1239"
                y2="107.8"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_301_4938"
                x1="215.284"
                y1="95.0487"
                x2="195.806"
                y2="128.77"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_301_4938"
                x1="135.981"
                y1="-0.357861"
                x2="116.511"
                y2="33.3594"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_301_4938"
                x1="104.442"
                y1="28.332"
                x2="25.3694"
                y2="165.213"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.11" stop-color="#CAFF33" />
                <stop offset="1" stop-color="#191919" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Landinghome;
