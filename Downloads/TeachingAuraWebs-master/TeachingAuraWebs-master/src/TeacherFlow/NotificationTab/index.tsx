import React, {useState} from "react";
import {useInjection} from "inversify-react";
import CupIcon from "../../icon/cupIcon";
import EnterIcon from "../../icon/enterIcon";
import bgNoti from "../../assets/svg/bgNoti.svg";
import notBar from "../../assets/svg/notBar.svg";
import bgCircle from "../../assets/svg/bgCircle.svg";
import {useNotifications} from "../../contexts/NotificationsContext";
import {SignInDetails} from "../../LoginFlow/SignInDetails";
import {useStudent} from "../../contexts/StudentContext";
import {AnnouncementDetails, NoticeDetails, StudentControllerService, TeacherControllerService} from "../../client";
import {useInstitute} from "../../contexts/InstituteContext";

const NotificationTab = () => {
    const {
        fetchInstitutes,
        institutes,
        selectedInstitute,
        selectedInstituteId,
        setSelectedInstituteId,
        setSelectedInstitute,
        setNotifications,
    } = useInstitute();
    const signInDetails = useInjection<SignInDetails>("signInDetails");
    // const { announcements, fetchAllAnnouncements } = useStudent();
    const {viewNotifications, setViewNotifications} = useNotifications();
    const [announcements, setAnnounceList] = useState<NoticeDetails[]>([]);

    const fetchData = async (selectedInstituteId) => {
        setAnnounceList(await (signInDetails.role === 'teacher' ? TeacherControllerService.getTeacherAnnouncements(signInDetails.id + '') : StudentControllerService.getStudentAnnouncements(signInDetails.id + '')).then(data => data.filter(r => r['batches']?.map(i => i.instituteId).includes(selectedInstituteId))))
    }
    React.useEffect(() => {
        fetchData(selectedInstituteId);
        // fetchAllAnnouncements(signInDetails.id);
    }, [selectedInstituteId]);


    const announceList = !viewNotifications
        ? announcements.slice(0, 4)
        : announcements;
    return (
        <div className="flex flex-grow overflow-y-auto flex-col items-center">
            <div
                className="translate-y-6 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover w-[200px] h-[43px]"
                style={{backgroundImage: `url(${notBar})`}}
            >
                <p className="text-sm font-semibold mt-2">
                    <i className="fa fa-bell"/>
                    <span>Notification</span>
                </p>
            </div>
            <div className="flex flex-col overflow-y-auto flex-grow w-full pr-[40px]">
                <div
                    className="flex flex-col flex-grow items-start gap-y-[14px] w-full rounded-[20px] p-4 bg-center bg-no-repeat bg-cover"
                    style={{backgroundImage: `url(${bgNoti})`}}
                >
                    {announceList.map((notification) => {
                        return (
                            <div
                                key={`noti_${announceList.indexOf(notification)}`}
                                className="flex items-center space-x-3 w-full"
                            >
                <span
                    className="rounded-full p-2 bg-center bg-no-repeat bg-cover"
                    style={{backgroundImage: `url(${bgCircle})`}}
                >
                  <CupIcon/>
                </span>
                                <p className="text-white my-auto truncate">
                                    {notification.content}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button
                type="button"
                onClick={() => setViewNotifications(!viewNotifications)}
                className="-translate-y-8 flex items-center rounded-full bg-white border border-gray-200 py-3 px-8"
            >
                <EnterIcon/>
                <span>{viewNotifications ? "Leave" : "Enter"}</span>
            </button>
        </div>
    );
};

export default NotificationTab;
