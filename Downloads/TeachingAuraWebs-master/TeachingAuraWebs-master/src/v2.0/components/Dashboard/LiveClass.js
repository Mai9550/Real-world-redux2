import styles from "./LiveClass.module.scss";
import { AccessTime } from "@mui/icons-material";

const LiveClass = (props) => {
  const { time, duration, title, img } = props;
  return (
    <div className={styles.liveClass}>
      <div className={styles.liveTime}>{time}</div>
      <div className={styles.liveDash}></div>
      <div className={styles.liveContent}>
        <img className={styles.liveImg} src={img} alt={title} />
        <div className={styles.liveText}>
          <h4 className={styles.liveTitle}>{title}</h4>
          <p className={styles.liveDuration}>
            <AccessTime className={styles.liveClock} /> {duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
