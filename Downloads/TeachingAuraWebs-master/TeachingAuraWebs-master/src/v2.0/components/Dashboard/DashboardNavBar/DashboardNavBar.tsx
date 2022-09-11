import React, { useState } from "react";
import { ReactComponent as MessageIcon } from "../../../.././assets/image/SVG/message-icon.svg";
import { ReactComponent as NotificationIcon } from "../../../../assets/image/SVG/notification.svg";
import styles from "./DashboardNavBar.module.scss";
import { Add } from "@mui/icons-material";

const DashboardNavBar = (props) => {
  const { page, image } = props;
  return (
    <div className={styles.navBar}>
      <div className={styles.title}>{page}</div>
      <div className={styles.details}>
        {props.invite && (
          <button
            className={styles.sendInviteButton}
            onClick={() => props.setInviteModal(true)}
          >
            <Add />
            Invite teacher
          </button>
        )}
        <MessageIcon />
        <NotificationIcon />
        <img src={image} alt="baby yoda" />
      </div>
    </div>
  );
};

export default DashboardNavBar;
