import styles from "./IconMain.module.scss";
import { ReactComponent as AuraIcon } from "../../../assets/image/SVG/Group.svg";

const IconMain = () => {
  return (
    <div className={styles.container}>
      <AuraIcon style={{ height: "100px" }} />
      <h2 className={styles.welcome}>Welcome</h2>
    </div>
  );
};

export default IconMain;
