import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
const Sigup = () => {
  const [open, setOpen] = useState(true);
  const [block, setBlock] = useState(false);
  const [Error, setError] = useState(null);
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, settype] = useState("password");

  const error = useRef(null);
  const navigation = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://yourbankapi.vercel.app/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fristName,
          lastName,
          email,
          password,
        }),
      });

      if (response) {
        const data = await response.json();

        setError(data.message);
        if (data.data === null) {
          setBlock(true);
        } else {
          setBlock(false);
          alert("Sign Up Successful");
          setTimeout(() => {
            navigation("/verificationCode");
          }, 3000);
        }

        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="signupPage container position-relative">
      <form className="login__form" onSubmit={onSubmit}>
        <div className="form_content">
          {block && (
            <div ref={error} className="Error alert alert-danger" role="alert">
              {Error}
            </div>
          )}
          <h1 className="title">Sign Up</h1>
          <p className="description">
            lJoin our community today! Create an account to unlock exclusive
            features and personalized experiences.
          </p>
          <div className="form_input">
            <div className=" d-flex gap-2">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter Frist Name"
                value={fristName}
                onChange={(e) => setFristName(e.target.value)}
              />
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className=" d-flex gap-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password d-flex">
                <input
                  type={type}
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>
                    {/* type ==  password ? "password" : "text" */}
                  {type === "password" ? (
                    <svg
                
                      onClick={() => {
                        setOpen(false);
                        settype("text");
                      }}
                      className="eye "
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64Zm0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
                      />
                    </svg>
                  ) : (
                    <svg
              
                      onClick={() => {
                        setOpen(false);
                        settype("password");
                      }}
                      className="eye"
                      width="24"
                      height="24"
                      viewBox="-2 -2 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="m15.398 7.23l1.472-1.472C18.749 6.842 20 8.34 20 10c0 3.314-4.958 5.993-10 6a14.734 14.734 0 0 1-3.053-.32l1.747-1.746c.426.044.862.067 1.303.066h.002c-.415 0-.815-.063-1.191-.18l1.981-1.982c.47-.202.847-.579 1.05-1.049l1.98-1.981A4 4 0 0 1 10.022 14C14.267 13.985 18 11.816 18 10c0-.943-1.022-1.986-2.602-2.77zm-9.302 3.645A4 4 0 0 1 9.993 6C5.775 5.985 2 8.178 2 10c0 .896.904 1.877 2.327 2.644L2.869 14.1C1.134 13.028 0 11.585 0 10c0-3.314 4.984-6.017 10-6c.914.003 1.827.094 2.709.262l-1.777 1.776c-.29-.022-.584-.035-.88-.038c.282.004.557.037.823.096l-4.78 4.779zM19.092.707a1 1 0 0 1 0 1.414l-16.97 16.97a1 1 0 1 1-1.415-1.413L17.677.708a1 1 0 0 1 1.415 0z"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="form_footer">
          <button className="btn submit" type="submit">
            Sign Up
          </button>
          <button className="btn signup">
            <Link to="/login" className="text-decoration-none text-white">
              Login
            </Link>
          </button>
          <div className="or">
            <p className="or__text">Or Continue with</p>
            <div className="or__social">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_116_11495)">
                    <path
                      d="M23.7643 12.2765C23.7643 11.4608 23.6982 10.6406 23.5571 9.83813H12.2383V14.4591H18.72C18.451 15.9495 17.5868 17.2679 16.3213 18.1056V21.104H20.1883C22.4591 19.014 23.7643 15.9274 23.7643 12.2765Z"
                      fill="#CAFF33"
                    />
                    <path
                      d="M12.2391 24.0008C15.4756 24.0008 18.205 22.9382 20.1936 21.1039L16.3266 18.1055C15.2507 18.8375 13.8618 19.252 12.2435 19.252C9.11291 19.252 6.45849 17.1399 5.50607 14.3003H1.51562V17.3912C3.55274 21.4434 7.70192 24.0008 12.2391 24.0008Z"
                      fill="#CAFF33"
                    />
                    <path
                      d="M5.50082 14.3002C4.99816 12.8099 4.99816 11.196 5.50082 9.70569V6.61475H1.51478C-0.187219 10.0055 -0.187219 14.0004 1.51478 17.3912L5.50082 14.3002Z"
                      fill="#CAFF33"
                    />
                    <path
                      d="M12.2391 4.74966C13.9499 4.7232 15.6034 5.36697 16.8425 6.54867L20.2685 3.12262C18.0991 1.0855 15.2198 -0.034466 12.2391 0.000808666C7.70192 0.000808666 3.55274 2.55822 1.51562 6.61481L5.50166 9.70575C6.44967 6.86173 9.1085 4.74966 12.2391 4.74966Z"
                      fill="#CAFF33"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_116_11495">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_116_11502)">
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="#CAFF33"
                    />
                    <path
                      d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                      fill="#1C1C1C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_116_11502">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.8418 17.1449C20.5091 17.9135 20.1153 18.6211 19.659 19.2715C19.0371 20.1583 18.5278 20.7721 18.1354 21.113C17.527 21.6724 16.8752 21.959 16.1772 21.9753C15.6761 21.9753 15.0718 21.8327 14.3684 21.5434C13.6626 21.2555 13.014 21.113 12.421 21.113C11.7991 21.113 11.132 21.2555 10.4185 21.5434C9.70396 21.8327 9.12831 21.9834 8.68819 21.9984C8.01884 22.0269 7.35166 21.7322 6.68571 21.113C6.26066 20.7422 5.72901 20.1067 5.09212 19.2063C4.40878 18.2449 3.84698 17.13 3.40686 15.8589C2.93551 14.486 2.69922 13.1565 2.69922 11.8694C2.69922 10.3951 3.0178 9.12345 3.65592 8.05784C4.15742 7.20191 4.82459 6.52672 5.65962 6.03105C6.49464 5.53539 7.39688 5.2828 8.36852 5.26664C8.90017 5.26664 9.59736 5.43109 10.4637 5.75429C11.3277 6.07858 11.8824 6.24303 12.1256 6.24303C12.3075 6.24303 12.9237 6.05074 13.9684 5.66738C14.9564 5.31186 15.7902 5.16466 16.4732 5.22264C18.3241 5.37202 19.7147 6.10167 20.6395 7.41619C18.9841 8.4192 18.1653 9.82403 18.1816 11.6262C18.1965 13.03 18.7057 14.1981 19.7066 15.1256C20.1601 15.5561 20.6667 15.8888 21.2302 16.1251C21.108 16.4795 20.979 16.819 20.8418 17.1449ZM16.5968 0.440369C16.5968 1.54062 16.1948 2.56792 15.3936 3.51878C14.4267 4.64917 13.2572 5.30236 11.989 5.19929C11.9729 5.06729 11.9635 4.92837 11.9635 4.78239C11.9635 3.72615 12.4233 2.59576 13.2399 1.67152C13.6475 1.20356 14.166 0.814453 14.7948 0.504058C15.4221 0.198295 16.0156 0.0292007 16.5737 0.000244141C16.59 0.147331 16.5968 0.294426 16.5968 0.440355V0.440369Z"
                    fill="#CAFF33"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sigup;
