/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */
import "../assets/css/style.scss";
import "../assets/css/responsive.scss";
import "../assets/css/taplate.scss";
import "../assets/css/tailwind.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react-lite";
import Dashboard from "./Dashboard";
import { BatchesTest } from "./Batches/BatchesTest";
import AllBatches from "./AllBatchesGroup/AllBatches";
import Students from "./StudentsDes/Students";
import Notificationli from "./Notification/Notificationli";
import AllCourses from "./AllCourses/AllCourses";
import Profile from "./ProfilesFo/Profile";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../LoginFlow/Login";
import OTP from "../LoginFlow/OTP";
import InstituteSignUp from "../LoginFlow/institutes-sign-up";
import { SignInDetails } from "../LoginFlow/SignInDetails";
import SplashScreen from "../LoginFlow/SplashScreen";
import Teachers from "./TeachersDes/Teachers";
import Privacy from "../LandingPage/PrivacyPolicy";
import CourseSyllabus from "./AllCourses/CourseSyllabus";
import TermsAndConditions from "../LandingPage/TermsAndConditions";
import InviteList from "./InviteList/InviteList";
import EditCourse from "./AllCourses/EditCourse";
import AddCourse from "./AllCourses/AddCourse";
import ContextProviders from "./ContextProviders";
import CreateNotification from "./Notification/CreateNotification";
import Timeline from "../Student/Timeline";
import StudentHome from "../Student/StudentHome";
import LoginSelector from "../Student/LoginSelector";
import TeacherHome from "../TeacherFlow/TeacherHome";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../assets/css/style.scss";
import "../assets/css/responsive.scss";
import "../assets/css/taplate.scss";
import "../assets/css/tailwind.css";
import ViewTest from "./AllCourses/ViewTest";
/* Made by Anurag Budakoti  and Jaan Nishar*/
import Batches from "../v2.0/pages/Batches/Batches";
import Signup from "../v2.0/pages/Signup-Login/Signup/Signup";
import Otp from "../v2.0/pages/Signup-Login/Otp";
import CoursesT from "../v2.0/pages/Courses/CoursesT";
import AboutCourse from "../v2.0/pages/Courses/AboutCourse";
import DashboardT from "../v2.0/pages/Dashboard/Dashboard";
import StudentTeacher from "../v2.0/pages/student-teacher/StudentTeacher";
import InviteScreen from "../v2.0/pages/Invite-Screen/InviteScreen";
import SearchEngine from "../v2.0/pages/SearchEngine/SearchEngine";
import SearchResult from "../v2.0/pages/SearchResult/SeacrchResult";
import DetailsPage from "../v2.0/pages/DetailsPage/DetailsPage";
import Courses from "../v2.0/pages/Dashboard/Courses/Courses";

