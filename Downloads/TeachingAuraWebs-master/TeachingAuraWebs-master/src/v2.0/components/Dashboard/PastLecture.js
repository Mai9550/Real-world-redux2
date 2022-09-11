import styles from "./PastLecture.module.scss";

const PastLecture = (props) => {
  const { name, students, img } = props;
  return (
    <div className={styles.pastLecture}>
      <img className={styles.img} src={img} alt={name} />
      <div className={styles.textSection}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.studentsNum}>{students} Students present</p>
      </div>
    </div>
  );
};

export default PastLecture;
