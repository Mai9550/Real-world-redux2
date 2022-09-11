import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { ReactComponent as AuraIcon } from "../../.././assets/image/SVG/Group.svg";
// import CourseDetail from "../../components/CourseDetail/CourseDetail";
// import RecommendedCourse from "../../components/RecommendedCourse/RecommendedCourse";
// import AboutNContact from "../../components/AboutNContact/AboutNContact";
// import StudentReview from "../../components/StudentReview/StudentReview";
import { ReactComponent as SearchIcon } from "../../.././assets/image/SVG/searchIcon.svg";
import styles from "./SearchEngine.module.scss";

const SearchEngine = () => {
  //Remove it
  const courseDetails = [
    {
      name: "Building of color scheme",
      stars: 4.1,
      rating: 2434,
      image: "https://picsum.photos/60/60?random=10",
    },
    {
      name: "Building of color scheme",
      stars: 4.1,
      rating: 2434,
      image: "https://picsum.photos/60/60?random=10",
    },
    {
      name: "Building of color scheme",
      stars: 4.1,
      rating: 2434,
      image: "https://picsum.photos/60/60?random=10",
    },
    {
      name: "Building of color scheme",
      stars: 4.1,
      rating: 2434,
      image: "https://picsum.photos/60/60?random=10",
    },
  ];

  const rating = {
    totalReviews: 28000,
    stars: 4.1,
    five: 14000,
    four: 8000,
    three: 2000,
    two: 3500,
    one: 500,
  };

  const images = [
    "https://picsum.photos/40/40?random=10",
    "https://picsum.photos/40/40?random=10",
    "https://picsum.photos/40/40?random=10",
    "https://picsum.photos/40/40?random=10",
    "https://picsum.photos/40/40?random=10",
  ];

  const reviwer = {
    name: "Raj Anjana",
    image: "https://picsum.photos/60/60?grayscale",
    stars: 5,
    date: "19 Feburary 2022",
    title: "Excellent course",
    review:
      "This course was absolutely fantastic! One of the best, practical course on typography that I've taken. It's am-packed with all types of goodies that seriously took my typographic skills to the next level. I particularly loved the sections on typographic scale, modular/vertical grids,layouts, and themes. All in all, It's perfect! This really is a solid resource filled with well explained, helpful information :) Thank you Muhammad Ahasn for putting this together... I really do appreciate it ^_^",
    helpful: 534,
  };

  return (
    <>
      <NavBar />
      {/* Using this as Storybook, will be removed later */}

      {/* <CourseDetail
        title="Hands on Product Design Course: Advanced Mechanical Design Course"
        about="Become a Design Pro with these valuable skills. Find the right instructor for you."
        stars={3.9}
        rating={6402}
        createdBy="David Sholeye"
        time="2 years"
        courseType="Recorded"
      /> */}

      {/* <RecommendedCourse
        courseDetails={courseDetails}
        like
        onLike={() => null}
      /> */}

      {/* <AboutNContact
        title="About us"
        about="IDC School of Design, formerly Industrial Design Centre, is one of the oldest design schools in India, established in 1969 by the Government of India at the campus of the Indian Institute of Technology Bombay."
        address="Industrial Design Centre (IDC Indian Institute of Technology (IIT, Powai, Mumbai, Maharashtra 400076, India"
        phone="+91 22 2576 7801"
      /> */}

      {/* <StudentReview rating={rating} images={images} reviewer={reviwer} /> */}

      <div className={styles.content}>
        <AuraIcon style={{ height: "180px" }} />
        <div className={styles.name}>Teaching Aura</div>
        <div className={styles.searchBar}>
          <form className={styles.form}>
            <input type="text" placeholder="Search for course or institute" />
          </form>
          <SearchIcon
            style={{
              height: "20px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className={styles.searchText}>
          Search for Institutes and Their Courses
        </div>
        <div className={styles.footer}>
          <div>Terms</div>
          <div>Privacy</div>
          <div>Settings</div>
        </div>
      </div>
    </>
  );
};

export default SearchEngine;
