import React, { useState } from "react";
import { ReactComponent as Star } from "../../.././assets/image/SVG/star.svg";
import { ReactComponent as PeopleIcon } from "../../.././assets/image/SVG/people.svg";
import { ReactComponent as LikeIcon } from "../../.././assets/image/SVG/like.svg";
import styles from "./RecommendedCourse.module.scss";

const RecommendedCourse = (props) => {
  const { courseDetails, like, onLike } = props;
  const [likedIdx, setLikedIdx] = useState([]);
  return (
    <div className={like ? styles.wrapper : styles.container}>
      <div className={styles.title}>Recommended courses</div>
      {courseDetails.map((courseDetail, idx) => {
        return (
          <div className={styles.courseContainer}>
            <img src={courseDetail.image} className={styles.image} />
            <div>
              <div className={styles.courseName}>{courseDetail.name}</div>
              <div className={styles.starsNrating}>
                <div className={styles.star}>
                  {courseDetail.stars} <Star style={{ marginTop: "-2px" }} />
                </div>
                <div className={styles.rating}>
                  <PeopleIcon style={{ height: "18px" }} />{" "}
                  {courseDetail.rating}
                </div>
              </div>
            </div>
            {like && (
              <div onClick={() => setLikedIdx(idx)} className={styles.like}>
                <LikeIcon
                  style={{ height: "20px" }}
                  fill={idx === likedIdx ? "#ED49A1" : "#fff"}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedCourse;
