import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { ReactComponent as AuraIcon } from "../../.././assets/image/SVG/Group.svg";
import { ReactComponent as SearchIcon } from "../../.././assets/image/SVG/searchIcon.svg";
import { ReactComponent as FilerIcon } from "../../.././assets/image/SVG/filterIcon.svg";
import StudentReview from "../../components/StudentReview/StudentReview";
import AboutNContact from "../../components/AboutNContact/AboutNContact";
import RecommendedCourse from "../../components/RecommendedCourse/RecommendedCourse";
import Subjects from "../../components/Subjects/Subjects";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import styles from "./DetailsPage.module.scss";

const DetailsPage = () => {
  const [page, setPage] = useState("course");
  const subjects = [
    {
      title:
        "Create elegant web & Mobile app design by selecting and pairing meaningful fonts",
      topics: [
        "Create elegant web & Mobile app design by selecting and pairing",
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
      ],
    },
    {
      title:
        "Create elegant web & Mobile app design by selecting and pairing meaningful fonts",
      topics: [
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
      ],
    },
    {
      title:
        "Create elegant web & Mobile app design by selecting and pairing meaningful fonts",
      topics: [
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
      ],
    },
    {
      title:
        "Dramatically improve your boring designs with Modular Grid & Baseline Grid",
      topics: [
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
      ],
    },
    {
      title:
        "Create elegant web & Mobile app design by selecting and pairing meaningful fonts",
      topics: [
        "Create elegant web & Mobile app design by selecting and pairing meaningful fonts",
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
        "Create elegant web & Mobile app design by selecting and pairing ",
      ],
    },
  ];

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

  const Teachers = [
    { name: "Anjanna Faith", subject: "Design systems" },
    { name: "Raj Shyla", subject: "Typography" },
    { name: "Raj Shyla", subject: "Design" },
  ];

  return (
    <div className={styles.detailsPage}>
      <div>
        <NavBar />
        {/* Filter */}
        <div className={styles.filerBar}>
          <AuraIcon style={{ height: "60px", width: "60px" }} />
          <div className={styles.searchBar}>
            <form className={styles.form}>
              <input type="text" placeholder="Search for course or institute" />
            </form>
            <SearchIcon className={styles.searchIcon} />
          </div>
          <div className={styles.filter}>
            <FilerIcon style={{ height: "20px" }} />
          </div>

          <div>
            <FormControl
              fullWidth
              variant="standard"
              hiddenLabel
              className={styles.filter}
              style={{ width: "120px" }}
            >
              <Select
                onChange={(e) => console.log(e.target.value)}
                value={"Sort"}
                style={{
                  padding: "4px 22px",
                  color: "#000000",
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                <MenuItem value={"Top Rated"}>Top Rated</MenuItem>
                <MenuItem value={"Sort"}>Sort</MenuItem>
                <MenuItem value={"Best"}>Best</MenuItem>
                <MenuItem value={"Filter"}>Filter</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {/* Filter */}
        <CourseDetail
          title="Hands on Product Design Course: Advanced Mechanical Design Course"
          about="Become a Design Pro with these valuable skills. Find the right instructor for you."
          stars={3.9}
          rating={6402}
          createdBy="David Sholeye"
          time="2 years"
          courseType="Recorded"
          image="https://picsum.photos/400/400?grayscale"
        />
        {page == "course" ? (
          <div className={styles.detailsWrapper}>
            <div>
              <Subjects subjects={subjects} />
            </div>
            <div className={styles.teachers}>
              <div className={styles.heading}>List of Teachers</div>
              {Teachers.map((teacher, idx) => {
                return (
                  <div className={styles.teacher}>
                    <div className={styles.name}>
                      {idx + 1}. {teacher.name}
                    </div>
                    <div className={styles.subject}>{teacher.subject}</div>
                  </div>
                );
              })}
            </div>
            <StudentReview rating={rating} images={images} reviewer={reviwer} />
            <div>
              <RecommendedCourse
                courseDetails={courseDetails}
                like
                onLike={() => null}
              />
            </div>
          </div>
        ) : (
          <div className={styles.instituteDetailsWrapper}>
            <div className={styles.details}>
              <AboutNContact
                title="About us"
                about="IDC School of Design, formerly Industrial Design Centre, is one of the oldest design schools in India, established in 1969 by the Government of India at the campus of the Indian Institute of Technology Bombay."
              />
              <AboutNContact
                address="Industrial Design Centre (IDC Indian Institute of Technology (IIT, Powai, Mumbai, Maharashtra 400076, India"
                phone="+91 22 2576 7801"
              />
              <StudentReview
                rating={rating}
                images={images}
                reviewer={reviwer}
              />
            </div>
            <div className={styles.recommendedCard}>
              <RecommendedCourse courseDetails={courseDetails} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
