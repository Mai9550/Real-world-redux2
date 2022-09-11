import React from "react";
import { ReactComponent as Star } from "../../.././assets/image/SVG/star.svg";
import { ReactComponent as HalfStar } from "../../.././assets/image/SVG/halfStar.svg";
import { ReactComponent as RightIcon } from "../../.././assets/image/SVG/rightIcon.svg";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./StudentReview.module.scss";

const StudentReview = (props) => {
  // props will have 3 objects-> rating will conatin (totalReviews, stars, five, four, three, two, one), images will contain different Images with review. And reviewer will contain (name, image, stars, title, date, review, helpful(number))
  const { rating, images, reviewer } = props;

  var starsToPrint = rating.stars;
  var halfStar = false;
  if (!Number.isInteger(rating.stars)) {
    starsToPrint = Math.floor(rating.stars);
    halfStar = true;
  }
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.ratingContainer}>
        <div className={styles.heading}>Students Reviews</div>
        <div className={styles.starsWrapper}>
          <div className={styles.stars}>
            <div className={styles.starsSvg}>
              {[...Array(starsToPrint)].map((e) => (
                <Star />
              ))}
              {halfStar && <HalfStar />}
            </div>
            {rating.stars}
            {!halfStar && ".0"} out of 5
          </div>
          <div className={styles.writeReview}>Write a review</div>
        </div>
        <div className={styles.ratings}>{rating.totalReviews} Students</div>
        <div className={styles.progressBars}>
          <div className={styles.progressBar}>
            5 star{" "}
            <LinearProgress
              variant="determinate"
              value={(rating.five / rating.totalReviews) * 100}
              style={{ height: "24px", width: "80%", borderRadius: "4px" }}
            />{" "}
            <div className={styles.text}>
              {Math.floor((rating.five / rating.totalReviews) * 100)}%
            </div>
          </div>
          <div className={styles.progressBar}>
            4 star{" "}
            <LinearProgress
              variant="determinate"
              value={(rating.four / rating.totalReviews) * 100}
              style={{ height: "24px", width: "80%", borderRadius: "4px" }}
            />{" "}
            <div className={styles.text}>
              {Math.floor((rating.four / rating.totalReviews) * 100)}%
            </div>
          </div>
          <div className={styles.progressBar}>
            3 star{" "}
            <LinearProgress
              variant="determinate"
              value={(rating.three / rating.totalReviews) * 100}
              style={{ height: "24px", width: "80%", borderRadius: "4px" }}
            />{" "}
            <div className={styles.text}>
              {Math.floor((rating.three / rating.totalReviews) * 100)}%
            </div>
          </div>
          <div className={styles.progressBar}>
            2 star{" "}
            <LinearProgress
              variant="determinate"
              value={(rating.two / rating.totalReviews) * 100}
              style={{ height: "24px", width: "80%", borderRadius: "4px" }}
            />{" "}
            <div className={styles.text}>
              {Math.floor((rating.two / rating.totalReviews) * 100)}%
            </div>
          </div>
          <div className={styles.progressBar}>
            1 star{" "}
            <LinearProgress
              variant="determinate"
              value={(rating.one / rating.totalReviews) * 100}
              style={{ height: "24px", width: "80%", borderRadius: "4px" }}
            />{" "}
            <div className={styles.text}>
              {Math.floor((rating.one / rating.totalReviews) * 100)}%
            </div>
          </div>
        </div>
        <div className={styles.question}>How are rating calculated?</div>
        <div className={styles.imagerContainer}>
          <div>
            <div className={styles.text}>Reviews with images</div>
            <div className={styles.images}>
              {images.map((image) => {
                return <img src={image} alt="Image" />;
              })}
            </div>
          </div>
          <RightIcon />
        </div>
      </div>
      {/* Reviews */}
      <div className={styles.reviewerContainer}>
        <div className={styles.heading}>Reviews</div>
        <div className={styles.reviewer}>
          <img src={reviewer.image} alt="Profile" className={styles.image} />
          <div>{reviewer.name}</div>
        </div>
        <div className={styles.stars}>
          <div className={styles.starSvg}>
            {[...Array(reviewer.stars)].map((e) => (
              <Star />
            ))}
          </div>
          <div>Verified student</div>
        </div>
        <div className={styles.title}>{reviewer.title}</div>
        <div className={styles.date}>Reviewed on {reviewer.date}</div>
        <div className={styles.reviewText}>{reviewer.review}</div>
        <div className={styles.peopleText}>
          {reviewer.helpful} prople find this helpful
        </div>
        <div className={styles.buttons}>
          <button>Helpful</button>
          <div>Report</div>
        </div>
      </div>
    </div>
  );
};

export default StudentReview;
