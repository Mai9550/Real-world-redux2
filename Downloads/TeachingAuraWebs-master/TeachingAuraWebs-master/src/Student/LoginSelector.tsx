import React, { useEffect } from "react";
import {
  Button,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Img from "../icon/login_img.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useInjection } from "inversify-react";
import { SignInDetails } from "../LoginFlow/SignInDetails";

const LoginSelector = () => {
  const [alignment, setAlignment] = React.useState("admin");
  const signInDetails = useInjection<SignInDetails>("signInDetails");
  let navigate = useNavigate();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function signIn() {
    signInDetails.updateRole(alignment);
    localStorage.setItem('role',alignment);
    navigate("/login");
  }

  return (
    <Grid
      container
      direction={"row"}
      alignContent={"center"}
      sx={{ background: "#FBFBFB" }}
    >
      <Grid
        container
        item
        xs={5}
        height={"100vh"}
        direction={"column"}
        justifyContent={"space-around"}
      >
        <Grid item />
        <Grid item>
          <img src={Img} />
        </Grid>
      </Grid>
      <Grid container item direction="column" xs={6} alignItems={"center"}>
        <Grid item xs={1} />
        <Grid
          container
          item
          direction={"row"}
          justifyContent={"center"}
          color={"#333333"}
        >
          <Grid item marginTop={"8px"}>
            <img
              src="assets/image/SVG/Group.png"
              height="50px"
              width={"50px"}
            />
          </Grid>
          <Grid item fontSize={"50px"} marginLeft={"4px"} fontWeight={"500"}>
            Teaching Aura
          </Grid>
        </Grid>
        <Grid item xs={1} />
        <Grid item fontSize={"50px"} color={"#333333"}>
          Login/Signup as
        </Grid>

        <Grid item marginTop={"150px"}>
          <ToggleButtonGroup
            value={alignment}
            color="primary"
            onChange={handleChange}
            exclusive
          >
            <ToggleButton value="admin" key="admin" sx={{ fontSize: "24px" }}>
              Admin
            </ToggleButton>
            <ToggleButton
              value="teacher"
              key="teacher"
              sx={{ fontSize: "24px" }}
            >
              Teacher
            </ToggleButton>
            <ToggleButton
              value="student"
              key="student"
              sx={{ fontSize: "24px" }}
            >
              Student
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item marginTop={"100px"} color="white" width={"50%"}>
          <Button
            fullWidth
            id="sign-in-button"
            sx={{
              background: (theme) => theme.palette.primary.main,
              color: "white",
              padding: "10px", //marginLeft:"10px",
            }}
            onClick={signIn}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginSelector;
