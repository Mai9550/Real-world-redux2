import React from "react";
import AllCoursesProvider from "../contexts/AllCoursesContext";
import DialogProvider from "../contexts/DialogContext";
import TeacherProvider from "../contexts/TeacherContext";
import StudentProvider from "../contexts/StudentContext";
import HeaderProvider from "../contexts/HeaderContext";
import NotificationsProvider from "../contexts/NotificationsContext";
import BatchProvider from "../contexts/BatchContext";
import TimeLineProvider from "../contexts/TimeLineContext";
import InstituteProvider from "../contexts/InstituteContext";

const Providers = ({ children }) => {
  return (
    <AllCoursesProvider>
      <DialogProvider>
        <TeacherProvider>
          <StudentProvider>
            <HeaderProvider>
              <NotificationsProvider>
                <TimeLineProvider>
                  <InstituteProvider>
                    <BatchProvider>{children}</BatchProvider>
                  </InstituteProvider>
                </TimeLineProvider>
              </NotificationsProvider>
            </HeaderProvider>
          </StudentProvider>
        </TeacherProvider>
      </DialogProvider>
    </AllCoursesProvider>
  );
};

export default Providers;
