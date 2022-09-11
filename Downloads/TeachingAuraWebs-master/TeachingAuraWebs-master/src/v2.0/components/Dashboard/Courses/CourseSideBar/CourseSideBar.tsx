import React, { useState } from "react";
import classnammes from "classnames";
import styles from "./CourseSideBar.module.scss";

const CourseSideBar = (props) => {
  const { active, setActive } = props;
  return (
    <div className={styles.contentWrapper}>
      <div
        className={active === "addFile" ? styles.active : ""}
        onClick={() => setActive("addFile")}
      >
        Add file
      </div>
      <div
        className={active === "addText" ? styles.active : ""}
        onClick={() => setActive("addText")}
      >
        Add text
      </div>
      <div
        className={active === "addQuiz" ? styles.active : ""}
        onClick={() => setActive("addQuiz")}
      >
        Add quiz
      </div>
      <div
        className={active === "overview" ? styles.active : ""}
        onClick={() => setActive("overview")}
      >
        Overview
      </div>
    </div>
  );
};

export default CourseSideBar;
