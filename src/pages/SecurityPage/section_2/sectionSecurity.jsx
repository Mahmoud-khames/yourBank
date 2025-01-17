import React from "react";
import "./section.css";
const SectionSceurity = () => {
  return (
    <div className="sectionSceurity container">
      <div className="sectionSceurity_content">
        <h1 className="title">
          How We <span>Protect You</span>
        </h1>
        <p className="description">
          At YourBank, we prioritize the security and confidentiality of your
          financial information. Our state-of-the-art encryption technology and
          stringent data protection measures ensure your assets and transactions
          are safeguarded at all times
        </p>
      </div>
      <div className="allBoxs position-relative">
        <div className="overlay position-absolute"></div>
        <div className="boxs">
          <div className="box">
            <div className="title">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M7 3.5C5.067 3.5 3.5 5.067 3.5 7V9.625C3.5 11.558 5.067 13.125 7 13.125H9.625C11.558 13.125 13.125 11.558 13.125 9.625V7C13.125 5.067 11.558 3.5 9.625 3.5H7Z"
                    fill="#CAFF33"
                  />
                  <path
                    d="M18.375 3.5C16.442 3.5 14.875 5.067 14.875 7V9.625C14.875 11.558 16.442 13.125 18.375 13.125H21C22.933 13.125 24.5 11.558 24.5 9.625V7C24.5 5.067 22.933 3.5 21 3.5H18.375Z"
                    fill="#CAFF33"
                  />
                  <path
                    d="M7 14.875C5.067 14.875 3.5 16.442 3.5 18.375V21C3.5 22.933 5.067 24.5 7 24.5H9.625C11.558 24.5 13.125 22.933 13.125 21V18.375C13.125 16.442 11.558 14.875 9.625 14.875H7Z"
                    fill="#CAFF33"
                  />
                  <path
                    d="M20.5625 15.75C20.5625 15.2668 20.1707 14.875 19.6875 14.875C19.2043 14.875 18.8125 15.2668 18.8125 15.75V18.8125H15.75C15.2668 18.8125 14.875 19.2043 14.875 19.6875C14.875 20.1707 15.2668 20.5625 15.75 20.5625H18.8125V23.625C18.8125 24.1082 19.2043 24.5 19.6875 24.5C20.1707 24.5 20.5625 24.1082 20.5625 23.625V20.5625H23.625C24.1082 20.5625 24.5 20.1707 24.5 19.6875C24.5 19.2043 24.1082 18.8125 23.625 18.8125H20.5625V15.75Z"
                    fill="#CAFF33"
                  />
                </svg>
              </div>
              <h4>Secure Online Banking Platform</h4>
            </div>
            <div className="description">
              <p>
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="title">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M13.5852 1.85459C13.8441 1.71514 14.1559 1.71514 14.4148 1.85459L25.7898 7.97959C26.0733 8.1322 26.25 8.4281 26.25 8.75C26.25 9.0719 26.0733 9.3678 25.7898 9.52041L14.4148 15.6454C14.1559 15.7849 13.8441 15.7849 13.5852 15.6454L2.21016 9.52041C1.92674 9.3678 1.75 9.0719 1.75 8.75C1.75 8.4281 1.92674 8.1322 2.21016 7.97959L13.5852 1.85459Z"
                    fill="#CAFF33"
                  />
                  <path
                    d="M3.80879 12.3688L12.7555 17.1862C13.5324 17.6046 14.4676 17.6046 15.2445 17.1862L24.1912 12.3688L25.7898 13.2296C26.0733 13.3822 26.25 13.6781 26.25 14C26.25 14.3219 26.0733 14.6178 25.7898 14.7704L14.4148 20.8954C14.1559 21.0349 13.8441 21.0349 13.5852 20.8954L2.21016 14.7704C1.92674 14.6178 1.75 14.3219 1.75 14C1.75 13.6781 1.92674 13.3822 2.21016 13.2296L3.80879 12.3688Z"
                    fill="#CAFF33"
                  />
                  <path
                    d="M12.7555 22.4362L3.80879 17.6188L2.21016 18.4796C1.92674 18.6322 1.75 18.9281 1.75 19.25C1.75 19.5719 1.92674 19.8678 2.21016 20.0204L13.5852 26.1454C13.8441 26.2849 14.1559 26.2849 14.4148 26.1454L25.7898 20.0204C26.0733 19.8678 26.25 19.5719 26.25 19.25C26.25 18.9281 26.0733 18.6322 25.7898 18.4796L24.1912 17.6188L15.2445 22.4362C14.4676 22.8546 13.5324 22.8546 12.7555 22.4362Z"
                    fill="#CAFF33"
                  />
                </svg>
              </div>
              <h4>Multi-Factor Authentication</h4>
            </div>
            <div className="description">
              <p>
                To enhance the security of your online banking experience, we
                employ multi-factor authentication. This additional layer of
                security requires you to provide multiple pieces of
                identification, such as a password and a one-time verification
                code, to access your account.
              </p>
            </div>
          </div>
        </div>
        <div className="boxs">
          <div className="box">
            <div className="title">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 5.25C10.8907 5.25 11.234 5.50898 11.3413 5.88462L12.2901 9.20517C12.7053 10.6586 13.8414 11.7947 15.2948 12.2099L18.6154 13.1587C18.991 13.266 19.25 13.6093 19.25 14C19.25 14.3907 18.991 14.734 18.6154 14.8413L15.2948 15.7901C13.8414 16.2053 12.7053 17.3414 12.2901 18.7948L11.3413 22.1154C11.234 22.491 10.8907 22.75 10.5 22.75C10.1093 22.75 9.76599 22.491 9.65867 22.1154L8.70994 18.7948C8.29468 17.3414 7.15858 16.2053 5.70517 15.7901L2.38462 14.8413C2.00898 14.734 1.75 14.3907 1.75 14C1.75 13.6093 2.00898 13.266 2.38462 13.1587L5.70517 12.2099C7.15858 11.7947 8.29468 10.6586 8.70994 9.20517L9.65867 5.88462C9.76599 5.50898 10.1093 5.25 10.5 5.25Z"
                    fill="#CAFF33"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21 1.75C21.4015 1.75 21.7515 2.02326 21.8489 2.41278L22.1509 3.62082C22.4252 4.71807 23.2819 5.5748 24.3792 5.84912L25.5872 6.15113C25.9767 6.24851 26.25 6.59849 26.25 7C26.25 7.40151 25.9767 7.75149 25.5872 7.84887L24.3792 8.15088C23.2819 8.4252 22.4252 9.28193 22.1509 10.3792L21.8489 11.5872C21.7515 11.9767 21.4015 12.25 21 12.25C20.5985 12.25 20.2485 11.9767 20.1511 11.5872L19.8491 10.3792C19.5748 9.28193 18.7181 8.4252 17.6208 8.15088L16.4128 7.84887C16.0233 7.75149 15.75 7.40151 15.75 7C15.75 6.59849 16.0233 6.24851 16.4128 6.15113L17.6208 5.84912C18.7181 5.5748 19.5748 4.71807 19.8491 3.62082L20.1511 2.41278C20.2485 2.02326 20.5985 1.75 21 1.75Z"
                    fill="#CAFF33"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.25 17.5C19.6266 17.5 19.961 17.741 20.0801 18.0983L20.5401 19.4782C20.7142 20.0007 21.1243 20.4108 21.6468 20.5849L23.0267 21.0449C23.384 21.164 23.625 21.4984 23.625 21.875C23.625 22.2516 23.384 22.586 23.0267 22.7051L21.6468 23.1651C21.1243 23.3392 20.7142 23.7493 20.5401 24.2718L20.0801 25.6517C19.961 26.009 19.6266 26.25 19.25 26.25C18.8734 26.25 18.539 26.009 18.4199 25.6517L17.9599 24.2718C17.7858 23.7493 17.3757 23.3392 16.8532 23.1651L15.4733 22.7051C15.116 22.586 14.875 22.2516 14.875 21.875C14.875 21.4984 15.116 21.164 15.4733 21.0449L16.8532 20.5849C17.3757 20.4108 17.7858 20.0007 17.9599 19.4782L18.4199 18.0983C18.539 17.741 18.8734 17.5 19.25 17.5Z"
                    fill="#CAFF33"
                  />
                </svg>
              </div>
              <h4>Fraud Monitoring</h4>
            </div>
            <div className="description">
              <p>
                We have sophisticated fraud detection systems in place to
                monitor your accounts for any suspicious activities. Our
                dedicated team works around the clock to detect and prevent
                unauthorized transactions, providing you with peace of mind.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="title">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 2.625C7.71776 2.625 2.625 7.71776 2.625 14C2.625 20.2822 7.71776 25.375 14 25.375C20.2822 25.375 25.375 20.2822 25.375 14C25.375 7.71776 20.2822 2.625 14 2.625ZM10.5 8.75C10.0168 8.75 9.625 9.14175 9.625 9.625C9.625 10.1082 10.0168 10.5 10.5 10.5H12.25C13.3929 10.5 14.3653 11.2305 14.7256 12.25H10.5C10.0168 12.25 9.625 12.6418 9.625 13.125C9.625 13.6082 10.0168 14 10.5 14H14.7256C14.3653 15.0195 13.3929 15.75 12.25 15.75H10.5C10.1461 15.75 9.82704 15.9632 9.69161 16.2902C9.55617 16.6171 9.63103 16.9935 9.88128 17.2437L13.3813 20.7437C13.723 21.0854 14.277 21.0854 14.6187 20.7437C14.9604 20.402 14.9604 19.848 14.6187 19.5063L12.5987 17.4863C14.5582 17.3318 16.1546 15.8862 16.5375 14H17.5C17.9832 14 18.375 13.6082 18.375 13.125C18.375 12.6418 17.9832 12.25 17.5 12.25H16.5375C16.4062 11.6035 16.1324 11.0087 15.7503 10.5H17.5C17.9832 10.5 18.375 10.1082 18.375 9.625C18.375 9.14175 17.9832 8.75 17.5 8.75H10.5Z"
                    fill="#CAFF33"
                  />
                </svg>
              </div>
              <h4>Secure Mobile Banking</h4>
            </div>
            <div className="description">
              <p>
                Our mobile banking app is designed with the same level of
                security as our online banking platform. You can confidently
                access your accounts, make transactions, and manage your
                finances on the go, knowing that your information is protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSceurity;
