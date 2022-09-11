import React, { useState } from "react";
import DashboardNavBar from "../../components/Dashboard/DashboardNavBar/DashboardNavBar";
import SidePanel from "../../components/SidePanel/SidePanel";
import { Add } from "@mui/icons-material";
import Course from "../../components/Courses/Course";
import styles from "./CoursesT.module.scss";
import axios from "axios";

const CoursesT = () => {
  const [courses, setCourses] = useState([]);

  return (
    <>
      <SidePanel page="courses" />
      <DashboardNavBar
        page="Dashboard"
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />

      <div className={styles.mainBar}>
        <div className={styles.addCourse}>
          <a href="/v2/about-course" className={styles.addCourseLink}>
            <Add /> Add Course
          </a>
        </div>
        <div className={styles.coursesList}>
          <Course />
          <Course />
        </div>
      </div>
    </>
  );
};

export default CoursesT;
