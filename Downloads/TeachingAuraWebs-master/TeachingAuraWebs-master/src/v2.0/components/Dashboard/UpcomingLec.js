import styles from "./UpcomingLec.module.scss";
import { AccessTime } from "@mui/icons-material";
import { ReactComponent as ElementOfCoding } from "../../../assets/image/SVG/Dashboard/ElementOfCoding.svg";
import { ReactComponent as FundamentalOfDesign } from "../../../assets/image/SVG/Dashboard/FundamentalOfDesign.svg";
import { ReactComponent as Typography } from "../../../assets/image/SVG/Dashboard/Typography.svg";
import { ReactComponent as VisualRhythm } from "../../../assets/image/SVG/Dashboard/VisualRhythm.svg";

const UpcomingLec = ({ time, title, duration, date, color }) => {
  return (
    <div className={styles.upcomingLec}>
      <div className={styles.upcoming}>
        <p className={styles.upcomingTime}>{time}</p>
        <p className={styles.upcomingDate}>{date}</p>
      </div>
      <div className={styles.separation}>
        {/* <img
          className={styles.separationImg}
          alt="design"
          src="https://cdn.pixabay.com/photo/2016/12/06/01/26/colour-1885352__340.jpg"
        /> */}
        <div className={`${styles.separationImg} ${styles[color]}`}>
          {color === "purple" && (
            <FundamentalOfDesign className={styles.separationSvg} />
          )}
          {color === "blue" && (
            <ElementOfCoding className={styles.separationSvg} />
          )}
          {color === "pink" && <Typography className={styles.separationSvg} />}
          {color === "yellow" && (
            <VisualRhythm className={styles.separationSvg} />
          )}
        </div>
      </div>
      <div className={styles.upcomingContent}>
        <h3 className={styles.upcomingTitle}>{title}</h3>
        <p className={styles.upcomingDuration}>
          <AccessTime className={styles.clock} /> {duration}
        </p>
      </div>
    </div>
  );
};

export default UpcomingLec;
