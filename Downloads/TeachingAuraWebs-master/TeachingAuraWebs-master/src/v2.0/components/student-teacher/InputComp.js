import React, { useState } from "react";
import styles from "./InputComp.module.scss";
import { Close, Search } from "@mui/icons-material";

const InputComp = () => {
  const [teacher, setTeacher] = useState("");
  return (
    <div className={styles.teacherStudentInputSection}>
      <input
        onChange={(e) => setTeacher(e.target.value)}
        type="text"
        value={teacher}
        className={styles.teacherStudentInput}
      />
      <div className={styles.actions}>
        <Close onClick={() => setTeacher("")} className={styles.close} />
        <Search className={styles.search} />
      </div>
    </div>
  );
};

export default InputComp;
