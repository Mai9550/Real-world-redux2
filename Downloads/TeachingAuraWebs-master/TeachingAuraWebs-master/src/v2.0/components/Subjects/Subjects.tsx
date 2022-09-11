import React from "react";
import styles from "./Subjects.module.scss";

const Subjects = (props) => {
  const { subjects } = props;
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Subject and their topics you will learn
      </div>
      <div className={styles.subjectsWrapper}>
        {subjects.map((subject) => {
          return (
            <div className={styles.subject}>
              <div className={styles.title}>{subject.title}</div>
              <div className={styles.topics}>
                {subject.topics.map((topic) => {
                  return (
                    <div className={styles.topic}>
                      <div className={styles.dot} />
                      {topic}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subjects;
