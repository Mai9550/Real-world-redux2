import React, { useState } from "react";
import Side_Menu from "../../../.././components/Side_Menu";
import SidePanel from "../../../components/SidePanel/SidePanel";
import DashboardNavBar from "../../../components/Dashboard/DashboardNavBar/DashboardNavBar";
import Editable from "../../../components/Dashboard/Courses/EditableRow/Editable";
import Row from "../../../components/Dashboard/Courses/EditableRow/Row";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { ReactComponent as DeleteIcon } from "../../../.././assets/image/SVG/delete-icon.svg";
import { ReactComponent as DotSquare } from "../../../.././assets/image/SVG/dot-square.svg";
import { ReactComponent as EditIcon } from "../../../.././assets/image/SVG/edit-icon.svg";
import { ReactComponent as CorrectOption } from "../../../.././assets/image/SVG/correct-option.svg";
import { ReactComponent as UploardedFile } from "../../../.././assets/image/SVG/uploardedfile.svg";
import { ReactComponent as Option } from "../../../.././assets/image/SVG/option.svg";
import { ReactComponent as CorrectOp } from "../../../.././assets/image/SVG/correct-svg.svg";

import styles from "./Courses.module.scss";
import CourseSideBar from "../../../components/Dashboard/Courses/CourseSideBar/CourseSideBar";
import { catchError } from "rxjs";

