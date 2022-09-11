import React, {useState} from "react";
import styles from "./Otp.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import IconMain from "../../components/Signup-Login/IconMain";
import AuthButton from "../../components/Signup-Login/AuthButton";
import OtpInput from "react-otp-input";
import {useInjection} from "inversify-react";
import {SignInDetails} from "../../../LoginFlow/SignInDetails";
import {AxiosInstance} from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {InstituteControllerService} from "../../../client";
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";

const Otp = () => {

    const [otp, setOtp] = useState("");
    const [error, setError] = useState(false);
    let handleChange = (otp) => {
        setError(false);
        setOtp(otp);
    }
    let once=false
    const location = useLocation();
    const auth = getAuth();
    const signInDetails = useInjection<SignInDetails>("signInDetails")
    const client = useInjection<AxiosInstance>("client");
    const navigate = useNavigate()
    const phoneNumber = location.state?.phoneNumber;

    function resendOtp() {
        if(!once) {
            window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                'size': 'invisible',
                'callback': () => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    // TODO: keep sign button disable until this is verified
                }
            }, auth);
        }
        once=true
        signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    }

    function signIn() {
        window.confirmationResult.confirm(otp).then((result) => {
            const user = result.user!;
            console.info("User signed in successfully : " + user.uid);
            console.info("User role is : " + signInDetails.role);

            if (signInDetails.role == "admin") {
                InstituteControllerService.getInstituteById(signInDetails.id + '')
                    .then((instituteDetails) => {
                        console.info("Institute already exists", instituteDetails)
                        navigate("/Profile")
                    })
                    .catch((error) => {
                        console.error("Institute does not already exists", error);
                        InstituteControllerService.createInstitute({
                            id: user.uid,
                            ownerContactNumber: user.phoneNumber!,
                            instituteName: "New Institute"
                        })
                            .then((instituteDetails) => {
                                console.info("Created institute successfully", instituteDetails)
                                navigate("/Profile")
                            })
                            .catch((error) => {
                                console.error("Got error while trying to create institute", error);
                            })
                    })
            } else if (signInDetails.role == "student") {
                client.post("/student", {
                    id: user.uid,
                    contactNumber: user.phoneNumber,
                    name: "New Student"
                }).then((response) => {
                    console.log("student=>" + JSON.stringify(response.data, null, 4))
                    // TODO: route to profile screen only if user is signing up
                    navigate("/Profile")
                }).catch((e) =>
                    console.log(e)
                )
            } else {
                // TODO: handle teacher flow
                client.post("/teacher", {
                    id: user.uid,
                    contactNumber: user.phoneNumber,
                    name: "New Teacher"
                }).then((response) => {
                    console.log("teacher=>" + JSON.stringify(response.data, null, 4))
                    // TODO: route to profile screen only if user is signing up
                    navigate("/Profile")
                }).catch((e) =>
                    console.log(e)
                )
            }

        }).catch((ex: Error) => {
            console.error("Incorrect otp entered", ex);
            setError(true);
        });

    }

    return (
        <>
            <div className={styles.container}>
                <NavBar/>
                <div className={styles.wrapper}>
                    <IconMain/>
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                        inputStyle={{
                            width: "4rem",
                            height: "4rem",
                            margin: "1rem",
                            padding: "1rem",
                            fontSize: "2rem",
                            borderRadius: 4,
                            border: "1px solid rgba(0,0,0,0.3)"
                        }}
                        hasErrored={error}
                        errorStyle={{
                            width: "4rem",
                            height: "4rem",
                            margin: "1rem",
                            padding: "1rem",
                            fontSize: "2rem",
                            borderRadius: 4,
                            border: "1px solid rgba(255,0,0,0.6)"
                        }}
                        containerStyle={{
                            marginTop: "2rem"
                        }}
                    />
                    <div className={styles.incorrectOtp}> {error ? "Incorrect OTP" : ""} </div>
                    <div className={styles.submitAccountDetails}>
                        <p className={styles.resendOtp}>
                            Didn't recieve the OTP?{" "}
                            <button className={styles.resendOtpLink} onClick={() => resendOtp()}>Resend</button>
                        </p>
                        <AuthButton onClick={() => signIn()}>Continue</AuthButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Otp;
