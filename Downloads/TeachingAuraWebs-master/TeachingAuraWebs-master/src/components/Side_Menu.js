import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/SVG/Group.svg";
import PropTypes from "prop-types";
import StudentIc from "../icon/drawable/StudentIc";
import TeacherIc from "../icon/drawable/TeacherIc";
import CourseIc from "../icon/drawable/CourseIc";
import HomeIc from "../icon/drawable/HomeIc";
import BatchesIc from "../icon/drawable/BatchesIc";
import NotificationIc from "../icon/drawable/NotificationIc";
import AllBatchesIc from "../icon/drawable/AllBatchesIc";

const Side_Menu = ({ active }) => {
  //const [active,setActive]=useState("home")
  return (
    <>
      <div className="navigation_manu">
        <div className="nav_link_box">
          <div className="logo_box">
            <img src={logo} alt="logo no found!" />
          </div>
          <ul className="nav_ul_box">
            <li>
              <NavLink to="/instituteHome" activeClassName="active">
                <HomeIc color={active === "home" ? "#FFFFFF" : "#A3A3A3"} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/students" activeClassName="active">
                <StudentIc
                  color={active === "students" ? "#FFFFFF" : "#A3A3A3"}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/teachers" activeClassName="active">
                <TeacherIc
                  color={active === "teachers" ? "#FFFFFF" : "#A3A3A3"}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={`${active === "courses" ? "active" : ""}`}
                activeClassName="active"
              >
                <CourseIc
                  color={active === "courses" ? "#FFFFFF" : "#A3A3A3"}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/AllBatches" activeClassName="active">
                <AllBatchesIc
                  color={active === "batches" ? "#FFFFFF" : "#A3A3A3"}
                />
              </NavLink>
            </li>

            {/*chat section*/}
            {/*<li><NavLink to="/chat" activeClassName="active">*/}
            {/*    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"*/}
            {/*         xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path*/}
            {/*            d="M18 0.127869H6C2.688 0.127869 0 2.80521 0 6.10686V13.2864V14.487C0 17.7887 2.688 20.466 6 20.466H7.8C8.124 20.466 8.556 20.6821 8.76 20.9463L10.56 23.3355C11.352 24.392 12.648 24.392 13.44 23.3355L15.24 20.9463C15.468 20.6461 15.828 20.466 16.2 20.466H18C21.312 20.466 24 17.7887 24 14.487V6.10686C24 2.80521 21.312 0.127869 18 0.127869ZM7.2 12.1339C6.528 12.1339 6 11.5936 6 10.9333C6 10.2729 6.54 9.73267 7.2 9.73267C7.86 9.73267 8.4 10.2729 8.4 10.9333C8.4 11.5936 7.872 12.1339 7.2 12.1339ZM12 12.1339C11.328 12.1339 10.8 11.5936 10.8 10.9333C10.8 10.2729 11.34 9.73267 12 9.73267C12.66 9.73267 13.2 10.2729 13.2 10.9333C13.2 11.5936 12.672 12.1339 12 12.1339ZM16.8 12.1339C16.128 12.1339 15.6 11.5936 15.6 10.9333C15.6 10.2729 16.14 9.73267 16.8 9.73267C17.46 9.73267 18 10.2729 18 10.9333C18 11.5936 17.472 12.1339 16.8 12.1339Z"*/}
            {/*            fill="#DCDCDC"/>*/}
            {/*    </svg>*/}
            {/*</NavLink></li>*/}

            <li>
              <NavLink
                to="/Notificationli"
                className={`${active === "Notificationli" ? "active" : ""}`}
                activeClassName="active"
              >
                <NotificationIc
                  color={active === "notifications" ? "#FFFFFF" : "#A3A3A3"}
                />
              </NavLink>
            </li>

            {/*<li><NavLink to="/" activeClassName="active">*/}
            {/*    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"*/}
            {/*         xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path*/}
            {/*            d="M22.3436 14.2083V15.2499C22.3436 15.5312 22.1249 15.7604 21.8332 15.7708H20.3124C19.7603 15.7708 19.2603 15.3645 19.2186 14.8229C19.1874 14.4999 19.3124 14.1979 19.5207 13.9895C19.7082 13.7916 19.9686 13.6874 20.2499 13.6874H21.8228C22.1249 13.6979 22.3436 13.927 22.3436 14.2083Z"*/}
            {/*            fill="#DCDCDC"/>*/}
            {/*        <path*/}
            {/*            d="M18.7397 13.2187C18.2189 13.7291 17.9689 14.4895 18.1772 15.2812C18.4481 16.2499 19.396 16.8645 20.396 16.8645H21.3022C21.8752 16.8645 22.3439 17.3333 22.3439 17.9062V18.1041C22.3439 20.2604 20.5835 22.0208 18.4272 22.0208H6.46891C4.31266 22.0208 2.55225 20.2604 2.55225 18.1041V11.0937C2.55225 9.81244 3.16683 8.67703 4.11475 7.96869C4.771 7.46869 5.5835 7.17702 6.46891 7.17702H18.4272C20.5835 7.17702 22.3439 8.93744 22.3439 11.0937V11.552C22.3439 12.1249 21.8752 12.5937 21.3022 12.5937H20.2397C19.6564 12.5937 19.1252 12.8229 18.7397 13.2187Z"*/}
            {/*            fill="#DCDCDC"/>*/}
            {/*        <path*/}
            {/*            d="M16.8749 5.02077C17.1561 5.30202 16.9165 5.73952 16.5207 5.73952L8.52069 5.7291C8.06236 5.7291 7.82277 5.1666 8.15611 4.84368L9.84361 3.14577C11.2707 1.7291 13.5832 1.7291 15.0103 3.14577L16.8332 4.98952C16.8436 4.99993 16.8644 5.01035 16.8749 5.02077Z"*/}
            {/*            fill="#DCDCDC"/>*/}
            {/*    </svg>*/}
            {/*</NavLink></li>*/}
          </ul>
        </div>
      </div>
    </>
  );
};

Side_Menu.propTypes = {
  active: PropTypes.string,
};
Side_Menu.defaultProps = {
  active: "",
};

export default Side_Menu;
