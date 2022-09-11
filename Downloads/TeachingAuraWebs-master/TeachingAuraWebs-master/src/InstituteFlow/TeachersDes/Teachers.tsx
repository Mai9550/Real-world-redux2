import React, { useEffect, useState } from "react";
import HeadSub from "../../components/HeadSub";

import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import HourglassFullSharpIcon from "@mui/icons-material/HourglassFullSharp";
import SideMenu from "../../components/Side_Menu";
import AccordCustom from "../Batches/AccordCustom";
import { useInjection } from "inversify-react";
import AddStudent from "../StudentsDes/AddStudent";
import { SignInDetails } from "../../LoginFlow/SignInDetails";
import { RefreshStudentsAndTeachers } from "../../observables/RefreshEvents";
import { useNavigate } from "react-router-dom";
import { useTeacher } from "../../contexts/TeacherContext";
import Scaffold from "../../Widgets/Scaffold";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import PlusIc from "../../icon/drawable/PlusIc";
import Timer from "../../icon/drawable/Timer";
import { generateId } from "../AllCourses/AddCourses";

const Teachers = () => {
  const { teachers, error, loading, fetchAllTeachers } = useTeacher();
  const [addDialogOpen, setAddDialogOpen] = React.useState(false);
  const signInDetails = useInjection<SignInDetails>("signInDetails");
  const role = signInDetails.getRole();
  const handleClose = () => {
    setAddDialogOpen(false);
  };

  let teacherDetails = {
    contactNumber: "",
    email: "",
    id: generateId(),
    name: "",
    subject: "",
  };

  const navigate = useNavigate();
  const storage = getStorage();
  const [logo, setLogo] = useState(
    "https://i.pinimg.com/originals/36/34/ee/3634ee7581d27c80f391e5d716fddfc4.jpg"
  );

  useEffect(() => {
    fetchAllTeachers(signInDetails.id);
    const subscription = RefreshStudentsAndTeachers.subscribe(() => {
      fetchAllTeachers(signInDetails.id);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (error !== null && !teachers.length) {
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
      <SideMenu active={"teachers"} />
      <div className="content_box content_box22">
        <header className="heder_nav  ">
          <div className="box_vc_nav_right">
            <h4>Teacher</h4>
          </div>
          <div className="box_vc_nav_left">
            {role === "admin" && (
              <button
                className="btnx_hede"
                onClick={() => setAddDialogOpen(true)}
              >
                {/* <CreateNewFolderIcon/> */}
                <PlusIc color="#ffffff" />
                <span>Add teacher</span>
              </button>
            )}
            <button
              type="button"
              onClick={() =>
                navigate("/invitelist", { state: { role: "teacher" } })
              }
              className="ball_icon_box"
              style={{ marginRight: 0 }}
            >
              {/* <i className="fa fa-bell"></i> */}
              {/* <HourglassFullSharpIcon /> */}
              <Timer />
            </button>
            <HeadSub />
          </div>
        </header>

        <div
          className="flex-grow px-[40px] py-4 space-y-5 overflow-y-auto"
          style={
            teachers.length <= 0
              ? {
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }
              : {}
          }
        >
          {teachers.length <= 0 ? (
            <p className="m-auto">No teacher added yet.</p>
          ) : (
            teachers.map((teacher, index) => {
              // setLogo(teacher["profilePicURL"]);
              return (
                <AccordCustom
                  key={teacher["id"]}
                  isx={teacher["id"]}
                  uName={teacher["name"]}
                  uPhone={teacher["contactNumber"]}
                  uEmail={teacher["email"]}
                  uKey={"user" + teacher["id"]}
                  profilePic={teacher["profilePicURL"]}
                  addbtnbtn={true}
                  addCode={true}
                  liNotsColor={"#B1F1CC"}
                  liAcCode={"48483"}
                  verify={"teacher"}
                />
              );
            })
          )}
        </div>
      </div>
      <AddStudent
        open_log={addDialogOpen}
        closevc={handleClose}
        data={teacherDetails}
        entity={"Teacher"}
        instituteId={signInDetails.id}
      />
    </div>
  );
};

export default Teachers;
