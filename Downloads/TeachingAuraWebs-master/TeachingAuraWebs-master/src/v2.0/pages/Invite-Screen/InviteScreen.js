import SidePanel from "../../components/SidePanel/SidePanel";
import Dashboard from "../../components/Dashboard/DashboardNavBar/DashboardNavBar";
import InputComp from "../../components/student-teacher/InputComp";
import DetailComp from "../../components/student-teacher/DetailComp";
import { details } from "../student-teacher/detailsData";
import styles from "./InviteScreen.module.scss";

const InviteScreen = () => {
  return (
    <>
      <SidePanel />
      <Dashboard
        page="Dashboard"
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
      <main className={styles.main}>
        <div className={styles.sendInvite}>
          <button className={styles.invite}>Send invite</button>
          <InputComp />
        </div>
        <div className={styles.details}>
          <div className={styles.titles}>
            <ul className={styles.titlesList}>
              <li className={styles.name}>NAME</li>
              <li className={styles.phone}>PHONE NUMBER</li>
              <li className={styles.email}>EMAIL</li>
              <li className={styles.status}>STATUS</li>
            </ul>
          </div>
          <div className={styles.detailsList}>
            {details.map((data) => (
              <DetailComp
                page={"invite-screen"}
                status
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

export default InviteScreen;
