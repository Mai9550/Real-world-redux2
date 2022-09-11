import styles from "./AuthButton.module.scss";

const AuthButton = (props) => {
  return (
    <div className={styles.container}>
      <button id="sign-in-button" onClick={props.onClick} className={styles.authButton}>{props.children}</button>
    </div>
  );
};

export default AuthButton;
