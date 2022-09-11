import Drawer from "@mui/material/Drawer";
import Notification from './Notification'
// import NotificationUper from "./NotificationUper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Courses from "./Courses";




const DrawerRight = (props) => {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.setIsDrawerOpen(open);
    // setState({ ...state, [anchor]: open });
  };
  return (
    <div>
      <Drawer
        anchor={"right"}
        open={props.isDrawerOpen}
        onClose={toggleDrawer("right", false)}
        sx={{ width: "500px", }} 
      >
      
           
             <div>
        <div style={{display:'flex',
                      height:'30px',
                    flexDirection:'row',
                    backgroundColor:'white', 
                    color:'black',
                    justifyContent:'center'}} > <NotificationsIcon/> Notification</div>
        
          <Notification/>
          <Courses/>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerRight;
