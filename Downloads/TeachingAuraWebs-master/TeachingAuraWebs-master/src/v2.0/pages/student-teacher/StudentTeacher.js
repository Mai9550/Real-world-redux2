import React, { useState } from "react";
import SidePanel from "../../components/SidePanel/SidePanel";
import Dashboard from "../../components/Dashboard/DashboardNavBar/DashboardNavBar";
import InputComp from "../../components/student-teacher/InputComp";
import DetailComp from "../../components/student-teacher/DetailComp";
import SendInvite from "../../components/student-teacher/SendInvite";
import { details } from "./detailsData";
import styles from "./StudentTeacher.module.scss";

const StudentTeacher = () => {
  const [inviteModal, setInviteModal] = useState(false);
  return (
    <>
      <SidePanel />
      <Dashboard
        invite
        setInviteModal={setInviteModal}
        page="Dashboard"
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
      <main className={styles.main}>
        <div className={styles.selectOrInput}>
          <div className={styles.selection}>
            <select id="onlineCourse" className={styles.onlineCourse}>
              <option className={styles.option} value="Online course">
                Online course
              </option>
              <option className={styles.option} value="Offline course">
                Offline course
              </option>
            </select>
          </div>
          <InputComp />
        </div>
        {inviteModal && <SendInvite setInviteModal={setInviteModal} />}
        <div className={styles.details}>
          <div className={styles.titles}>
            <ul className={styles.titlesList}>
              <li className={styles.name}>NAME</li>
              <li className={styles.phone}>PHONE NUMBER</li>
              <li className={styles.email}>EMAIL</li>
              <li className={styles.course}>COURSE</li>
            </ul>
          </div>
          <div className={styles.detailsList}>
            {details.map((data) => (
              <DetailComp
                page={"student-teacher"}
                del
                key={data.id}
                data={data}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default StudentTeacher;