const AllRoutes = () => {
  const theme = getTheme();

  const signInDetails = useInjection<SignInDetails>("signInDetails");

  function getPrivateComponent(Component) {
    return observer(() => {
      return signInDetails.isLoaded ? (
        signInDetails.isSignedIn ? (
          <Component />
        ) : (
          <LoginSelectorComponent />
        )
      ) : (
        <SplashScreen />
      );
    });
  }

  function getPublicComponent(Component) {
    return observer(() => {
      if (signInDetails.isLoaded) {
        if (signInDetails.isSignedIn) {
          return signInDetails.role === "admin" ? (
            <Dashboard />
          ) : (
            <StudentHome />
          );
        }
        return <Component />;
      }
      return <SplashScreen />;
    });
  }

  const SignUpComponent = getPublicComponent(InstituteSignUp);
  const LoginComponent = getPublicComponent(Login);
  const OTPComponent = getPublicComponent(OTP);
  const TimelineComponent = getPublicComponent(Timeline);
  const StudentHomeComponent = getPrivateComponent(StudentHome);
  const TeacherHomeComponent = getPrivateComponent(TeacherHome);
  const TeacherComponent = getPrivateComponent(Teachers);
  const StudentsComponent = getPrivateComponent(Students);
  const DashboardComponent = getPrivateComponent(Dashboard);
  const AllCoursesComponent = getPrivateComponent(AllCourses);
  const ProfileComponent = getPrivateComponent(Profile);
  const CourseSyllabusComponent = getPrivateComponent(CourseSyllabus);
  const AllBatchesComponent = getPrivateComponent(AllBatches);
  const LoginSelectorComponent = getPublicComponent(LoginSelector);
  const InviteListComponent = getPrivateComponent(InviteList);
  const BatchesComponent = getPrivateComponent(BatchesTest);
  const ViewTestComponent = getPrivateComponent(ViewTest);

  const Institute = () => (
    <Routes>
      <Route path="/students" element={<StudentsComponent />} />
      <Route path="/teachers" element={<TeacherComponent />} />
      <Route path="/courses" element={<AllCoursesComponent />} />
      <Route path="/add-course/" element={<AddCourse />} />

      <Route path="/AllBatches" element={<AllBatchesComponent />} />

      <Route path="/course/:id" element={<CourseSyllabus />} />
      <Route path="/course/edit/:id" element={<EditCourse />} />
      {/*<Route*/}
      {/*    path="/add-announce"*/}
      {/*    element={<CreateNotification/>}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*    path="/Notificationli"*/}
      {/*    element={<Notificationli/>}*/}
      {/*/>*/}
      <Route path="/instituteHome" element={<DashboardComponent />} />
    </Routes>
  );
  const Student = () => (
    <Routes>
      <Route path="/studentHome" element={<StudentHomeComponent />} />
    </Routes>
  );
  const Teacher = () => (
    <Routes>
      <Route path="/teacherHome" element={<StudentHomeComponent />} />
      <Route path="/add-announce" element={<CreateNotification />} />
      <Route path="/Notificationli" element={<Notificationli />} />
    </Routes>
  );
  const General = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/selector" element={<LoginSelectorComponent />} />
      <Route path="/login" element={<LoginComponent />} />
      {/* <Route path="/signup" element={<SignUpComponent />} /> */}
      <Route path="/otp" element={<Otp />} />

      <Route path="/invitelist" element={<InviteListComponent />} />

      <Route path="/batch" element={<BatchesComponent />} />
      <Route path="/batch/view-test" element={<ViewTestComponent />} />

      <Route path="/Profile" element={<ProfileComponent />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      {/* Made by Anurag Budakoti  and Jaan Nishar*/}
      <Route path="/v2" element={<SearchEngine />} />
      <Route path="/v2/result" element={<SearchResult />} />
      <Route path="/v2/result/details" element={<DetailsPage />} />
      <Route path="/v2/courses" element={<Courses />} />
      <Route path="/v2/batches" element={<Batches />} />
      <Route path="/v2/signup" element={<Signup />} />
      <Route path="/v2/otp" element={<Otp />} />
      <Route path="/v2/t/courses" element={<CoursesT />} />
      <Route path="/v2/about-course" element={<AboutCourse />} />
      <Route path="/v2/dashboard" element={<DashboardT />} />
      <Route path="/v2/student-teacher" element={<StudentTeacher />} />
      <Route path="/v2/invite-screen" element={<InviteScreen />} />
    </Routes>
  );
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ContextProviders>
          <General />
          <Institute />
          <Teacher />
          <Student />
        </ContextProviders>
      </Router>
    </ThemeProvider>
  );
};

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    whites: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    whites?: PaletteOptions["primary"];
  }

  // interface BreakpointOverrides {
  //     xs: false; // removes the `xs` breakpoint
  //     sm: false;
  //     md: false;
  //     lg: false;
  //     xl: false;
  // }
}

function getTheme() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#EEEEEE",
        dark: "#EEEEEE",
      },
      primary: {
        main: "#2697FE",
        dark: "#2697FE",
      },
      secondary: {
        main: "#FF3998",
        dark: "#FF3998",
      },
      whites: {
        main: "#FFFFFF",
        dark: "#FFFFFF",
        contrastText: "#000000",
      },
      action: {
        disabledBackground: "#EEEEEE",
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            // '&:hover': {
            //     backgroundColor: "none"
            // }
          },
        },
      },
      // Name of the component
      MuiButton: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple!
          variant: "contained",
        },
        styleOverrides: {
          // Name of the slot
          root: {
            padding: "16px",
            // Some CSS
            borderRadius: "30px",
            textTransform: "none",
            fontSize: "18px",
            "&.Mui-disabled": {
              background: "#EEEEEE",
              color: "black",
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          // Name of the slot
          root: {
            paddingLeft: "15px",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "filled",
        },
      },
      MuiInput: {
        defaultProps: {
          disableUnderline: true,
        },
      },
      MuiFilledInput: {
        defaultProps: {
          disableUnderline: true,
        },
      },
    },
  });
  return theme;
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    whites: true;
  }
}

export default AllRoutes;
