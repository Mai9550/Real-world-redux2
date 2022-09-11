import React, {useState, useRef, createRef, useEffect} from "react";

import styles from "./Signup.module.scss";
import NavBar from "../../../components/NavBar/NavBar";
import IconMain from "../../../components/Signup-Login/IconMain";
import AuthButton from "../../../components/Signup-Login/AuthButton";
import {useNavigate} from "react-router-dom";
import {useInjection} from "inversify-react";
import {SignInDetails} from "../../../../LoginFlow/SignInDetails";
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";

const Signup = () => {

    const signInDetails = useInjection<SignInDetails>("signInDetails");
    let navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        // console.log(signInDetails.role);
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': () => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // TODO: keep sign button disable until this is verified
            }
        }, auth);
    });

    function signup() {
        signInDetails.updateRole(user.account);
        localStorage.setItem('role', user.account);
        const phoneNumber = "+91" + phoneRef.current?.value!
        const appVerifier = window.recaptchaVerifier;
        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                // @ts-ignore
                window.confirmationResult = confirmationResult;
                console.log("OTP sent to user!");
                navigate("/otp", {
                    state: { phoneNumber: phoneNumber },
                });
            }).catch((error) => {
            console.error("Unable to send OTP!!" + error);
        });
    }

    const [user, setUser] = useState({
        account: "admin",
        phone: "",
    });
    const phoneRef = createRef<HTMLInputElement>()

    const onChangeAccount = (event) => {
        setUser((prevAccount) => ({
            ...prevAccount,
            account: event.target.value,
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Phone number is : " + phoneRef.current?.value)
        const phoneNumber = phoneRef.current?.value!
        setUser(prevAccount => {
            return {
                ...prevAccount,
                phone: phoneNumber,
            }
        });
        signup()
    };
    return (
        <>
            <div className={styles.container}>
                <NavBar/>
                <div className={styles.wrapper}>
                    <IconMain/>
                    <form className={styles.submitAccountDetails} onSubmit={submitForm}>
                        <p className={styles.submitText}>Select type of account</p>

                        <div className={styles.selectAccount}>
                            <div>
                                <input
                                    className={styles.selectAccountOption}
                                    type="radio"
                                    id="admin"
                                    name="account"
                                    value="admin"
                                    onChange={onChangeAccount}
                                    checked={user.account === "admin"}
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
                                    id="teacher"
                                    name="account"
                                    value="teacher"
                                    onChange={onChangeAccount}
                                    checked={user.account === "teacher"}
                                ></input>
                                <label
                                    className={styles.selectAccountOptionLabel}
                                    htmlFor="teacher"
                                >
                                    Teacher
                                </label>
                            </div>
                            <div>
                                <input
                                    className={styles.selectAccountOption}
                                    type="radio"
                                    id="student"
                                    name="account"
                                    value="student"
                                    onChange={onChangeAccount}
                                    checked={user.account === "student"}
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

export default Signup;
