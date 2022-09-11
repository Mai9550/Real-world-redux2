import React from "react";
import styles from "./AboutNContact.module.scss";

const AboutNContact = (props) => {
  const { title, about, address, phone } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {about && <div className={styles.text}>{about}</div>}
      {address && (
        <div className={styles.text}>
          <b>Address: </b>
          {address}
        </div>
      )}
      {phone && (
        <div className={styles.text}>
          <b>Phone: </b>
          {phone}
        </div>
      )}
    </div>
  );
};

export default AboutNContact;
