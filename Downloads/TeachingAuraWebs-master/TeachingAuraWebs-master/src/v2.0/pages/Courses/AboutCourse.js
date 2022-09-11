import React, { useState, useRef } from "react";
import SideMenu from "../../../components/Side_Menu";
import SidePanel from "../../components/SidePanel/SidePanel";
import DashboardNavBar from "../../components/Dashboard/DashboardNavBar/DashboardNavBar";
import styles from "./AboutCourse.module.scss";
import { days, months, years } from "./coursesData";

const AboutCourse = () => {
  const [course, setCourse] = useState({
    name: "",
    desc: "",
    img: "",
    type: "",
    fee: "",
    validity: "",
    startDate: "",
    endDate: "",
    publish: false,
  });

  const courseName = useRef();
  const courseDesc = useRef();
  const courseImg = useRef();
  const courseType = useRef();
  const courseFee = useRef();
  const courseValidityText = useRef();
  const courseValidityMonth = useRef();
  const startDay = useRef();
  const startMonth = useRef();
  const startYear = useRef();
  const endDay = useRef();
  const endMonth = useRef();
  const endYear = useRef();

  const courseImgHandler = (e) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      img: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const publishHandler = (e) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      publish: e.target.checked,
    }));
  };

  const submitForm = (e) => {
    // e.preventDefault();
    setCourse((prevCourse) => ({
      ...prevCourse,
      name: courseName.current.value,
      desc: courseDesc.current.value,
      // img: URL.createObjectURL(courseImg.current.files["0"]),
      type: courseType.current.value,
      fee: courseFee.current.value,
      validity:
        courseValidityText.current.value + courseValidityMonth.current.value,
      startDate: `${startDay.current.value} ${startMonth.current.value} ${startYear.current.value}`,
      endDate: `${endDay.current.value} ${endMonth.current.value} ${endYear.current.value}`,
    }));
  };
  return (
    <div className={styles.aboutCourse}>
      {/* <SideMenu active={"courses"} /> */}
      <SidePanel page={"courses"} />
      <DashboardNavBar
        page="Dashboard"
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
      <div className={styles.mainBar}>
        <div className={styles.mainBarHeader}>
          <div className={styles.headerText}>
            <h2 className={styles.headerTitle}>About Course</h2>
            <p className={styles.headerDesc}>
              Give details about course student will find them useful
            </p>
          </div>
          <div className={styles.publishSection}>
            Publish
            <input
              className={styles.publishInput}
              type="checkbox"
              onChange={publishHandler}
            />
          </div>
        </div>
        <form
          action="/v2/t/courses"
          method="get"
          onSubmit={submitForm}
          className={styles.courseForm}
        >
          <div className={styles.courseName}>
            <label htmlFor="course-name">Course Name</label>
            <input
              ref={courseName}
              type="text"
              id="course-name"
              className={styles.courseNameInput}
            />
          </div>
          <div className={styles.courseDesc}>
            <label htmlFor="course-desc">Description</label>
            <input
              ref={courseDesc}
              type="text"
              id="course-desc"
              className={styles.courseDescInput}
            />
          </div>
          <div className={styles.courseImg}>
            {course.img === "" && (
              <div className={styles.imgArea}>
                <span className={styles.noImg}>No Image here</span>
              </div>
            )}
            {course.img !== "" && (
              <img src={course.img} className={styles.yesImg} />
            )}
            <div className={styles.fileSection}>
              <input
                onChange={courseImgHandler}
                id="course-img"
                className={styles.courseImgInput}
                type="file"
              />
              <label className={styles.imgLabel} htmlFor="course-img">
                Add Img
              </label>
              <button type="button" className={styles.adjustImg}>
                Adjust Image
              </button>
              <button
                type="button"
                onClick={() =>
                  setCourse((prevCourse) => ({ ...prevCourse, img: "" }))
                }
                className={styles.deleteImg}
              >
                Delete Image
              </button>
            </div>
          </div>
          <div className={styles.courseType}>
            <label htmlFor="course-type" className={styles.courseTypeLabel}>
              Course type
            </label>
            <select
              ref={courseType}
              id="course-type"
              className={styles.courseTypeSelect}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advance">Advance</option>
            </select>
          </div>
          <div className={styles.courseFee}>
            <label htmlFor="course-fee">Course fee</label>
            <input
              ref={courseFee}
              type="text"
              id="course-fee"
              className={styles.courseFeeInput}
            />
          </div>
          <div className={styles.courseValidity}>
            <label htmlFor="course-validity">Course Validity</label>
            <input
              ref={courseValidityText}
              placeholder="Text"
              type="text"
              id="course-validity"
              className={styles.courseValidityInput}
            />
            <select
              ref={courseValidityMonth}
              className={styles.courseValiditySelect}
            >
              <option value="" disabled selected>
                Month
              </option>
              {months.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className={styles.courseStartDate}>
            <label className={styles.startDateLabel}>Start date</label>
            <select ref={startDay} className={styles.commonSelect}>
              <option disabled selected className={styles.startDayOption}>
                Day
              </option>
              {days.map((day) => (
                <option value={day}>{day}</option>
              ))}
            </select>
            <select ref={startMonth} className={styles.commonSelect}>
              <option disabled selected className={styles.startMonthOption}>
                Month
              </option>
              {months.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>
            <select ref={startYear} className={styles.commonSelect}>
              <option disabled selected className={styles.startYearOption}>
                Year
              </option>
              {years.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className={styles.courseEndDate}>
            <label className={styles.endDateLabel}>End date</label>
            <select ref={endDay} className={styles.commonSelect}>
              <option disabled selected className={styles.startDayOption}>
                Day
              </option>
              {days.map((day) => (
                <option value={day}>{day}</option>
              ))}
            </select>
            <select ref={endMonth} className={styles.commonSelect}>
              <option disabled selected className={styles.startMonthOption}>
                Month
              </option>
              {months.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>
            <select ref={endYear} className={styles.commonSelect}>
              <option disabled selected className={styles.startYearOption}>
                Year
              </option>
              {years.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className={styles.actionButtons}>
              <button className={styles.courseSave} >
               <a href="courses" style={{textDecoration: "none", color : "#ffffff"}}> Save and continue</a></button>
            <a href="/v2/dashboard" className={styles.courseBack}>
              Back
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutCourse;
