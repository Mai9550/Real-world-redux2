import React from 'react'
import Courses from "../Courses";
import Notification from '../Notification'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './UperNotification.css'
function UperNotification({open}) {
  return (
    <div style={{display:'flex',
                flexDirection:'column',
                zIndex:'300'}} >
        <div style={{display:'flex',flexDirection:'row'}} >
            <ArrowBackIcon style={{backgroundColor:'lightgray',
                                    width:'50px',
                                    height:'40px',
                                    marginBottom:'10px',
                                    cursor:'pointer',
                                    borderRadius:'10px'
                                    
                                    }} onClick={()=>open(false)}/>
         <p  className="notify"><NotificationsIcon/> Notification</p>

        </div>
        
            <Notification/>
            <Courses/>

    </div>
  )
}

export default UperNotification