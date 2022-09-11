import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import HeadSub from "../../components/HeadSub";
import Side_Menu from "../../components/Side_Menu";
import {useInjection} from "inversify-react";
import {AxiosInstance} from "axios";
import {SignInDetails} from "../../LoginFlow/SignInDetails";

import Timer from "../../icon/drawable/Timer";
import {StudentControllerService, TeacherControllerService} from "../../client";
import Teachers from "../TeachersDes/Teachers";
import SideMenu from "../../components/Side_Menu";
import {RefreshInvites, RefreshLectures} from "../../observables/RefreshEvents";

type LocationState = {
    role: string;
};

const InviteList = () => {
    const navigate = useNavigate();

    const client = useInjection<AxiosInstance>("client");
    const signInDetails = useInjection<SignInDetails>("signInDetails");
    const role = signInDetails.role;
    const location = useLocation();
    const navigationParam = location.state as LocationState;

    const [inviteList, setInviteList] = useState<any>([]);

    const data = () => {
        if (role === 'admin') {
            client
                .get(`/institute/${signInDetails.id}/${navigationParam.role}/invites`)
                .then((r) => {
                    console.log("invites", r.data);
                    setInviteList(r.data);
                })
                .catch((e) => console.log(e));
        } else if (role === 'student') {
            console.log("dsjbsdjbjhb")
            StudentControllerService.getStudentInvites(signInDetails.id + '').then(
                (data) => {
                    console.log("invites", data);
                    setInviteList(data)
                }
            )
        } else if (role === 'teacher') {
            console.log("dsjbsdjbjhb")
            TeacherControllerService.getTeacherInvites(signInDetails.id + '').then(
                (data) => {
                    console.log("invites", data);
                    setInviteList(data)
                }
            )
        }

    };

    useEffect(() => {
        data();
        const subscription = RefreshInvites.subscribe(() => {
            data();
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <div className={(signInDetails.role === 'admin') ? "content_full_container box_ladto" : ""}>
            {(signInDetails.role == 'admin') ? <SideMenu/> : true}
            <div className={ (signInDetails.role == 'admin') ? "content_box content_box22 " : "content_box content_box22 ml-0"}>

                <header className="heder_nav">
                    <div className="box_vc_nav_right box_vc_nav_right22">
                        <a onClick={() => navigate(-1)}>
                            <i className="fa fa-long-arrow-left"></i>
                        </a>
                        <h4 className="border-white">invite List</h4>
                    </div>
                    <div className="box_vc_nav_left">
                        <button
                            type="button"
                            onClick={() => navigate("/invitelist")}
                            className="ball_icon_box bg-[#2697FE]"
                            style={{marginRight: 0}}
                        >
                            {/* <HourglassFullSharpIcon className='text-white' /> */}
                            {/* <img alt='time' src={Timer} className='img-fluid' width='24px' style={{}} /> */}
                            <Timer color="#ffffff" size="25"/>
                        </button>
                        <HeadSub/>
                    </div>
                </header>

                <div className="conte_box_deboard px-0">
                    {role === "admin" ? (
                        <div className="flex-grow px-[40px] overflow-y-auto">
                            <div
                                className="bg-white rounded-[60px] text-centerflex-grow overflow-y-auto px-8 xl:px-16 w-full">
                                <table
                                    className="rounded-[60px] text-center bg-white w-full"
                                    style={{
                                        marginBottom: 30,
                                        fontSize: "21px",
                                        fontWeight: "350",
                                    }}
                                >
                                    <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-[#888888] text-center font-light py-4"
                                        >
                                            Num
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-[#888888] text-center font-light py-4"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-[#888888] text-center font-light py-4"
                                        >
                                            Mobile
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-[#888888] text-center font-light py-4"
                                        >
                                            Status
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {inviteList.map((r, i) => (
                                        <tr className="align-items-center">
                                            <td className="border-b border-[#EEEEEE]">
                                                <div
                                                    style={{
                                                        borderRadius: "13px",
                                                    }}
                                                    className="btn btn-primary px-3 py-2 text-center"
                                                >
                                                    {i + 1}
                                                </div>
                                            </td>
                                            <td className="text-center border-b  justify-center border-[#EEEEEE]">
                                                <p className="flex flex-col items-center justify-center mb-0">
                                                    <span>{r[navigationParam.role]["name"]}</span>
                                                </p>
                                            </td>
                                            <td className="text-center justify-center border-b  border-[#EEEEEE]">
                                                <p className="flex flex-col items-center justify-center mb-0">
                            <span>
                              {r[navigationParam.role]["contactNumber"]}
                            </span>
                                                </p>
                                            </td>
                                            <td className="border-[#EEEEEE] border-b py-3">
                                                <button
                                                    className="bg-[#F8F8F8] text-[#FCB707] px-5 py-2"
                                                    style={
                                                        r["status"] === "INVITED"
                                                            ? {color: "#FCB707", borderRadius: "24px"}
                                                            : r["status"] === "ACCEPT"
                                                                ? {color: "#41D03E", borderRadius: "24px"}
                                                                : {color: "#FF1148", borderRadius: "24px"}
                                                    }
                                                >
                                                    {String(r["status"]).toLowerCase()}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-grow px-[40px] overflow-y-auto">
                            <div
                                className="bg-white rounded-[60px] text-centerflex-grow overflow-y-auto px-8 xl:px-16 w-full">
                                <table
                                    className="rounded-[60px] text-center bg-white w-full"
                                    style={{
                                        marginBottom: 30,
                                        fontSize: "21px",
                                        fontWeight: "350",
                                    }}
                                >
                                    <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-[#888888] text-center font-light py-4"
                                        >
                                            Num
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-[#888888] text-center font-light py-4"
                                        >
                                            Institute Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-[#888888] text-center font-light py-4"
                                        >
                                            Status
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {inviteList.filter((r) => r.status === 'INVITED').map((r, i) => (
                                        <tr className="align-items-center">
                                            <td className="border-b border-[#EEEEEE]">
                                                <div
                                                    style={{
                                                        borderRadius: "13px",
                                                    }}
                                                    className="btn btn-primary px-3 py-2 text-center"
                                                >
                                                    {i + 1}
                                                </div>
                                            </td>
                                            <td className="text-center border-b  justify-center border-[#EEEEEE]">
                                                <p className="flex flex-col items-center justify-center mb-0">
                                                    <span>{r.institute.instituteName}</span>
                                                </p>
                                            </td>
                                            <td className="border-[#EEEEEE] border-b py-3">
                                                <button
                                                    onClick={() => {
                                                        signInDetails.role === 'student' ?
                                                            StudentControllerService.rejectInstituteInvite1(signInDetails.id + '', r.institute.id).then(data => {console.log(data);RefreshInvites.next()}).catch(e=>console.log('invite = ',e))
                                                            : TeacherControllerService.rejectInstituteInvite(signInDetails.id + '', r.institute.id).then(data => {console.log(data);RefreshInvites.next()}).catch(e=>console.log('invite = ',e))
                                                    }}
                                                    style={{
                                                        background: "#FF1148",
                                                        color: "#ffffff",
                                                        fontSize: "14px",
                                                        padding: "8px 24px",
                                                        borderRadius: "12px",
                                                        marginRight: "20px",
                                                        width: "120px",
                                                    }}
                                                >
                                                    Reject
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        signInDetails.role === 'student' ?
                                                            StudentControllerService.acceptInstituteInvite1(signInDetails.id + '', r.institute.id).then(data => {console.log(data);RefreshInvites.next()}).catch(e=>console.log('invite = ',e))
                                                            : TeacherControllerService.acceptInstituteInvite(signInDetails.id + '', r.institute.id).then(data => {console.log(data);RefreshInvites.next()}).catch(e=>console.log('invite = ',e))
                                                    }} style={{
                                                    background: "#2697FE",
                                                    color: "#ffffff",
                                                    fontSize: "14px",
                                                    padding: "8px 24px",
                                                    borderRadius: "12px",
                                                    width: "120px",
                                                }}
                                                >
                                                    Accept
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InviteList;
