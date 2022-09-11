import React, { useState } from "react";
import logo from "../../../assets/image/SVG/Group.svg";
import { NavLink } from "react-router-dom";
import Dashboard from "../../../icon/drawable/HomeIc";
import Courses from "../../../icon/drawable/StudentIc";
import Chat from "../../../icon/drawable/TeacherIc";
import Batches from "../../../icon/drawable/CourseIc";
import Payments from "../../../icon/drawable/AllBatchesIc";
import Attendance from "../../../icon/drawable/NotificationIc";
import Settings from "../../../icon/drawable/SettingIc";
import { GroupsOutlined, MoreVert } from "@mui/icons-material";
import styles from "./SidePanel.module.scss";

const SidePanel = ({ page }) => {
  const [active, setActive] = useState(page);
  return (
    <div className={styles.sidePanel}>
      <div className={styles.iconSection}>
        <img className={styles.iconImg} src={logo} alt="logo not found!" />
        <h2 className={styles.iconTitle}>Teaching Aura</h2>
      </div>
      <div className={styles.institute}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Aleksanteri_Institute_Building_Facade_2021-06-08.jpg/800px-Aleksanteri_Institute_Building_Facade_2021-06-08.jpg"
          className={styles.instituteImg}
        />
        <p className={styles.instituteName}>Name of Institute</p>
        <p className={styles.instituteSkill}>Product Designer</p>
      </div>
      <div className={styles.navigation}>
        <div
          className={`${`${styles.dashboard} ${styles.navItem}`} ${
            active === "dashboard" && styles.border
          }`}
        >
          <NavLink
            to="/v2/dashboard"
            className={styles.navLink}
            onClick={() => setActive("dashboard")}
          >
            <Dashboard
              color={active === "dashboard" ? "#2697fe" : "#a3a3a3"}
              width="18px"
              height="18px"
              className={styles.navIcon}
            />
            <h3
              className={
                active === "dashboard" ? styles.activeText : styles.navText
              }
            >
              Dashboard
            </h3>
          </NavLink>
        </div>
        <div
          className={`${styles.courses} ${styles.navItem} ${
            active === "courses" && styles.border
          }`}
        >
          <NavLink
            to="/v2/t/courses"
            className={styles.navLink}
            onClick={() => setActive("courses")}
          >
            <Courses
              color={active === "courses" ? "#2697fe" : "#a3a3a3"}
              width="18px"
              height="18px"
              className={styles.navIcon}
            />
            <h3
              className={
                active === "courses" ? styles.activeText : styles.navText
              }
            >
              Courses
            </h3>
          </NavLink>
        </div>
        <div
          className={`${styles.chat} ${styles.navItem} ${
            active === "chat" && styles.border
          }`}
        >
          <NavLink
            to=""
            className={styles.navLink}
            onClick={() => setActive("chat")}
          >
            <Chat
              color={active === "chat" ? "#2697fe" : "#a3a3a3"}
              width="18px"
              height="18px"
              className={styles.navIcon}
            />
            <h3
              className={active === "chat" ? styles.activeText : styles.navText}
            >
              Chat
            </h3>
          </NavLink>
        </div>
        <div
          className={`${styles.batches} ${styles.navItem} ${
            active === "batches" && styles.border
          }`}
        >
          <NavLink
            to="/v2/batches"
            className={styles.navLink}
            onClick={() => setActive("batches")}
          >
            <Batches
              color={active === "batches" ? "#2697fe" : "#a3a3a3"}
              width="18px"
              height="18px"
              className={styles.navIcon}
            />
            <h3
              className={
                active === "batches" ? styles.activeText : styles.navText
              }
            >
              Batches
            </h3>
          </NavLink>
        </div>
        <div
          className={`${styles.payments} ${styles.navItem} ${
            active === "payments" && styles.border
          }`}
        >
          <NavLink
            to=""
            className={styles.navLink}
            onClick={() => setActive("payments")}
          >
            <Payments
              color={active === "payments" ? "#2697fe" : "#a3a3a3"}
              width="18px"
              height="18px"
              className={styles.navIcon}
            />
            <h3
              className={
                active === "payments" ? styles.activeText : styles.navText
              }
            >
              Payments
            </h3>
          </NavLink>
        </div>
        <div
          className={`${styles.attendance} ${styles.navItem} ${
            active === "attendance" && styles.border
          }`}
        >
          <NavLink
            to=""
            className={styles.navLink}
            onClick={() => setActive("attendance")}
          >
            <Attendance
              color={active === "attendance" ? "#2697fe" : "#a3a3a3"}
              width="18px"
              height="18px"
              className={styles.navIcon}
            />
            <h3
              className={
                active === "attendance" ? styles.activeText : styles.navText
              }
            >
              Attendance
            </h3>
          </NavLink>
        </div>
        <div
          className={`${styles.settings} ${styles.navItem} ${
            active === "settings" && styles.border
          }`}
        >
          <NavLink
            to=""
            className={styles.navLink}
            onClick={() => setActive("settings")}
          >
            <Settings
              color={active === "settings" ? "#2697fe" : "#a3a3a3"}
              width="18px"
              height="18px"
              className={styles.navIcon}
            />
            <h3
              className={
                active === "settings" ? styles.activeText : styles.navText
              }
            >
              Settings
            </h3>
          </NavLink>
        </div>
      </div>
      <div className={styles.uploadCourse}>
        <MoreVert className={styles.uploadMoreVert} />
        <div className={styles.upload}>
          <GroupsOutlined className={styles.uploadGroups} />
          <p className={styles.uploadHeader}>Upload course</p>
          <desc className={styles.uploadDesc}>
            Increase your speed with more members
          </desc>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
