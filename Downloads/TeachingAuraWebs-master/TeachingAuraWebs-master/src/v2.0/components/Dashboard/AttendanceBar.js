import styles from "./AttendanceBar.module.scss";
import styled from "styled-components";

const Bar = styled.div`
  height: ${(props) => props.height}px;
  width: 20px;
  background-color: #2697fe;
`;
const AttendanceBar = ({ who, barValue }) => {
  const days = [30, 25, 20, 15, 10, 5, 0];
  const months = Object.keys(barValue);

  const Bars = [];
  months.map((month) => {
    if (barValue[month] >= 0 && barValue[month] < 5) {
      Bars.push(<Bar height={barValue[month] + 16} />);
    } else if (barValue[month] >= 5 && barValue[month] < 10) {
      Bars.push(<Bar height={barValue[month] + 41} />);
    } else if (barValue[month] >= 10 && barValue[month] < 15) {
      Bars.push(<Bar height={barValue[month] + 66} />);
    } else if (barValue[month] >= 15 && barValue[month] < 20) {
      Bars.push(<Bar height={barValue[month] + 93} />);
    } else if (barValue[month] >= 20 && barValue[month] < 25) {
      Bars.push(<Bar height={barValue[month] + 117} />);
    } else if (barValue[month] >= 25 && barValue[month] < 30) {
      Bars.push(<Bar height={barValue[month] + 142} />);
    } else if (barValue[month] >= 30 && barValue[month] < 35) {
      Bars.push(<Bar height={barValue[month] + 166} />);
    }
  });
  console.log(Bars);
  return (
    <div className={styles.attendanceBar}>
      <h3 className={styles.barHeader}>{who}'s Attendance %</h3>
      <div className={styles.barCenter}>
        <div className={styles.barDays}>
          {days.map((day) => (
            <span className={styles.barDay}>{day}</span>
          ))}
        </div>
        <div className={styles.barGraph}>
          <div className={styles.bars}>{Bars}</div>
        </div>
      </div>
      <div className={styles.barMonth}>
        {months.map((month) => (
          <span className={styles.barMonth}>{month}</span>
        ))}
      </div>
    </div>
  );
};

export default AttendanceBar;
