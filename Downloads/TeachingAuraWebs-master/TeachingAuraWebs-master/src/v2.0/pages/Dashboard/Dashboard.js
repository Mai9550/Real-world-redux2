import React from "react";
import Side_Menu from "../../../components/Side_Menu";
import SidePanel from "../../components/SidePanel/SidePanel";
import DashboardNavBar from "../../components/Dashboard/DashboardNavBar/DashboardNavBar";
import Total from "../../components/Dashboard/Total";
import AttendanceBar from "../../components/Dashboard/AttendanceBar";
import LiveUpcomingLecUI from "../../components/Dashboard/LiveUpcomingLecUI";
import PastLecture from "../../components/Dashboard/PastLecture";
import LiveClass from "../../components/Dashboard/LiveClass";
import UpcomingLec from "../../components/Dashboard/UpcomingLec";
import { LockOutlined } from "@mui/icons-material";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <>
      {/* <Side_Menu /> */}
      <SidePanel page="dashboard" />
      <DashboardNavBar
        page="Dashboard"
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div className={styles.total}>
            <Total who="students" num={2406} />
            <Total who="teachers" num={2000} />
            <Total who="courses" num={4069} />
          </div>
          <div className={styles.attendanceStats}>
            <h3 className={styles.attendanceHeader}>Attendance stats</h3>
            <div className={styles.onlyAttendance}>
              <AttendanceBar
                who="Teacher"
                barValue={{
                  "Feb 02": 11,
                  "Feb 03": 16,
                  "Feb 04": 22,
                  "Feb 05": 5,
                  "Feb 06": 2,
                }}
              />
              <AttendanceBar
                who="Student"
                barValue={{
                  "Feb 02": 5,
                  "Feb 03": 12,
                  "Feb 04": 7,
                  "Feb 05": 11,
                  "Feb 06": 19,
                }}
              />
            </div>
          </div>
          <div className={styles.leftBottom}>
            <LiveUpcomingLecUI>
              <div className={styles.liveTop}>
                <h3 className={styles.liveText}>
                  <span className={styles.dot}></span> Live
                  <span className={styles.liveClasses}>6 live classes</span>
                </h3>
                <button className={styles.manageAll}>Manage all</button>
              </div>
              <div className={styles.liveBottom}>
                <LiveClass
                  time="2 minutes ago"
                  duration="3 hour class"
                  title="Fundamentals of design"
                  img="https://i.ytimg.com/vi/YqQx75OPRa0/maxresdefault.jpg"
                />
                <LiveClass
                  time="6 minutes ago"
                  duration="1 hour class"
                  title="User analytics"
                  img="https://keen.io/wp-content/uploads/2019/12/Keen-Blogs-2019-Square-ish_4f7d1b91f06d5f16ecb5d308263cf132_800.jpg"
                />
                <LiveClass
                  time="20 minutes ago"
                  duration="3 hour class"
                  title="User thinking"
                  img="https://1.bp.blogspot.com/-b2hc869wRc8/X27kHZWmReI/AAAAAAAAFUw/CvEdQR5QG7sLAs89t6qt2vpMDsgqkDpCACLcBGAsYHQ/s2048/User%2Bthinking.png"
                />
                <LiveClass
                  time="2 minutes ago"
                  duration="3 hour class"
                  title="Fundamentals of design"
                  img="https://i.ytimg.com/vi/YqQx75OPRa0/maxresdefault.jpg"
                />
              </div>
            </LiveUpcomingLecUI>
            <LiveUpcomingLecUI>
              <h3 className={styles.upcomingHeader}>Upcoming lectures</h3>
              <div className={styles.upcomingLec}>
                <UpcomingLec
                  time="11:30am-2:30pm"
                  date="1oth August 2022"
                  duration="3 hour class"
                  title="Fundamentals of design"
                  color="purple"
                />
                <UpcomingLec
                  time="11:30am-2:30pm"
                  date="1oth August 2022"
                  duration="1 hour class"
                  title="Element of coding"
                  color="pink"
                />
                <UpcomingLec
                  time="11:30am-2:30pm"
                  date="1oth August 2022"
                  duration="1 hour class"
                  title="Typography"
                  color="blue"
                />
                <UpcomingLec
                  time="11:30am-2:30pm"
                  date="1oth August 2022"
                  duration="1 hour class"
                  title="Visual rhythm"
                  color="yellow"
                />
              </div>
            </LiveUpcomingLecUI>
          </div>
        </div>
        <div className={styles.mainRight}>
          <div className={styles.commingSoon}>
            <div className={styles.below}>
              <h3 className={styles.belowText}>
                My <br /> total <br /> earning <br />
              </h3>
              <b className={styles.belowPrice}>$400</b>
              <button className={styles.belowButton}>View transactions</button>
            </div>
            <div className={styles.above}>
              <LockOutlined className={styles.aboveLock} />
              <h3 className={styles.aboveText}>Coming soon</h3>
            </div>
          </div>
          <div className={styles.pastLectures}>
            <h3 className={styles.pastLecHeader}>Past lectures</h3>
            <div className={styles.pastLecturesList}>
              <PastLecture
                name="Typography"
                students={246}
                img="https://www.lafilm.edu/wp-content/uploads/2020/05/JokeTypography-min.png"
              />
              <PastLecture
                name="Dynamic of typeface"
                students={101}
                img="https://www.lafilm.edu/wp-content/uploads/2020/05/JokeTypography-min.png"
              />
              <PastLecture
                name="User interface design"
                students={201}
                img="https://www.velocityconsultancy.com/wp-content/uploads/2019/05/post-54.jpg"
              />
              <PastLecture
                name="Coding for beginners"
                students={100}
                img="https://www.lafilm.edu/wp-content/uploads/2020/05/JokeTypography-min.png"
              />
              <PastLecture
                name="User research"
                students={213}
                img="https://www.velocityconsultancy.com/wp-content/uploads/2019/05/post-54.jpg"
              />
              <PastLecture
                name="Illustration master"
                students={234}
                img="https://www.velocityconsultancy.com/wp-content/uploads/2019/05/post-54.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
