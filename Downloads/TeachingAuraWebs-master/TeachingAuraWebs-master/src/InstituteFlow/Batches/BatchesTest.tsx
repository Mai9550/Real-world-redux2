/* eslint-disable @typescript-eslint/dot-notation */
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupUser from "@mui/icons-material/Group";
import { useInjection } from "inversify-react";
import { makeAutoObservable } from "mobx";
import { useLocation, useNavigate } from "react-router-dom";
import HeadSub from "../../components/HeadSub";
import SideMenu from "../../components/Side_Menu";
import TestBatches from "./TestBatches";
import StudyMaterials from "./StudyMaterials";
import LecturesBat from "./LecturesBat";
import StudentsTeachers from "./StudentsTeachers";
import AddTeachersx from "./AddTeachersx";
import AddStudents from "./AddStudents";
import CreateTestbtn from "./CreateTest_btn";
import CreateTestBa from "./CreateTestBa";
import { SignInDetails } from "../../LoginFlow/SignInDetails";
import SyllabusBatch from "./SyllabusBatch";
import { UploadStudyMaterial } from "./UploadStudyMaterial";
import ViewAnswers from "./ViewAnswers";
import { useBatch } from "../../contexts/BatchContext";
import Scaffold from "../../Widgets/Scaffold";
import { number } from "prop-types";
import TeacherIc from "../../icon/drawable/TeacherIc";
import StudentIc from "../../icon/drawable/StudentIc";

export class BatchDetails {
  courseId: string;

  courseName: string;

  id: string;

  instituteId: string;

  name: string;

  startDate: number;

  constructor() {
    makeAutoObservable(this);
    this.courseId = "";
    this.courseName = "";
    this.id = "";
    this.name = "";
    this.instituteId = "";
    this.startDate = 0;
  }
}

type LocationState = {
  batchId?: string;
  courseId?: string;
};

