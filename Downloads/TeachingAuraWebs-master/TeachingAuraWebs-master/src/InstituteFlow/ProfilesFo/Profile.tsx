import React, {useEffect, useState} from "react";
import HeadSub from "../../components/HeadSub";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles";
import Side_Menu from "../../components/Side_Menu";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Creatable, {useCreatable} from 'react-select/creatable';
import makeAnimated from "react-select/animated";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {useInjection} from "inversify-react";
import {AxiosInstance} from "axios";
import {SignInDetails} from "../../LoginFlow/SignInDetails";
import {RefreshProfile} from "../../observables/RefreshEvents";
import PhotoIc from "../../icon/drawable/PhotoIc";
import StarIc from "../../icon/drawable/StarIc";
import SideMenu from "../../components/Side_Menu";
import {useNavigate} from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import {components} from "react-select";
import {
    InstituteControllerService,
    StudentControllerService,
    StudentDetails,
    TeacherControllerService
} from "../../client";

const Profile = () => {
    const instituteId = useInjection<SignInDetails>("signInDetails").id;

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [OwnerName, setOwnerName] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [maxEducation, setMaxEducation] = useState("");
    const [AboutUs, setAboutUs] = useState("");
    const [logo, setLogo] = useState(
"https://cdn.glitch.global/f1b16922-0983-4ea8-87da-df0548a027df/Group%2042.svg?v=1643963395426"    );
    const [skills, setSkills] = useState<any>([{}]);

    const animatedComponents = makeAnimated();
    const client = useInjection<AxiosInstance>("client");
    const signInDetails = useInjection<SignInDetails>("signInDetails");
    const role = signInDetails.role;
    const Input = styled("input")({
        display: "none",
    });

    const storage = getStorage();
    const storageRef = ref(storage, signInDetails.id + `/${signInDetails.role === 'admin' ? 'institute' : signInDetails.role}/profile`);
    // const storageRef = ref(storage, 'NvAU5VSodBSJS0v9eAWMPf34Qut2/teacher/profile');
    const uploadProfileImage = (file) => {
        uploadBytes(storageRef, file)
            .then(async (snapshot) => {
                console.log("Uploaded profile photo on path : " + signInDetails.id + `/${signInDetails.role === 'admin' ? 'institute' : signInDetails.role}/profile`);
                RefreshProfile.next();
                // window.location.reload();
            })
            .catch((e) => console.log(e));
    };

    const init = () => {
        if (signInDetails.role === 'admin') {
            client.get("/institute/" + signInDetails.id).then((response) => {
                setName(response.data["instituteName"]);
                setOwnerName(response.data["ownerName"]);
                setEmail(response.data["email"]);
                setContactNumber(response.data["ownerContactNumber"]);
                setAboutUs(response.data["aboutUs"]);
                setLogo(response.data["logo"]);
            });
        } else if (signInDetails.role == 'student') {
            client.get(`/${signInDetails.role}/` + signInDetails.id).then((response) => {
                console.log("JNAA", response.data);
                setName(response.data["name"]);
                setEmail(response.data["email"]);
                setContactNumber(response.data["contactNumber"]);
                setLogo(response.data["profilePicURL"]);
                setMaxEducation(response.data['maxEducation']); // This need to be changed with the maximum education of the student in case the role is institute.
            });
        } else {
            client.get(`/${signInDetails.role}/` + signInDetails.id).then((response) => {
                console.log("JNAA", response.data);
                console.log('=>', response.data['subject'].split(','))
                setSkills(response.data['subject'].split(',').map(r => {
                    let d = {};
                    d['value'] = d['label'] = r;
                    return d
                }))
                // console.log(skills)
                setName(response.data["name"]);
                setEmail(response.data["email"]);
                setContactNumber(response.data["contactNumber"]);
                setLogo(response.data["profilePicURL"]);
            });
        }
    };
    useEffect(() => {
        init();
        const subscription = RefreshProfile.subscribe(() => {
            init();
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const Handle = () => {

        let data;
        if (signInDetails.role === 'admin') {
            data = {
                aboutUs: AboutUs,
                id: signInDetails.id,
                instituteName: Name,
                logo: logo,
                ownerContactNumber: ContactNumber,
                email: Email,
                ownerName: OwnerName,
            };
            console.log("req =>", data);
            InstituteControllerService.updateInstitute(signInDetails.id + '', data).then(r => {
                console.log('sussess', r);
                RefreshProfile.next()
            }).catch(e => console.log(e))
        } else if (signInDetails.role === 'student') {
            data = {
                name: Name,
                id: signInDetails.id,
                profilePicURL: logo,
                contactNumber: ContactNumber,
                email: Email,
                maxEducation: maxEducation,
            };
            console.log("req =>", data);
            StudentControllerService.updateStudent(signInDetails.id + '', data).then(r => {
                console.log('sussess', r);
                RefreshProfile.next()
            }).catch(e => console.log(e))
        } else {
            data = {
                name: Name,
                id: signInDetails.id,
                profilePicURL: logo,
                contactNumber: ContactNumber,
                email: Email,
                subject: skills.map(r=>r['label']).toString()
            };
            console.log("req =>", data);
            TeacherControllerService.updateTeacher(signInDetails.id + '', data).then(r => {
                console.log('sussess', r);
                RefreshProfile.next()
            }).catch(e => console.log(e))
        }

    };
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className={(signInDetails.role == 'admin') ? "content_full_container box_ladto" : ""}>
                {(signInDetails.role == 'admin') ? <SideMenu/> : true}
                <div
                    className={(signInDetails.role == 'admin') ? "content_box content_box22" : "content_box content_box22 ml-0"}>

                    <header className="heder_nav">
                        <div className="box_vc_nav_right box_vc_nav_right22">
                            {(signInDetails.role != 'admin') ?
                                <a onClick={() => navigate(-1)}>
                                    <i className="fa fa-long-arrow-left"/>
                                </a> : false
                            }
                            <h4>Profile</h4>
                        </div>
                        <div className="box_vc_nav_left">
                            <HeadSub active="profile"/>
                        </div>
                    </header>

                    <div className="conte_box_deboard py-0">
                        <div className="conte_box_deboard_inner bg-white rounded-[40px]">
                            <div className="profile_cont">
                                <img src="assets/image/bg.jpg"/>

                                <div className="profile_img_con">
                                    <div className="pro_inner">
                                        <img src={logo}
                                             onError={({ currentTarget }) => {
                                                 currentTarget.onerror = null; // prevents looping
                                                 currentTarget.src="https://cdn.glitch.global/f1b16922-0983-4ea8-87da-df0548a027df/Group%2042.svg?v=1643963395426";
                                             }}
                                        />
                                        {/*<img src={logo}/>*/}
                                        <div className=" uploadbtn2">
                                            <label
                                                htmlFor="contained-button-file"
                                                className="btnx_hede2dc "
                                            >
                                                <Input
                                                    accept="image/*"
                                                    id="contained-button-file"
                                                    type="file"
                                                    onChange={(e) => {
                                                        if (e.target.files != null) {
                                                            console.log("Attemptintg to upload profile pic");
                                                            uploadProfileImage(e.target.files.item(0));
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    variant="contained"
                                                    component="span"
                                                    className="btnx_hedex btnx_hede2dc33"
                                                >
                                                    <PhotoIc/>
                                                </Button>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-y-4 gap-6 py-4 px-12">
                                <TextField
                                    value={Name}
                                    type="text"
                                    label="Name"
                                    style={{margin: 0, borderRadius: "20px"}}
                                    InputLabelProps={{shrink: true}}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />

                                {role === "admin" && (
                                    <TextField
                                        value={OwnerName}
                                        type="text"
                                        label="Owner Name"
                                        InputLabelProps={{shrink: true}}
                                        onChange={(e) => {
                                            setOwnerName(e.target.value);
                                        }}
                                    />
                                )}

                                <TextField
                                    value={Email}
                                    type="text"
                                    label="Email"
                                    InputLabelProps={{shrink: true}}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <TextField
                                    value={ContactNumber}
                                    type="text"
                                    label="Phone number"
                                    InputLabelProps={{shrink: true}}
                                />
                                {role === "student" && (
                                    <>
                                        <FormControl
                                            fullWidth
                                            variant="standard"
                                            hiddenLabel
                                            style={{
                                                background: "#EEEEEE",
                                                borderRadius: "18px",
                                            }}
                                        >
                                            <InputLabel
                                                id="demo-simple-select-label"
                                                style={{padding: "8px", marginLeft: "16px"}}
                                            >
                                                Max Education
                                            </InputLabel>
                                            <Select
                                                label="Max Education"
                                                onChange={(e) => setMaxEducation(e.target.value)}
                                                value={maxEducation}
                                                style={{
                                                    padding: "4px 22px",
                                                }}
                                            >
                                                <MenuItem value={"BELOW_MATRICULATE"}>
                                                    BELOW_MATRICULATE
                                                </MenuItem>
                                                <MenuItem value={"MATRICULATE"}>MATRICULATE</MenuItem>
                                                <MenuItem value={"HIGHER SECONDARY"}>
                                                    HIGHER SECONDARY
                                                </MenuItem>
                                                <MenuItem value={"UNDERGRADUATE"}>
                                                    UNDERGRADUATE
                                                </MenuItem>
                                                <MenuItem value={"POST GRADUATE"}>
                                                    POST GRADUATE
                                                </MenuItem>
                                                <MenuItem value={"OTHERS"}>OTHERS</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </>
                                )}
                            </div>
                            <div className="space-y-3 px-4">
                                {role === "admin" && (
                                    <>
                                        <h4 className="text-lg font-bold px-2">About Us</h4>
                                        <TextareaAutosize
                                            value={AboutUs}
                                            aria-label="empty textarea"
                                            placeholder="Minimum 3 rows"
                                            minRows={6}
                                            className="textAreaca outline-none font-bold"
                                            onChange={(e) => setAboutUs(e.target.value)}
                                        />
                                    </>
                                )}
                                {role === "teacher" && (
                                    <>
                                        <h4 className="text-lg font-bold px-2">Skills</h4>
                                        <div style={{padding: "0rem 2rem"}}>
                                            <CreatableSelect
                                                // defaultValue={skills}
                                                value={skills}
                                                isMulti
                                                onChange={e => Array.isArray(e) && setSkills(e.map(i => {
                                                    let d = {};
                                                    console.log(i)
                                                    d['value'] = d['label'] = i.value;
                                                    return d
                                                }))}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="py-4 px-8 flex">
                                <p className="flex items-center space-x-2 font-semibold">
                                    <StarIc/>
                                    <span>{Name}</span>
                                </p>
                                <button
                                    className="btn_custond w-auto py-3 px-32 mx-auto font-semibold"
                                    onClick={Handle}
                                >
                                    Update
                                </button>
                                <p
                                    className="flex items-center space-x-2 font-semibold"
                                    style={{visibility: "hidden"}}
                                >
                                    <StarIc/>
                                    <span>{Name}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Profile;
