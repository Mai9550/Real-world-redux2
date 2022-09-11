/* eslint-disable react/function-component-definition */
import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DatePicker from "../components/DatePicker";
import Side_Menu from "../components/Side_Menu";
import HeadSub from "../components/HeadSub";
import Timeline from "./Timeline";
import { ReactComponent as Logo } from "../assets/image/SVG/Group.svg";
import Timer from "../icon/drawable/Timer";
import Classrooms from "../TeacherFlow/Classrooms";
import { useInstitute } from "../contexts/InstituteContext";
import NotificationTab from "../TeacherFlow/NotificationTab";
import CoursesTab from "../TeacherFlow/CoursesTab";
import {useNotifications} from "../contexts/NotificationsContext";
import {useTimeLine} from "../contexts/TimeLineContext";
import PlusIc from "../icon/drawable/PlusIc";
import {useInjection} from "inversify-react";
import {SignInDetails} from "../LoginFlow/SignInDetails";

export default function StudentHome() {
  const navigate = useNavigate();
  const { selectedInstitute, selectedInstituteId, setSelectedInstitute } =
    useInstitute();
  const { viewNotifications, setViewNotifications } = useNotifications();
  const { dateValue } = useTimeLine();
  const signInDetails = useInjection<SignInDetails>('signInDetails');


    if(signInDetails.role == 'student')
        window.history.replaceState(null, '', "/studentHome")
    else
        window.history.replaceState(null, '',  "/studentHome")

    const handleBack = () => {
    setSelectedInstitute(null);
    setViewNotifications(false);
  };
    return (

        <div>
            {/*{className="content_full_container box_ladto"}*/}
            {/*<Side_Menu />*/}
            <div className={'content_box content_box22'} style={{margin:0}}>
                <header className="flex justify-between px-[40px] py-4">
                    <div className="box_vc_nav_right box_vc_nav_right22">
                        <Logo
                            style={{height: "60px", width: "60px", marginRight: "16px"}}
                        />
                        <h4>Teaching Aura</h4>
                    </div>
                    <div className="box_vc_nav_left">
                        {signInDetails.role === "teacher" && selectedInstituteId !== null && (
                            <button
                                type="button"
                                className="btnx_hede"
                                style={{marginRight: '30px'}}
                                onClick={() => navigate("/add-announce",{state:{selectedInstituteId:selectedInstituteId}})}
                            >
                                <PlusIc color={"white"}/>
                                <span>Create notification</span>
                            </button>
                        )}

                        <div
                            style={{
                                background: "#ffffff",
                                boxShadow: "0 0 10px rgb(0 0 0 / 5%)",
                                width: "75px",
                                height: "75px",
                                borderRadius: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate('/invitelist')}
                        >
                            <Timer color="black" size="25"/>
                        </div>
                        <HeadSub/>
                    </div>
                </header>

        <div className="grid grid-cols-3 gap-x-3 flex-grow overflow-y-auto">
          <div className="flex flex-col space-y-3 overflow-y-auto">
            <div className="w-full pl-[40px] pr-4 pt-4">
              <DatePicker />
            </div>
            <div className="overflow-y-auto pr-4 pl-[40px]">
              <Classrooms />
            </div>
          </div>

          {!selectedInstitute ? (
            <div className="flex flex-col space-y-3 col-span-2 pr-[40px] pl-4 pt-4 overflow-y-auto">
              <div className="bg-white rounded-[30px] p-2">
                <Timeline
                  selectedInstitute={selectedInstituteId}
                  dateValue={dateValue}
                />
              </div>
            </div>
          ) : (
            <div className="delay-up-0/2 relative flex flex-col space-y-3 col-span-2 overflow-y-auto">
              <button
                type="button"
                onClick={handleBack}
                className="py-[10px] px-8 top-0 absolute bg-[#eeeeee] left-[12px] rounded-[20px]"
              >
                <i className="fa fa-long-arrow-left" />
              </button>
              <div className="flex flex-col flex-grow w-full overflow-y-auto">
                <div
                  className={`w-full flex flex-col flex-grow pl-4 ${
                    viewNotifications && "overflow-y-auto"
                  }`}
                >
                  <NotificationTab />
                </div>
                {!viewNotifications && (
                  <div className="flex-grow overflow-y-auto pr-[40px] pl-4 w-full">
                    <CoursesTab />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
