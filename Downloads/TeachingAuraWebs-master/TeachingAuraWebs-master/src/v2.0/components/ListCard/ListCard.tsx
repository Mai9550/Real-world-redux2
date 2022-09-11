import React from "react";
import RatingCard from "../RatingCard/RatingCard";
import { ReactComponent as RightArrow } from "../../.././assets/image/SVG/right-arrow.svg";
import styles from "./ListCard.module.scss";

const ListCard = (props) => {
  const { title, about, imgUrl, link, price, stars, rating, courseType } =
    props;
  return (
    <div className={styles.contentWrapper}>
      <div>
        <img src={imgUrl} alt="loading..." className={styles.image} />
      </div>
      <div className={styles.details}>
        <div className={styles.titleText}>{title}</div>
        <div className={styles.aboutText}>{about}</div>
        <div className={styles.linkAndPrice}>
          <div>
            {price ? "Institute :" : "Website :"}
            <span>
              <a href={link}>{link}</a>
            </span>
          </div>
          {price && (
            <div>
              Price: <span style={{ color: "#2697fe" }}>${price}</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <RatingCard stars={stars} rating={rating} courseType={courseType} />
        {price && (
          <div className={styles.buyNow}>
            Buy now <RightArrow />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListCard;
