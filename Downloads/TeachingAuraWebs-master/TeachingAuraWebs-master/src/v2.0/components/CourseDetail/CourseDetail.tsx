import React from "react";
import { ReactComponent as Star } from "../../.././assets/image/SVG/star-yellow.svg";
import { ReactComponent as HalfStar } from "../../.././assets/image/SVG/half-star-yellow.svg";
import styles from "./CourseDetail.module.scss";

const CourseDetail = (props) => {
  const { title, about, stars, rating, createdBy, time, courseType, image } =
    props;
  var starsToPrint = stars;
  var halfStar = false;
  if (!Number.isInteger(stars)) {
    starsToPrint = Math.floor(stars);
    halfStar = true;
  }
  return (
    <div className={styles.container}>
       
      <div className={styles.title}>{title}</div>
     
      <div className={styles.about}>{about}</div>
    
      {stars && rating && (
        <div className={styles.starsNrating}>
          <div className={styles.stars}>
         
            {stars}
            {!halfStar && ".0"}{" "}
            <div className={styles.starsSvg}>
              {[...Array(starsToPrint)].map((e) => (
                <Star height="16px" width="16px" />
              ))}
              {halfStar && <HalfStar height="16px" width="16px" />}
            </div>
          </div>
          <div>({rating}+ Students)</div>
        </div>
      )}
      
      {createdBy && (
        <div className={styles.createdBy}>
          Created by: <span>{createdBy}</span>
        </div>
      )}
      
      {time && courseType && (
        <div className={styles.starsNrating}>
          <div>
            Validity of course: <span>{time}</span>
          </div>
          <div>
            Course type: <span>{courseType}</span>
          </div>
      
        </div>
    
      )}
      
      <img src={image} alt={title} className={styles.image} />
    
    </div>
  );
};

export default CourseDetail;
