import React, {useState} from "react";


// Accodina
import {withStyles} from "@mui/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useNavigate } from "react-router-dom";
import ClockIc from "../../icon/drawable/ClockIc";
import CalendarIc from "../../icon/drawable/CalendarIc";
import CourseIc from "../../icon/drawable/CourseIc";

// import Header from "../../components/Header";


// Accodiantion

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
        backgroundColor: "#2697fe",
        marginBottom: -1,
        padding: "20px 30px",
        color: " #fff",
        borderRadius: 25,
        display: "block",

        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
            borderRadius: 25,
        },
    },
    content: {
        "&$expanded": {
            margin: "12px 0",
            borderRadius: 25
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        borderRadius: 50,
        padding: "20px 30px 30px"
    },
    "&$expanded": {
        borderRadius: 50
    },
    content: {
        "&$expanded": {
            borderRadius: 50
        }
    },

}))(MuiAccordionDetails);

// Accodiantion End

const TestAccordion = (props) => {

    // Accodiantion

    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [viewTest, setViewTest] = useState(0)
    // Accodiantion End
    const navigate = useNavigate();

    return (

        <React.Fragment>

            <Accordion
                square
                expanded={expanded === props.panle}
                onChange={handleChange(props.panle)}
                className="accoditon_vs"
            >
                <AccordionSummary
                    aria-controls={props.panle}
                    id={props.panle}
                >
                    <div className="acodition_title">
                        <h5>{props.titleName}</h5>
                        <span
                            className={
                                expanded === "panel1"
                                    ? "fa fa-sort-asc"
                                    : "fa fa-sort-desc"
                            }
                        ></span>
                    </div>
                </AccordionSummary>
                <AccordionDetails className="conbox_accodition">
                    <div className="accodition_content">
                        <p>
                            {props.description}
                        </p>
                        <div className="icon_box_ac box_alss_ver">
                        <span style={{display:'flex'}}>
                        <CalendarIc/>
                        <span style={{paddingLeft:20}}>{props.date}</span>
                        </span>
                            <span style={{display:'flex'}}>
                            <ClockIc/>
                            <span style={{paddingLeft:20}}>{props.time}</span>
                        </span>
                        </div>
                        <div className="btn_box btn_box2">
                            {/* <button className="btn_vs_over box_vflex_1">
                                Answers
                            </button> */}
                            <button className="btn_vs_over box_vflex_2" onClick={() => {
                                // props.setViewTest(1);
                                // props.setSelectedTest(props.data)
                                navigate('/batch/view-test');
                            }}>
                                view test
                            </button>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>


        </React.Fragment>
    );
};

export default TestAccordion;
