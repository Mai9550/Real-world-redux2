import React from "react";
import RatingCard from "../RatingCard/RatingCard";
import { ReactComponent as RightArrow } from "../../.././assets/image/SVG/right-arrow.svg";
import styles from "./GridCard.module.scss";

const GridCard = (props) => {
  const { title, about, imgUrl, link, price, stars, rating, courseType } =
    props;
  return (
    <div className={styles.contentWrapper}>
      <img src={imgUrl} alt="loading..." className={styles.image} />
      <div className={styles.detailsWrapper}>
        <div className={styles.titleText}>{title}</div>
        <div className={styles.pricing}>
          {price ? "Institute :" : "Website :"}
          <span>
            <a href={link}>{link}</a>
          </span>
        </div>
        <div className={styles.aboutText}>{about}</div>
        <RatingCard stars={stars} rating={rating} courseType={courseType} />
        <div className={styles.pricingAndBuyNow}>
          {price && (
            <div>
              Price: <span style={{ color: "#2697fe" }}>${price}</span>
            </div>
          )}
          {price && (
            <div className={styles.buyNow}>
              Buy now
              <RightArrow />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridCard;
