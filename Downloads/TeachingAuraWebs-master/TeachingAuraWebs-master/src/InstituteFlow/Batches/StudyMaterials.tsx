import React, {useEffect, useState} from "react";

// import Header from "../../components/Header";
import Grid from "@mui/material/Grid";
import {useInjection} from "inversify-react";
import {SignInDetails} from "../../LoginFlow/SignInDetails";
import {AxiosInstance} from "axios";
import {RefreshCourse, RefreshStudyMaterials,} from "../../observables/RefreshEvents";

const StudyMaterials = (props) => {
    const client = useInjection<AxiosInstance>("client");

    const instituteId = useInjection<SignInDetails>("signInDetails").id;
    const batchId = props.batchId;
    const courseId = props.courseId;

    const [studyMaterial, setStudyMaterial] = useState([
        {attachmentDetailsList: []},
    ]);
    const [courseDetails, setCourseDetails] = useState({
        subjects: [{topics: [{}]}],
    });

    function fetchStudyMaterials() {
        client
            .get(`/institute/${instituteId}/course/${courseId}`)
            .then((response) => {
                setCourseDetails(response.data);
                console.log("course details=> ", courseDetails);
            })
            .catch((e) => console.log(e));
        client
            .get(`/institute/${instituteId}/batch/${batchId}/studyMaterial`)
            .then((response) => {
                setStudyMaterial(response.data);
                console.log(
                    instituteId,
                    " => ",
                    batchId,
                    " study material=> ",
                    response.data
                );
            })
            .catch((e) => console.log(e));
    }

    useEffect(() => {
        fetchStudyMaterials();
        let subscription;
        subscription = RefreshStudyMaterials.subscribe(() => {
            fetchStudyMaterials();
        });
        subscription = RefreshCourse.subscribe(() => {
            fetchStudyMaterials();
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    let search = "";
    let attachmentLink = "";
    const getAttachmentById = async (id) => {
        attachmentLink = (
            await client.get(`/institute/${instituteId}/attachment/${id}`)
        ).data["url"];
    };

    const [selectedSubject, setSelectedSubject] = useState<String>("");
    const Types = ["IMAGE", "VIDEO", "PDF"];
    const [selectedType, setSelectedType] = useState<number>(0);
    const selectionType = ["Image", "Videos", "PDFs"];
    const iconClass = ["fa fa-image", "fa fa-video-camera", "fa fa-file-text"];

    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    const DummyAttachment = () => {
        return (
            <>
                <div className="study_inner">
                    <div className="box_vc_study">
                        <i className={iconClass[0]}></i>
                    </div>
                    <div className="text_study">
                        <p>obj['name']</p>
                    </div>
                </div>

                <div className="study_inner">
                    <div className="box_vc_study">
                        <i className={iconClass[0]}></i>
                    </div>
                    <div className="text_study">
                        <p>obj['name']</p>
                    </div>
                </div>

                <div className="study_inner">
                    <div className="box_vc_study">
                        <i className={iconClass[0]}></i>
                    </div>
                    <div className="text_study">
                        <p>obj['name']</p>
                    </div>
                </div>

                <div className="study_inner">
                    <div className="box_vc_study">
                        <i className={iconClass[0]}></i>
                    </div>
                    <div className="text_study">
                        <p>obj['name']</p>
                    </div>
                </div>

                <div className="study_inner">
                    <div className="box_vc_study">
                        <i className={iconClass[0]}></i>
                    </div>
                    <div className="text_study">
                        <p>obj['name']</p>
                    </div>
                </div>

            </>
        );
    };
    const DummySubject = () => {
        return (
            <>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
                <button>itr['name']</button>
            </>
        );
    };

    return (
    <Grid
      container
      spacing={2}
      flexGrow={1}
      className="flex flex-col flex-grow overflow-y-auto pl-[40px] mt-2 "
    >
      <Grid
        item
        xs={3}
        className="flex flex-col h-full overflow-y-auto"
        style={{ padding: '20 20 0 20' }}
      >
        <div className="box_nav_side_bar flex-grow overflow-y-auto">
          {courseDetails['subjects']?.map((itr) => (
            <button
              onClick={(e) => {
                setSelectedSubject(itr['id']);
                props.subjectId(itr['id']);
              }}
              className={
                selectedSubject == itr['id'] ? 'active_btns' : ''
              }
            >
              {itr['name']}
            </button>
          ))}
          {/* <DummySubject /> */}
        </div>
      </Grid>
      <Grid
        item
        xs={9}
        className="flex-grow relative overflow-hidden h-full "
      >
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <div className="pr-[40px]">
            <div className="box_nav_bach top-0 sticky">
              {selectionType.map((itr, i) => (
                <button
                  onClick={() => setSelectedType(i)}
                  className={selectedType === i ? 'active_btns' : ''}
                >
                  {itr}
                </button>
              ))}
            </div>
            <div style={{marginBottom:20}}></div>
            {/* <div className="search_box sticky ">
              <input
                onChange={(e) => {
                  search = e.target.value;
                }}
                type="search"
                placeholder="Search Something"
              />
              <button>
                <i className="fa fa-search" />
              </button>
            </div> */}
          </div>
          {/* <div className="overflow-y-auto" style={{ maxHeight: "550px" }}> */}
          <div className="flex-grow pr-[40px] overflow-y-scroll">
            {studyMaterial
              .filter((itr) => itr['subjectId'] === selectedSubject)
              .map((itr) =>
                itr.attachmentDetailsList
                  .filter(
                    (itr) =>
                      itr['attachmentType'] === Types[selectedType],
                  )
                  .map((obj) => (
                    <div
                      className="study_inner"
                      onClick={async () => {
                        await getAttachmentById(obj['id']);
                        openInNewTab(attachmentLink);
                      }}
                      style={{cursor:'pointer'}}
                    >
                      <div className="box_vc_study">
                        <i className={iconClass[selectedType]}></i>
                      </div>
                      <div className="text_study">
                        <p>{obj['name']}</p>
                      </div>
                    </div>
                  )),
              )}
            {/* <DummyAttachment /> */}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default StudyMaterials;
