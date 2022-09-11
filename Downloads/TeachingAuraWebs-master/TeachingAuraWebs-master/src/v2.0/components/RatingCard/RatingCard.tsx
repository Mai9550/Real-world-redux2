import React from "react";
import { ReactComponent as Star } from "../../.././assets/image/SVG/star.svg";
import { ReactComponent as HalfStar } from "../../.././assets/image/SVG/halfStar.svg";
import styles from "./RatingCard.module.scss";

const RatingCard = (props) => {
  const { stars, rating, courseType } = props;
  var starsToPrint = stars;
  var halfStar = false;
  if (!Number.isInteger(stars)) {
    starsToPrint = Math.floor(stars);
    halfStar = true;
  }
  return (
    <div className={styles.containerWraper}>
      <div className={styles.ratingWrapper}>
        <div className={styles.stars}>
          {stars}
          {!halfStar && ".0"}
          <div className={styles.starsSvg}>
            {[...Array(starsToPrint)].map((e) => (
              <Star />
            ))}
            {halfStar && <HalfStar />}
          </div>
        </div>
        <a className={styles.rating}>({rating} Ratings)</a>
      </div>
      <div className={styles.courseType}>
        Course type: <span>{courseType}</span>
      </div>
    </div>
  );
};

export default RatingCard;
