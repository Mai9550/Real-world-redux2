import React, { useEffect, useState } from "react";
import HeadSub from "../../components/HeadSub";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import HourglassFullSharpIcon from "@mui/icons-material/HourglassFullSharp";

import SideMenu from "../../components/Side_Menu";
import AccordCustom from "../Batches/AccordCustom";
import AddStudent from "./AddStudent";
import { RefreshStudentsAndTeachers } from "../../observables/RefreshEvents";

import { useInjection } from "inversify-react";
import { SignInDetails } from "../../LoginFlow/SignInDetails";
import { useNavigate } from "react-router-dom";
import { useStudent } from "../../contexts/StudentContext";
import Scaffold from "../../Widgets/Scaffold";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import PlusIc from "../../icon/drawable/PlusIc";
import Timer from "../../icon/drawable/Timer";
import { generateId } from "../AllCourses/AddCourses";

const Students = () => {
  const { students, error, loading, fetchAllStudents } = useStudent();
  const [addDialogOpen, setAddDialogOpen] = React.useState(false);
  const signInDetails = useInjection<SignInDetails>("signInDetails");
  const role = useInjection<SignInDetails>("signInDetails").getRole();
  const handleClose = () => {
    setAddDialogOpen(false);
  };

  const studentDetails = {
    contactNumber: "",
    dateOfBirth: 0,
    email: "",
    id: generateId(),
    maxEducation: "BELOW_MATRICULATE",
    name: "",
  };

  const navigate = useNavigate();

  const storage = getStorage();
  const [logo, setLogo] = useState(
    "https://i.pinimg.com/originals/36/34/ee/3634ee7581d27c80f391e5d716fddfc4.jpg"
  );

  useEffect(() => {
    fetchAllStudents(signInDetails.id);
    const subscription = RefreshStudentsAndTeachers.subscribe(() => {
      fetchAllStudents(signInDetails.id);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (error !== null && !students.length) {
    return (
      <Scaffold>
        <p className="m-auto">Something went wrong</p>
      </Scaffold>
    );
  }

  if (loading) {
    return (
      <Scaffold>
        <p className="m-auto">Loading...</p>
      </Scaffold>
    );
  }

  return (
    <div className="content_full_container box_ladto">
      <SideMenu active={"students"} />
      <div className="content_box content_box22">
        <header className="heder_nav  ">
          <div className="box_vc_nav_right">
            <h4>Student</h4>
          </div>
          <div className="box_vc_nav_left">
            {role === "admin" && (
              <button
                className="btnx_hede"
                onClick={() => setAddDialogOpen(true)}
              >
                {/* <CreateNewFolderIcon/> */}
                <PlusIc color="#ffffff" />
                <span>Invite Student</span>
              </button>
            )}
            <button
              type="button"
              style={{ marginRight: 0 }}
              onClick={() =>
                navigate("/invitelist", { state: { role: "student" } })
              }
              className="ball_icon_box"
            >
              {/* <i className="fa fa-bell"></i> */}
              {/* <HourglassFullSharpIcon /> */}
              {/* <img alt='time' src={Timer} className='img-fluid' width='24px' /> */}
              <Timer />
            </button>
            <HeadSub />
          </div>
        </header>

        <div
          className="flex-grow px-[40px] py-4 space-y-5 overflow-y-auto"
          style={
            students.length <= 0
              ? {
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }
              : {}
          }
        >
          {students.length <= 0 ? (
            <p className="m-auto">No student added yet.</p>
          ) : (
            students.map((students, index) => {
              return (
                <AccordCustom
                  key={students["id"]}
                  isx={students["id"]}
                  uName={students["name"]}
                  uPhone={students["contactNumber"]}
                  uEmail={students["email"]}
                  uKey={"user" + students["id"]}
                  addbtnbtn={true}
                  addCode={true}
                  profilePic={students["profilePicURL"]}
                  liNotsColor={"#B1F1CC"}
                  liAcCode={"48483"}
                  verify={"student"}
                />
              );
            })
          )}
        </div>

        <AddStudent
          open_log={addDialogOpen}
          closevc={handleClose}
          data={studentDetails}
          entity={"Student"}
          instituteId={signInDetails.id}
        />
      </div>
    </div>
  );
};

export default Students;
