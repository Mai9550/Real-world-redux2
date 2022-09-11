import styles from "./Total.module.scss";

const Total = ({ who, num }) => {
  return (
    <div className={` ${styles.total} ${styles[who]}`}>
      <h3 className={styles.totalText}> Total {who}</h3>
      <span className={styles.totalNum}>{num}</span>
    </div>
  );
};

export default Total;
