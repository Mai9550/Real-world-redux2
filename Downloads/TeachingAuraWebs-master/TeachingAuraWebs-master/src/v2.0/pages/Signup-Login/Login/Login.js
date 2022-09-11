import React, { useState, useRef } from "react";

import styles from "./Signup.module.scss";
import NavBar from "../../../components/NavBar/NavBar";
import IconMain from "../../../components/Signup-Login/IconMain";
import AuthButton from "../../../components/Signup-Login/AuthButton";

const Login = () => {
  const [user, setUser] = useState({
    account: "",
    phone: "",
  });
  const phoneRef = useRef("");

  const onChangeAccount = (event) => {
    setUser((prevAccount) => ({
      ...prevAccount,
      account: event.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setUser((prevAccount) => ({
      ...prevAccount,
      phone: phoneRef.current.value,
    }));
  };
  return (
    <>
      <div className={styles.container}>
        <NavBar page="login" />
        <div className={styles.wrapper}>
          <IconMain />
          <form className={styles.submitAccountDetails} onSubmit={submitForm}>
            <p className={styles.submitText}>Select type of account</p>

            <div className={styles.selectAccount}>
              <div>
                <input
                  className={styles.selectAccountOption}
                  type="radio"
                  id="admin"
                  name="account"
                  value="Admin"
                  onChange={onChangeAccount}
                  checked={user.account === "Admin"}
                ></input>
                <label
                  className={styles.selectAccountOptionLabel}
                  htmlFor="admin"
                >
                  Admin
                </label>
              </div>
              <div>
                <input
                  className={styles.selectAccountOption}
                  type="radio"
                  id="institute"
                  name="account"
                  value="Institute"
                  onChange={onChangeAccount}
                  checked={user.account === "Institute"}
                ></input>
                <label
                  className={styles.selectAccountOptionLabel}
                  htmlFor="institute"
                >
                  Institute
                </label>
              </div>
              <div>
                <input
                  className={styles.selectAccountOption}
                  type="radio"
                  id="student"
                  name="account"
                  value="Student"
                  onChange={onChangeAccount}
                  checked={user.account === "Student"}
                ></input>
                <label
                  className={styles.selectAccountOptionLabel}
                  htmlFor="student"
                >
                  Student
                </label>
              </div>
            </div>
            <input
              className={styles.phoneNumber}
              ref={phoneRef}
              type="text"
              placeholder="Phone number"
            ></input>
            <AuthButton>Continue</AuthButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
