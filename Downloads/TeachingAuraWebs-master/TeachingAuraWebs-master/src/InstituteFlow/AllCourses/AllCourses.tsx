import React, { useEffect, useState } from "react";
import HeadSub from "../../components/HeadSub";

// icon
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

// import Header from "../../components/Header";
import Side_Menu from "../../components/Side_Menu";
import CoursesList from "./CoursesList";
import { useInjection } from "inversify-react";
import { SignInDetails } from "../../LoginFlow/SignInDetails";
import { RefreshCourse } from "../../observables/RefreshEvents";
import { useNavigate } from "react-router-dom";
import { useAllCourses } from "../../contexts/AllCoursesContext";
import Scaffold from "../../Widgets/Scaffold";
import PlusIc from "../../icon/drawable/PlusIc";

const AllCourses = () => {
  const navigate = useNavigate();
  const { courses, error, loading, fetchAllCourses } = useAllCourses();

  const instituteId = useInjection<SignInDetails>("signInDetails").id;
  const role = useInjection<SignInDetails>("signInDetails").getRole();

  const getButtonText = (role) => {
    return role === "admin" ? "Add Course" : "Create Test";
  };

  useEffect(() => {
    fetchAllCourses(instituteId);
    const subscription = RefreshCourse.subscribe(() => {
      fetchAllCourses(instituteId);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const [Bover, setBover] = useState(1);

  if (error !== null && !courses.length) {
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
    <React.Fragment>
      <div className="content_full_container box_ladto ">
        <Side_Menu active={"courses"} />
        <div className="content_box content_box22">
          <header className="heder_nav">
            <div
              className={
                Bover === 2 ? "box_vc_nav_right box_vc_nav_right22" : "d_nones"
              }
            >
              <a onClick={() => (Bover === 2 ? setBover(1) : Bover)}>
                <i className="fa fa-long-arrow-left"></i>
              </a>
            </div>

            <div className="box_vc_nav_right">
              <h4>All Courses</h4>
            </div>
            <div className="box_vc_nav_left">
              {role !== "student" && (
                <button
                  className="btnx_hede"
                  onClick={() => navigate("/add-course")}
                >
                  {/* <CreateNewFolderIcon/> */}
                  <PlusIc color="#ffffff" />
                  <span>{getButtonText(role)}</span>
                </button>
              )}

              <HeadSub />
            </div>
          </header>

          <div
            className="flex-grow px-[40px] overflow-y-auto"
            style={
              courses.length <= 0
                ? {
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }
                : {}
            }
          >
            <div className={Bover === 1 ? "d_blocks" : "d_nones"}>
              <div className="className_over_view_con mt-3">
                {courses.length <= 0 ? (
                  <p className="m-auto">No course added yet.</p>
                ) : (
                  courses.map((course, index) => (
                    <CoursesList
                      key={`${course["id"]} ${index}`}
                      courseId={course["id"]}
                      liTitle={course["name"]}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllCourses;
