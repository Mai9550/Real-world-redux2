import styles from "./Course.module.scss";

const Course = () => {
  return (
    <div className={styles.course}>
      <div className={styles.courseImgSection}>
        <img
          className={styles.courseImg}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*"
          alt="course"
        />
      </div>
      <div className={styles.courseMain}>
        <h2 className={styles.courseMainHeader}>
          Introduction to cute puppies
        </h2>
        <p className={styles.courseMainDesc}>
          loremry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </p>
        <p className={styles.courseMainExtra}>
          <span>
            Type <b className={styles.type}>Online</b>
          </span>
          <span>
            Course duration: <b className={styles.duration}>3 Months</b>
          </span>
        </p>
        <div className={styles.courseMainButtons}>
          <button className={styles.buyCourse}>Buy course</button>
          <button className={styles.deleteBatch}>Delete batch</button>
        </div>
      </div>
      <button className={styles.courseViewBatch}>View batches</button>
    </div>
  );
};

export default Course;
