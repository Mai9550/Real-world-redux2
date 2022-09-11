import React from "react";
import Editable from "./Editable";
import styles from "./Row.module.scss";

const Row = (props) => {
  const { text, onEditContent } = props;
  return (
    <div className={styles.rowWrapper}>
      <Editable text={text} />
      <button className={styles.button} onClick={() => onEditContent(true)}>
        Edit content
      </button>
    </div>
  );
};

export default Row;
