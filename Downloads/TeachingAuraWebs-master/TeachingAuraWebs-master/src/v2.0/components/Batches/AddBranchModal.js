import React, { useState, useRef } from "react";
import styles from "./AddBranchModal.module.scss";

const AddBranchModal = ({ open, onClose, setBatches, batches }) => {
  const [count, setCount] = useState(batches.length);
  const [batchName, setInputName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  if (!open) return null;

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [2022, 2023, 2024, 2025, 2026];

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
    setBatches([
      {
        id: count,
        batchName: batchName,
        courseName: courseName || "Graphic Design for beginners",
        startDate: `${day} ${month} ${year}`,
        studentsNum: 48,
        teachersNum: 3,
        img: imgSrc,
      },
      ...batches,
    ]);
    setImgSrc("");
    onClose();
  };
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <form className={styles.wrapper} onSubmit={formSubmitHandler}>
          {imgSrc !== "" && (
            <img
              className={styles.batchImg}
              src={imgSrc}
              alt="Something is here"
            />
          )}
          <div className={styles.imgAction}>
            <input
              className={styles.addImg}
              id="setImg"
              onChange={(e) =>
                setImgSrc(URL.createObjectURL(e.target.files[0]))
              }
              type="file"
            />
            <label className={styles.addImgLabel} for="setImg">
              Add Image
            </label>
            <button className={styles.adjustImg} type="button">
              Adjust Image
            </button>
            <button
              className={styles.deleteImg}
              onClick={() => setImgSrc("")}
              type="button"
            >
              Delete Image
            </button>
          </div>
          <div className={styles.batch}>
            <label className={styles.labelName}>Name of batch</label>
            <input
              className={styles.inputName}
              onChange={(e) => setInputName(e.target.value)}
              value={batchName}
              placeholder="Input name of batch"
            />
          </div>
          <div className={styles.course}>
            <label className={styles.labelCourse}>Course</label>
            <select
              className={styles.courseSelect}
              onChange={(e) => setCourseName(e.target.value)}
            >
              <option className={styles.courseOption}>
                Graphic design for beginners
              </option>
              <option>Intermediate Graphic design</option>
              <option>Advance Graphic design</option>
            </select>
          </div>
          <div className={styles.date}>
            <label className={styles.labelDate}>Starting Date</label>
            <div className={styles.dateT}>
              <select
                className={styles.daySelect}
                onChange={(e) => setDay(e.target.value)}
              >
                <option className={styles.dayOption} disabled>
                  Day
                </option>
                {days.map((day) => (
                  <option className={styles.dayOption}>{day}</option>
                ))}
              </select>
              <select
                className={styles.monthSelect}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option className={styles.monthOption} disabled>
                  Month
                </option>
                {months.map((month) => (
                  <option className={styles.monthOption}>{month}</option>
                ))}
              </select>
              <select
                className={styles.yearSelect}
                onChange={(e) => setYear(e.target.value)}
              >
                <option className={styles.yearOption} disabled>
                  Year
                </option>
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <button className={styles.continueButton} type="submit">
            Continue
          </button>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBranchModal;
