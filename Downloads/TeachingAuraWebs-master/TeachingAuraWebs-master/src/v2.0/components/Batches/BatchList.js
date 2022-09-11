import styles from "./BatchList.module.scss";

const BatchList = ({ batch, batches, setBatches }) => {
  const deleteBatch = (e) => {
    const newBatches = batches.filter((b) => b.id !== batch.id);
    setBatches(newBatches);
  };
  return (
    <div className={styles.container}>
      <div className={styles.batchDetails}>
        <div className={styles.batchText}>
          <h2 className={styles.batchName}>{batch.batchName}</h2>
          <div className={styles.courseName}>
            Course name:
            <span className={styles.courseNameValue}>{batch.courseName}</span>
          </div>
          <div className={styles.startDate}>
            Start date:
            <span className={styles.startDateValue}>{batch.startDate}</span>
          </div>
          <div className={styles.studentsNum}>
            Number of students:
            <span className={styles.studentsNumValue}>
              {batch.studentsNum}
              {batch.studentsNum > 1 ? " students" : " student"}
            </span>
          </div>
          <div className={styles.teachersNum}>
            Number of teachers:
            <span className={styles.teachersNumValue}>
              {batch.teachersNum}
              {batch.teachersNum > 1 ? " teachers" : " teacher"}
            </span>
          </div>
          <button className={styles.deleteBatch} onClick={deleteBatch}>
            Delete Batch
          </button>
        </div>
        <img
          className={styles.batchImg}
          src={batch.img}
          alt={batch.courseName}
        />
      </div>
    </div>
  );
};

export default BatchList;
