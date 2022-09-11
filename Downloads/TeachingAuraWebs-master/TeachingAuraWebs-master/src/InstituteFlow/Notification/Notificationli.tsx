import React, { useEffect } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { useInjection } from "inversify-react";
import { useNavigate } from "react-router-dom";
import HeadSub from "../../components/HeadSub";
import SideMenu from "../../components/Side_Menu";
import NotiList from "./NotiList";
import { RefreshAnnouncements } from "../../observables/RefreshEvents";
import { SignInDetails } from "../../LoginFlow/SignInDetails";
import { useNotifications } from "../../contexts/NotificationsContext";
import Scaffold from "../../Widgets/Scaffold";
import PlusIc from "../../icon/drawable/PlusIc";

const Notificationli = () => {
  const navigate = useNavigate();
  const { notifications, error, loading, fetchNotifications } =
    useNotifications();
  const instituteId = useInjection<SignInDetails>("signInDetails").id;
  const role = useInjection<SignInDetails>("signInDetails").getRole();
  useEffect(() => {
    fetchNotifications(instituteId);
    const subscription = RefreshAnnouncements.subscribe(() => {
      fetchNotifications(instituteId);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (error !== null && !notifications.length) {
    return (
      <Scaffold>
        <p className="m-auto">Something went wrong</p>
      </Scaffold>
    );
  }

  if (loading) {
    return (
      <Scaffold>
        <p className="m-auto">Loading...</p>
      </Scaffold>
    );
  }

  return (
    <div className="content_full_container box_ladto">
      <SideMenu active={"notifications"} />
      <div className="content_box content_box22">
        <header className="heder_nav  ">
          <div className="box_vc_nav_right box_vc_nav_right22">
            <h4 style={{ borderRight: 0 }}>All Announcements</h4>
          </div>
          <div className="box_vc_nav_left">
            {role !== "student" && (
              <button
                type="button"
                className="btnx_hede"
                onClick={() => navigate("/add-announce")}
              >
                {/* <CreateNewFolderIcon/> */}
                <PlusIc color={"white"} />
                <span>Create notification</span>
              </button>
            )}

            <HeadSub />
          </div>
        </header>

        <div className="flex-grow px-[40px] overflow-y-auto">
          {notifications.length <= 0 ? (
            <p className="m-auto">No notification added yet.</p>
          ) : (
            notifications.map((notification, index) => (
              <div
                className="flex items-start w-full space-x-3"
                key={`${notification.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                {/* <div className="rounded-xl px-3 py-2 bg-[#EEEEEE]"> */}
                {/*     {index + 1} */}
                {/* </div> */}
                <NotiList data={notification} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notificationli;
