import styles from "./DetailComp.module.scss";

const DetailComp = ({ page, data, del, status }) => {
  return (
    <div
      className={`${
        page === "student-teacher" ? styles.details : styles.invite
      }`}
    >
      <div className={styles.first}>
        <img src={data.img} className={styles.img} />
        <div className={styles.content}>
          <h3 className={styles.name}>{data.name}</h3>
          {!status && (
            <p className={styles.batchId}>BATCH ID: {data.batchId}</p>
          )}
        </div>
      </div>
      <p className={styles.phone}>{data.phoneNumber}</p>
      <p className={styles.email}>{data.email}</p>
      {!status && <p className={styles.course}>{data.course}</p>}
      {status && (
        <p
          className={`${styles.status} ${
            data.status === "Pending" && styles.pending
          } ${data.status === "Rejected" && styles.rejected} ${
            data.status === "Accepted" && styles.accepted
          }`}
        >
          {data.status}
        </p>
      )}
      {del && <button className={styles.delete}>Delete</button>}
    </div>
  );
};

export default DetailComp;
