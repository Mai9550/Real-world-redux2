import { Grid } from "@mui/material";
import CourseIc from "../../icon/drawable/CourseIc";
import StudentIc from "../../icon/drawable/StudentIc";
import TeacherIc from "../../icon/drawable/TeacherIc";
import AllManage from "./All_Manage";
import ScheduleDe from "./Schedule_De";
import StatisticsDe from "./StatisticsDe";

export default function OverView({overviewData}){
    return (
        <>
            <div className="all_desbo_conte margin_vs m-0 py-4 px-[40px]">
                <div className="teit_all">
                    <h4>All</h4>
                    <span>Monday, 28 2021</span>
                </div>

                <div className="flex items-center space-x-3">
                    <AllManage
                        c_name={"Courses"}
                        c_value={overviewData['numberOfCourses']}
                        c_icon={"fa fa-graduation-cap"}
                        c_redir={"/courses"}
                        icon={<CourseIc />}
                    />

                    <AllManage
                        c_name={"Teachers"}
                        c_value={overviewData["numberOfTeachers"]}
                        c_icon={"fa fa-user-circle"}
                        c_redir={"/teachers"}
                        icon={<TeacherIc /> }
                    />
                    
                    <AllManage
                        c_name={"Students"}
                        c_value={overviewData["numberOfStudents"]}
                        c_icon={"fa fa-users"}
                        c_redir={"/students"}
                        icon={<StudentIc />}
                    />
                </div>
            </div>

            <div className="px-[40px] mt-4">
                <div className="box_contec_3 margin_vs">
                    <div className="teit_all">
                        <h4>Today’s Schedule</h4>
                    </div>
                    <div className="box_vdtd grid grid-cols-4 gap-4 xl:w-[80%]">
                        <ScheduleDe
                            s_value={overviewData['liveLectures']}
                            s_name={"Live Clasess"}
                            s_show={true}
                            s_active={false}
                        />
                        <ScheduleDe
                            s_value={overviewData['upcomingLectures']}
                            s_name={"Upcoming Clasess"}
                            s_show={false}
                            s_active={false}
                        />

                        <ScheduleDe
                            s_value={overviewData['pastLectures']}
                            s_name={"Completed Live Clasess"}
                            s_show={false}
                            s_active={true}
                        />
                    </div>
                </div>

                <div className="box_contec_3 margin_vs">
                    <div className="box_vdtd">
                        <Grid container >
                            <Grid item xs={9}>
                                <div className="teit_all teit_all_flex">
                                    <h4>Statistics (coming soon)</h4>

                                    <div className="btn_box_moth">
                                        <a href="#" className="active">
                                            today
                                        </a>
                                        <a href="#">this Week</a>
                                        <a href="#">this month</a>
                                    </div>
                                    <h4 style={{visibility:"hidden"}}>Statistics (coming soon)</h4>

                                </div>
                                <div className="box_vdtd_trac_box rounded-[30px]">
                                    <StatisticsDe
                                        staValue={50}
                                        staName={"Live Clasess Taken"}
                                        staColor={true}
                                        staBorder={true}
                                        staGra={+9.5}
                                    />
                                    <StatisticsDe
                                        staValue={120}
                                        staName={"Teachers Hours"}
                                        staColor={false}
                                        staBorder={true}
                                        staGra={+0.9}
                                    />
                                    <StatisticsDe
                                        staValue={20}
                                        staName={"Learning Hours"}
                                        staColor={false}
                                        staBorder={true}
                                        staGra={+0.49}
                                    />
                                    <StatisticsDe
                                        staValue={233}
                                        staName={"Avg Attendance"}
                                        staColor={true}
                                        staBorder={false}
                                        staGra={-1.4}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    );
}
