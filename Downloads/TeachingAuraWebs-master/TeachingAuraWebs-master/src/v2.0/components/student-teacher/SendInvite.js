import { SignalWifiConnectedNoInternet4TwoTone } from "@mui/icons-material";
import { style } from "@mui/system";
import { useState } from "react";
import styles from "./SendInvite.module.scss";

const SendInvite = ({ setInviteModal }) => {
  const [teacherClick, setTeacherClick] = useState(false);
  const [phoneClick, setPhoneClick] = useState(false);
  const [teacher, setTeacher] = useState("");
  const [phone, setPhone] = useState("");

  const teacherHandler = (e) => {
    if (!teacherClick) {
      return;
    }

    setTeacher(e.target.value);
  };
  const phoneHandler = (e) => {
    if (!phoneClick) {
      return;
    }
    setPhone(e.target.value);
  };
  return (
    <>
      <div
        onClick={() => setInviteModal(false)}
        className={styles.overlay}
      ></div>
      <form action="/v2/invite-screen" className={styles.sendInvite}>
        <h2 className={styles.heading}>Add Teacher</h2>
        <div className={styles.inputSection}>
          <div
            className={styles.teacherNameSection}
            onClick={() => {
              if (teacherClick && teacher.length !== 0) {
                return;
              }
              setTeacherClick(!teacherClick);
            }}
          >
            <label
              onClick={(e) => {
                e.stopPropagation();
              }}
              htmlFor="teacher-name"
              className={`${styles.teacherNameLabel} ${
                teacherClick && styles.moveUp
              }`}
            >
              Teacher Name
            </label>
            <input
              onChange={teacherHandler}
              value={teacher}
              id="teacher-name"
              type="text"
              className={`${styles.teacherName}`}
            />
          </div>
          <div
            className={styles.phoneNumSection}
            onClick={() => {
              if (phoneClick && phone.length !== 0) {
                return;
              }
              setPhoneClick(!phoneClick);
            }}
          >
            <label
              onClick={(e) => {
                e.stopPropagation();
              }}
              htmlFor="phone-num"
              className={`${styles.phoneNumLabel} ${
                phoneClick && styles.moveUp
              }`}
            >
              Phone Number
            </label>
            <input
              onChange={phoneHandler}
              value={phone}
              id="phone-num"
              type="text"
              className={styles.phoneNum}
            />
          </div>
        </div>
        <button type="submit" className={styles.sendInviteB}>
          Send invite
        </button>
      </form>
    </>
  );
};

export default SendInvite;
