/* eslint-disable @typescript-eslint/dot-notation */
import React, { useEffect, useState } from "react";

import { withStyles } from "@mui/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Popover from "@mui/material/Popover";
import { KeyboardArrowDown, KeyboardDownArrow } from "@mui/icons-material";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#EEEEEE",
    marginBottom: -1,
    padding: "15px 20px",
    color: " #333",
    borderRadius: 15,
    display: "block",

    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
      borderRadius: 15,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    borderRadius: 15,
    padding: "20px 20px 10px 20px",
  },
}))(MuiAccordionDetails);

const CourseSubject = ({ subject }) => {
  const topicData = subject.topics || [];

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const anchorRef = React.useRef(null);
  const [currentTopic, setCurrentTopic] = useState(null);

  const handleClose = () => {
    setCurrentTopic(null);
  };

  const handleOpenDesc = (event, topic) => {
    anchorRef.current = event.target;
    setCurrentTopic(topic);
  };

  const id = currentTopic !== null ? "simple-popover" : undefined;

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="accoditon_vs accoditon_vs2"
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="acodition_title">
            <h5>{subject.name}</h5>
            <span
              className={
                expanded === "panel1" ? "fa fa-sort-asc" : "fa fa-sort-desc"
              }
            />
          </div>
        </AccordionSummary>
        <AccordionDetails className="conbox_accodition conbox_accodition2">
          <div className="accodition_content accodition_content2">
            <div className="down_dow">
              {topicData.map((topic) => (
                <>
                  <button
                    key={`${topicData.indexOf(topic)}`}
                    type="button"
                    ref={anchorRef}
                    aria-describedby={id}
                    onClick={(event) => handleOpenDesc(event, topic)}
                    className="down_dow_btn_List"
                  >
                    {topic["name"]}
                    <KeyboardArrowDown />
                  </button>

                  <Popover
                    id={id}
                    open={currentTopic !== null}
                    anchorEl={anchorRef.current}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div className="box_vs_custoSyllbus">
                      <p className="text-[#333444] font-medium">
                        {currentTopic !== null && currentTopic["name"]}
                      </p>
                      <p className="text-sm">
                        {currentTopic !== null && currentTopic["description"]}
                      </p>
                      <div className="btn_box_self btn_box " />
                    </div>
                  </Popover>
                </>
              ))}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CourseSubject;
