import React, { useState } from "react";
import { ReactComponent as DotSquare } from "../../../../../assets/image/SVG/dot-square.svg";
import { ReactComponent as BackArrow } from "../../../../../assets/image/SVG/back-arrow.svg";
import { ReactComponent as EditIcon } from "../../../../../assets/image/SVG/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../../../assets/image/SVG/delete-icon.svg";
import styles from "./Editable.module.scss";

const Editable = (props) => {
  const { text, noDelete, arrow, onBack, onDelete = () => null } = props;
  const [showText, setShowText] = useState(text);
  const [edit, setEdit] = useState(false);
  return (
    <div className={styles.editWrapper}>
      {arrow ? (
        <BackArrow
          width="40px"
          height="18px"
          style={{ cursor: "pointer" }}
          onClick={() => onBack(false)}
        />
      ) : (
        <DotSquare />
      )}
      {edit ? (
        <div>
          <input
            type="text"
            name="name"
            value={showText}
            onChange={(e) => setShowText(e.target.value)}
            width="auto"
          />
        </div>
      ) : (
        <span>{showText}</span>
      )}
      {edit ? (
        <button onClick={() => setEdit(false)}>Save</button>
      ) : (
        <div className={styles.editWrapper}>
          <EditIcon
            onClick={() => setEdit(true)}
            style={{ cursor: "pointer" }}
          />
          {!noDelete && (
            <DeleteIcon
              style={{ cursor: "pointer" }}
              onClick={() => onDelete()}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Editable;
