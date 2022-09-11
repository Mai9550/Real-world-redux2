
import React from "react";
import LecturesSubc from "../Dashboard/LecturesSubc";

const LecturesBat = (props) => {
  return (
    <LecturesSubc instituteId={props.instituteId} batchId={props.batchId}/>
  );
};

export default LecturesBat;