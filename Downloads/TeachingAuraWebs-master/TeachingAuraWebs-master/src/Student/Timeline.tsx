import {Calendar, momentLocalizer, Views} from "react-big-calendar";
import React, {Children, useEffect, useState} from "react";
import moment from "moment";
import "./Timeline.css";
import {useTimeLine} from "../contexts/TimeLineContext";
import EnterIc from "../icon/drawable/EnterIc";

import {InstituteControllerService} from "../client/services/InstituteControllerService";
import {openInNewTab} from "../InstituteFlow/Batches/ViewTest";
import {useInjection} from "inversify-react";
import {SignInDetails} from "../LoginFlow/SignInDetails";

const Timeline = (props) => {
    const {fetchSchedule, schedule} = useTimeLine();
    const localizer = momentLocalizer(moment); // or globalizeLocalizer
    const [eventsList, setEventsList] = useState<any>([]);
    const signInDetails = useInjection<SignInDetails>("signInDetails");

    const ColoredDateCellWrapper = (props) =>
        React.cloneElement(Children.only(props.children), {
            style: {
                ...props.children.style,
                minHeight: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                background: "white",
                fontFamily: "Roboto",
            },
        });

    const generateEventsList = async (sch) => {
        const list = await Promise.all(
            sch.map(async (s) => {
                let start = new Date(s.startTime);
                let end = new Date(s.endTime);
                let batchDetails = await InstituteControllerService.getBatchById(
                    s.instituteId,
                    s.batchId
                ).then((data) => data)
                return {
                    title: s.topicName,
                    start: start,
                    end: end,
                    allDay: false,
                    zoomUrl: s.joinUrl,
                    zoomId:s.meetingId,
                    batchName: batchDetails.name,
                    courseName: batchDetails.courseName
                };
            console.log("=>",s)
            })

        );

        setEventsList(list);
    };

    useEffect(() => {
        fetchSchedule(props.selectedInstitute, signInDetails);
    }, [props.selectedInstitute]);

    useEffect(() => {
        generateEventsList(schedule);
    }, [schedule]);

    const element = (value) => {
        const {start, end} = value.event || {};
        return (
            <div className="flex py-1 space-x-6 h-full justify-between flex-grow text-xl w-full">
                <div className="flex items-start">
                    <h2 className="text-sm font-semibold truncate pr-4">
                        {value.event.title}
                    </h2>
                    <p className="text-xs">{`${start?.toLocaleTimeString()} - ${end?.toLocaleTimeString()}`}</p>
                </div>
                <div className="flex space-x-3 h-full">
                    <div className="flex-col flex justify-evenly">
                        <span className="font-semibold text-sm truncate">{value.event.courseName}</span>
                        <span className="mt-2 font-semibold text-sm truncate">{value.event.batchName}</span>
                    </div>
                    <button
                        type="button" onClick={async () => {const url=(signInDetails.role==='teacher')?(await (InstituteControllerService.getZoomUrlById(value.event.zoomId).then(data=>data))):value.event.zoomUrl;openInNewTab(url)}}
                        className="text-black font-semibold text-sm p-2 bg-white rounded-2xl flex flex-col items-center justify-center"
                    >
                        <span className="flex items-center space-x-3"> <EnterIc/> <span>Enter</span></span>
                    </button>
                </div>
            </div>
        );
    };


    return (
        <Calendar
            localizer={localizer}
            events={eventsList}
            defaultDate={props.dateValue}
            date={props.dateValue}
            defaultView={Views.DAY}
            views={["day"]}
            step={60}
            timeslots={1}
            toolbar={false}
            selectable={false}
            dayLayoutAlgorithm="no-overlap"
            components={{
                event: element,
                timeSlotWrapper: ColoredDateCellWrapper,
                dateCellWrapper: ColoredDateCellWrapper,
            }}
        />
    );
};

export default Timeline;