const Courses = () => {
  const [subjects, setSubjects] = useState(0);
  const [topicsCount, setTopicsCount] = useState([1]);
  const [active, setActive] = useState("addFile");
  const [editContent, setEditContent] = useState(false);
  const [text, settext] = useState("");
  const [questionsCount, setQuestionsCount] = useState(1);
  const [optionsCount, setOptionsCount] = useState([2]);
  const [image, setImage] = useState("");
  // const onChange = (e) => setImage(URL.createObjectURL(e.target.files[0]));

  function handleClick() {
    setSubjects(subjects + 1);
    setTopicsCount([...topicsCount, 1]);
  }
  function handleTopicIncrease(idx) {
    var topics = topicsCount;
    topics[idx] = topics[idx] + 1;
    setTopicsCount([...topics]);
  }
  function handleSubjectDelete() {
    setSubjects(subjects - 1);
  }

  function handleAddQuestion() {
    setQuestionsCount(questionsCount + 1);
    setOptionsCount([...optionsCount, 2]);
  }

  function handleOptionIncrease(idx) {
    var options = optionsCount;
    options[idx] = options[idx] + 1;
    setOptionsCount([...options]);
  }

  function handleOptionDecrease(idx) {
    var options = optionsCount;
    options[idx] = options[idx] - 1;
    setOptionsCount([...options]);
  }

  function getContent(active) {
    switch (active) {
      case "addFile":
        return (
          <div className={styles.addFileConatiner}>
            <div className={styles.uploard}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files != null
                    ? setImage(URL.createObjectURL(e.target.files[0]))
                    : console.log("not uploaded")
                }
              />
              <img src={image} />
            </div>

            <div className={styles.replaceImageBtn}>
              <button className={styles.repBtn}>Replace image</button>
              <button className={styles.removeBtn}>Remove image</button>
            </div>
            <div className={styles.btns}>
              <button
                className={styles.saveBtn}
                onClick={() => setActive("addText")}
              >
                Save and continue
              </button>
              <button
                className={styles.backBtn}
                onClick={() => setEditContent(false)}
              >
                Back
              </button>
            </div>
          </div>
        );

      case "addText":
        return (
          <div className={styles.addTextContainer}>
            <div className={styles.text}>Text</div>
            <TextareaAutosize
              value={text}
              aria-label="empty textarea"
              minRows={8}
              className={styles.textArea}
              onChange={(e) => settext(e.target.value)}
            />
            <div className={styles.btns}>
              <button
                className={styles.saveBtn}
                onClick={() => setActive("addQuiz")}
              >
                Save and continue
              </button>
              <button
                className={styles.backBtn}
                onClick={() => setActive("addFile")}
              >
                Back
              </button>
            </div>
          </div>
        );
      case "addQuiz":
        return (
          <div className={styles.addQuizContainer}>
            <div className={styles.quizHeading}>Quiz</div>
            {[...Array(questionsCount)].map((e, idx) => {
              return (
                <div className={styles.questionsContainer}>
                  <div className={styles.uploard}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        e.target.files != null
                          ? setImage(URL.createObjectURL(e.target.files[0]))
                          : console.log("not uploaded")
                      }
                    />
                    <img src={image} />
                    <div className={styles.replaceImageBtn}>
                      <button className={styles.repBtn}>Replace image</button>
                      <button className={styles.removeBtn}>Remove image</button>
                    </div>
                  </div>
                  <div className={styles.question}>
                    <form className={styles.form}>
                      <input type="text" placeholder="Type quiz question" />
                    </form>
                  </div>

                  {[...Array(optionsCount[idx])].map((op, id) => {
                    return (
                      <div className={styles.options}>
                        <div className={styles.tick}>
                          <CorrectOp />
                        </div>
                        <form className={styles.option}>
                          <input type="text" placeholder="Option" />
                        </form>
                        <DeleteIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => handleOptionDecrease(idx)}
                        />
                      </div>
                    );
                  })}

                  <div
                    className={styles.addOption}
                    onClick={() => handleOptionIncrease(idx)}
                  >
                    + Add Option
                  </div>
                </div>
              );
            })}
            <div
              className={styles.addQuestions}
              onClick={() => handleAddQuestion()}
            >
              Add question
            </div>
            <div className={styles.btns}>
              <button
                className={styles.saveBtn}
                onClick={() => setActive("overview")}
              >
                Save and continue
              </button>
              <button
                className={styles.backBtn}
                onClick={() => setActive("addText")}
              >
                Back
              </button>
            </div>
          </div>
        );
      case "overview":
        return (
          <div className={styles.overviewContainer}>
            <div className={styles.left}>
              <div className={styles.text}>
                <DotSquare /> Files
              </div>
              <div className={styles.file}>
                <UploardedFile />
                Your File.pdf
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.text}>
                <DotSquare /> Text
              </div>
              <div className={styles.textDiv}>
                <TextareaAutosize
                  value={text}
                  aria-label="empty textarea"
                  minRows={8}
                  className={styles.textArea}
                  onChange={(e) => settext(e.target.value)}
                />
                <EditIcon
                  style={{
                    height: "16px",
                    marginTop: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setActive("addText")}
                />
                <DeleteIcon
                  style={{
                    height: "16px",
                    marginTop: "1rem",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.text}>
                <DotSquare /> Quiz
              </div>

              <div className={styles.questions}>
                <div className={styles.quesContainer}>
                  {[...Array(5)].map((e, idx) => {
                    return (
                      <div className={styles.questionCard}>
                        <div>
                          <img
                            src="https://picsum.photos/700/200?grayscale"
                            alt=""
                          />
                        </div>
                        <div className={styles.question}>
                          In typography and lettering, a sans-serif, sans serif,
                          gothic, or simply sans letterform is one that does not
                          have extending features called:
                        </div>
                        <div className={styles.optionasWrapper}>
                          <div className={styles.options}>
                            <Option />{" "}
                            <span className={styles.correct}> Option1</span>{" "}
                            <CorrectOption
                              style={{ height: "20px", marginLeft: "-1rem" }}
                            />
                          </div>
                          <div className={styles.options}>
                            <Option /> Option2
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <EditIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setActive("addQuiz")}
                />
                <DeleteIcon style={{ cursor: "pointer" }} />
              </div>
            </div>
            <div className={styles.btns}>
              <button className={styles.saveBtn}>Save and continue</button>
              <button
                className={styles.backBtn}
                onClick={() => setActive("addQuiz")}
              >
                Back
              </button>
            </div>
          </div>
        );
    }
  }

  return (
    <div className={styles.courseWrapper}>
      <SidePanel page="courses"/>
      <DashboardNavBar
        page="Courses"
        image="https://picsum.photos/60/60?random=10"
      />

      {!editContent ? (
        <div className={styles.course}>
          <button className={styles.btn} onClick={() => handleClick()}>
            + Add Subject
          </button>

          {subjects > 0 && (
            <div className={styles.subjectsWrapper}>
              {[...Array(subjects)].map((e, idx) => {
                return (
                  <div className={styles.subject}>
                    <div className={styles.subjectHeading}>
                      <Editable
                        text={`Subject ${subjects}`}
                        onDelete={handleSubjectDelete}
                      />
                    </div>
                    {[...Array(topicsCount[idx])].map((x, id) => {
                      return (
                        <div className={styles.row}>
                          <Row
                            text={`Topic ${id + 1}`}
                            onEditContent={setEditContent}
                          />
                        </div>
                      );
                    })}
                    <button
                      className={styles.addTopicBtn}
                      onClick={() => handleTopicIncrease(idx)}
                    >
                      + Add Topic
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.editTopicWrapper}>
          <div className={styles.container}>
            <div className={styles.heading}>
              <Editable
                text={`Topic ${subjects + 1}`}
                noDelete
                arrow
                onBack={setEditContent}
              />
            </div>
            <div className={styles.sideBarNcontent}>
              <div className={styles.sideBar}>
                <CourseSideBar
                  active={active}
                  setActive={setActive}
                  showOverview
                />
              </div>
              <div className={styles.contents}>{getContent(active)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