export const BatchesTest = (props) => {
  const { batchData, error, loading, fetchBatchData } = useBatch();
  const [BatchesView, setBatches] = useState(1);

  const [Bover, setBover] = useState(1);

  const navigate = useNavigate();

  const signInDetails = useInjection<SignInDetails>("signInDetails");
  const role = useInjection<SignInDetails>("signInDetails").role;

  const location = useLocation();
  const navigationParam = location.state as LocationState;

  useEffect(() => {
    fetchBatchData(signInDetails.id, navigationParam.batchId);
  }, []);

  const [addDialogOpen, setAddDialogOpen] = React.useState(false);
  const handleClose = () => {
    setAddDialogOpen(false);
  };

  const [subjectId, setSubjectId] = useState(undefined);
  const handleSubjectId = (e) => {
    setSubjectId(e);
  };

  const getAvsc = () => {
    switch (BatchesView) {
      case 1:
        return (
          <button
            type="button"
            onClick={() => setBover(5)}
            className="btnx_hede"
          >
            <AddIcon />
            <span>Create Test</span>
          </button>
        );
      case 2:
        return (
          <UploadStudyMaterial
            batchId={navigationParam.batchId}
            subjectId={subjectId}
          />
        );

      case 3:
        return (
          role === "admin" && (
            <button
              type="button"
              className="btnx_hede"
              onClick={() =>
                navigate(`/course/edit/${navigationParam.courseId}`)
              }
              style={{ display: Bover === 1 ? "block" : "none" }}
            >
              <EditIcon />
              <span>Edit Course</span>
            </button>
          )
        );
      case 4:
        return (
          <button
            type="button"
            className="btnx_hede"
            onClick={() => setAddDialogOpen(true)}
          >
            <AddIcon />
            <span>Create lecture</span>
          </button>
        );
      case 5:
        return (
          role === "admin" && (
            <div
              className={"d-flex"}
              style={{
                visibility: Bover === 2 || Bover === 3 ? "hidden" : "visible",
              }}
            >
              <button
                type="button"
                className="btnx_hede"
                onClick={() => setBover(2)}
              >
                <TeacherIc color={"white"} />
                {/* <AccountBoxIcon /> */}
              </button>

              <button
                type="button"
                className="btnx_hede"
                onClick={() => setBover(3)}
              >
                <StudentIc color={"white"} />
                {/* <GroupUser /> */}
              </button>
            </div>
          )
        );
      default:
        return null;
    }
  };

  const handleClickBoxNavBatch = (bover: number, batch: number): void => {
    setBover(bover);
    setBatches(batch);
  };

  if (error !== null && !batchData) {
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

  if (!batchData) {
    return (
      <Scaffold>
        <p className="m-auto">Course is not available</p>
      </Scaffold>
    );
  }

  return (
    <div className={(signInDetails.role=='admin')?"content_full_container box_ladto":""}>
      {(signInDetails.role=='admin') ? <SideMenu/>:true}
      <div className={(signInDetails.role==='admin')?"content_box content_box22":"content_box content_box22 ml-0"}>
        <header className="heder_nav">
          <div className="box_vc_nav_right box_vc_nav_right22">
            <a onClick={() => (Bover === 1 ? navigate(-1) : setBover(1))}>
              <i className="fa fa-long-arrow-left" />
            </a>
            <h4>{batchData["name"]}</h4>
            <span>{batchData["courseName"]}</span>
          </div>
          <div className="box_vc_nav_left">
            {role !== "student" && getAvsc()}
            <HeadSub />
          </div>
        </header>

        <div className="conte_box_deboard p-0">
          {/* root box start*/}
          {![2, 3, 5].includes(Bover) && (
            <div className="px-[40px]">
              <div className="box_nav_bach">
                <button
                  type="button"
                  className={BatchesView === 1 ? "active_btns" : ""}
                  onClick={() => handleClickBoxNavBatch(1, 1)}
                >
                  Test
                </button>
                <button
                  type="button"
                  className={BatchesView === 2 ? "active_btns" : ""}
                  onClick={() => handleClickBoxNavBatch(1, 2)}
                >
                  Study Materials
                </button>
                <button
                  type="button"
                  className={BatchesView === 3 ? "active_btns" : ""}
                  onClick={() => handleClickBoxNavBatch(1, 3)}
                >
                  Syllabus
                </button>
                <button
                  type="button"
                  className={BatchesView === 4 ? "active_btns" : ""}
                  onClick={() => handleClickBoxNavBatch(1, 4)}
                >
                  Lectures
                </button>
                <button
                  type="button"
                  className={BatchesView === 5 ? "active_btns" : ""}
                  onClick={() => handleClickBoxNavBatch(1, 5)}
                >
                  Students & Teachers
                </button>
              </div>
            </div>
          )}

          {Bover === 1 ? (
            <>
              {BatchesView === 1 && (
                <TestBatches batchId={navigationParam.batchId} />
              )}
              {BatchesView === 2 && (
                <StudyMaterials
                  batchId={navigationParam.batchId}
                  courseId={navigationParam.courseId}
                  subjectId={(e) => handleSubjectId(e)}
                />
              )}
              {BatchesView === 3 && (
                <SyllabusBatch courseId={navigationParam.courseId} />
              )}

              {BatchesView === 4 && (
                <LecturesBat batchId={navigationParam.batchId} />
              )}
              {BatchesView === 5 && (
                <StudentsTeachers batchId={navigationParam.batchId} />
              )}
            </>
          ) : null}

          {Bover === 2 && (
            <AddTeachersx
              batchId={navigationParam.batchId}
              setBover={setBover}
            />
          )}
          {Bover === 3 && (
            <AddStudents
              batchId={navigationParam.batchId}
              setBover={setBover}
            />
          )}
          {Bover === 5 && (
            <CreateTestBa
              batchId={navigationParam.batchId}
              setBover={setBover}
            />
          )}
          {/* root box end*/}
        </div>
      </div>
      <CreateTestbtn
        open_log={addDialogOpen}
        closevc={handleClose}
        batchData={batchData}
      />
    </div>
  );
};

// export default BatchesTest;
