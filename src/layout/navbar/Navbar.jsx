import { Link, NavLink, useLocation } from "react-router-dom";
import "./nav.css";
import { useRef } from "react";
import { useCookies } from "react-cookie";
import mainIcon from "../../assets/mainIcon.svg";
import logoIcon from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/authSlice";
const Navbar = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["access_token"]);
  const location = useLocation();
  const disPatch = useDispatch();
  const Nav = useRef(null);
  const close = useRef(null);
  const Bar = useRef(null);
  // @ts-ignore
  const user = useSelector((state) => state.auth.user);
  console.log("user", user);
  const addResponsive = () => {
    Nav.current.classList.add("responsive");
    Nav.current.classList.remove("noResponsive");
    Bar.current.style.display = "none";
    close.current.style.display = "block";
  };
  const Close = () => {
    Nav.current.classList.remove("responsive");
    Nav.current.classList.add("noResponsive");
    Bar.current.style.display = "block";
    close.current.style.display = "none";
  };
  const handleLogout = () => {
    disPatch(logout());
    removeCookie("access_token");
  };
  // when click in li close the nav
  const closeNav = () => {
    Nav.current.classList.remove("responsive");
    Nav.current.classList.add("noResponsive");
    Bar.current.style.display = "block";
    close.current.style.display = "none";
  };
  console.log(user);
  return (
    <>
      <div className="header container">
        <div className="main_logo my-auto d-flex align-items-center ">
          <img src={mainIcon} alt="" />
          <h3 className="logo_text ">
            <img src={logoIcon} alt="" />
          </h3>
        </div>
        <div ref={Nav} className="all_navagiton noResponsive m-auto ">
          <div className="nav_main my-auto">
            { (
              <ul className="ul_main">
                <li
                  onClick={closeNav}
                  className={`nav_item ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav_link" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li
                  onClick={closeNav}
                  className={`nav_item ${
                    location.pathname === "/careers" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav_link" to={"/careers"}>
                    Careers
                  </NavLink>
                </li>
                <li
                  onClick={closeNav}
                  className={`nav_item ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav_link" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li
                  onClick={closeNav}
                  className={`nav_item ${
                    location.pathname === "/security" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav_link" to={"/security"}>
                    Security
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="main_auth my-auto">
            {cookies.access_token && user ? (
              <ul className="ul_auth">
                <li
                  onClick={closeNav}
                  className={`nav_item ${
                    location.pathname === "/signup" ? "active" : ""
                  }`}
                >
                  <Link className="nav_link signup align-content-center" to={"/profile"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fill="currentColor"
                        d="M25.1 42c-9.4 0-17-7.6-17-17s7.6-17 17-17s17 7.6 17 17s-7.7 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.8-15-15-15z"
                      />
                      <path
                        fill="currentColor"
                        d="m15.3 37.3l-1.8-.8c.5-1.2 2.1-1.9 3.8-2.7c1.7-.8 3.8-1.7 3.8-2.8v-1.5c-.6-.5-1.6-1.6-1.8-3.2c-.5-.5-1.3-1.4-1.3-2.6c0-.7.3-1.3.5-1.7c-.2-.8-.4-2.3-.4-3.5c0-3.9 2.7-6.5 7-6.5c1.2 0 2.7.3 3.5 1.2c1.9.4 3.5 2.6 3.5 5.3c0 1.7-.3 3.1-.5 3.8c.2.3.4.8.4 1.4c0 1.3-.7 2.2-1.3 2.6c-.2 1.6-1.1 2.6-1.7 3.1V31c0 .9 1.8 1.6 3.4 2.2c1.9.7 3.9 1.5 4.6 3.1l-1.9.7c-.3-.8-1.9-1.4-3.4-1.9c-2.2-.8-4.7-1.7-4.7-4v-2.6l.5-.3s1.2-.8 1.2-2.4v-.7l.6-.3c.1 0 .6-.3.6-1.1c0-.2-.2-.5-.3-.6l-.4-.4l.2-.5s.5-1.6.5-3.6c0-1.9-1.1-3.3-2-3.3h-.6l-.3-.5c0-.4-.7-.8-1.9-.8c-3.1 0-5 1.7-5 4.5c0 1.3.5 3.5.5 3.5l.1.5l-.4.5c-.1 0-.3.3-.3.7c0 .5.6 1.1.9 1.3l.4.3v.5c0 1.5 1.3 2.3 1.3 2.4l.5.3v2.6c0 2.4-2.6 3.6-5 4.6c-1.1.4-2.6 1.1-2.8 1.6z"
                      />
                    </svg>{" "}
                    {user?.fristName}
                  </Link>
                </li>
                <li onClick={closeNav} className={`nav_item`}>
                  <Link
                    className="nav_link login"
                    onClick={() => handleLogout()}
                    to={"/login"}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="ul_auth">
                <li
                  onClick={closeNav}
                  className={`nav_item ${
                    location.pathname === "/signup" ? "active" : ""
                  }`}
                >
                  <Link className="nav_link signup" to={"/signup"}>
                    Sign Up
                  </Link>
                </li>
                <li
                  onClick={closeNav}
                  className={`nav_item ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                >
                  <Link className="nav_link login" to={"/login"}>
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="toggle_icon">
          <svg
            onClick={() => {
              addResponsive();
            }}
            ref={Bar}
            className="bar"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z"
              fill="#333333"
            />
          </svg>

          <svg
            onClick={() => {
              Close();
            }}
            ref={close}
            className="close"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
