import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import React from "react";
import p1 from "../../assets/image/p1.jpg";
import { useInstitute } from "../../contexts/InstituteContext";
import { SignInDetails } from "../../LoginFlow/SignInDetails";
import { useInjection } from "inversify-react";

const COLORS = [
  "#FF3998",
  "#3964FF",
  "#9039FF",
  "#FF8C39",
  "#FB39FF",
  "#39C4FF",
];

const useStyles = makeStyles({
  row: {
    cursor: "pointer",
    borderRadius: "12px",

    "&:hover": {
      color: "white",
      background: "#FF3998",
      // background: props => COLORS[props['isx']%6],
      "& $enter": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },

  active: {
    cursor: "pointer",
    borderRadius: "12px",
    color: "white",
    background: "#FF3998",
    // background: props => COLORS[props['isx']%6],
    "& $enter": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  // row:focus: {
  //   background:"green",
  // },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
  },
  enter: {
    display: "none",
    padding: "12px 12px",
    opacity: "0.8",
    borderRadius: "8px",
    background: "rgb(255, 255, 255, 0.7)",
    "&:hover": {
      background: "rgb(255, 255, 255, 0.8)",
      color: "white",
    },
  },
});

const Classrooms = (props) => {
  const {
    fetchInstitutes,
    institutes,
    selectedInstitute,
    selectedInstituteId,
    setSelectedInstituteId,
    setSelectedInstitute,
    setViewNotifications,
  } = useInstitute();
  const signInDetails = useInjection<SignInDetails>("signInDetails");

  const rooms = institutes || [];
  const [click, setclicked] = useState(false);

  useEffect(() => {
    fetchInstitutes(signInDetails);
  }, []);

  const imageExists = (image_url) => {
    // var http = new XMLHttpRequest();setSelectedInstitute(room)
    // http.open("HEAD", image_url, false);
    // http.send();
    return true;
  };

  const changeTimeline = (room) => {
    if (selectedInstituteId !== room.id) {
      setSelectedInstitute("");
    }
    setSelectedInstituteId(room.id);
  };

  const onChangeRoom = (room) => {
    setSelectedInstitute(room);
  };
  const classes = useStyles();

  return (
    <>
      {rooms.map((room, idx) => {
        if (props.selectedInstitute === "" && idx === 0)
          setSelectedInstitute(room);
        let imageUrl = room["logo"];
        return (
          <Grid
            onClick={() => changeTimeline(room)}
            key={`room_${rooms.indexOf(room)}`}
            p={1}
            item
            xs={12}
            container
            alignItems="center"
            className={
              room.id === selectedInstituteId ? classes.active : classes.row
            }
            style={{
              backgroundColor:
                selectedInstitute?.id === room.id ? COLORS[idx%6] : "",
              color: selectedInstitute?.id === room.id ? "white" : "",
              marginBottom: "15px",
            }}
          >
            <Grid onClick={() => changeTimeline(room)} item xs={1}>
              <div
                className="h-full mr-0"
                style={{
                  height: "60px",
                  width: "5px",
                  background: `${COLORS[idx % 6]}`,
                  borderRadius: "10px",
                }}
              ></div>
            </Grid>
            <Grid onClick={() => changeTimeline(room)} item xs={2}>
              <img
                src={imageUrl}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src="https://cdn.glitch.global/f1b16922-0983-4ea8-87da-df0548a027df/Group%2042.svg?v=1643963395426";
                }}
                alt="avatar"
                className={classes.avatar}
              />
            </Grid>
            <Grid onClick={() => changeTimeline(room)} item xs={7}>
              {room.instituteName}
            </Grid>
            <Grid item xs={2} onClick={() => onChangeRoom(room)}>
              <span className={classes.enter}>
                {/* <i className="fa fa-long-arrow-left " /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </span>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Classrooms;
