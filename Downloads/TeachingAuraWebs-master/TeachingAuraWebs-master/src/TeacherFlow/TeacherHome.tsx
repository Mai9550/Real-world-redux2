/* eslint-disable react/function-component-definition */
import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DatePicker from '../components/DatePicker';
import Side_Menu from '../components/Side_Menu';
import HeadSub from '../components/HeadSub';
import NotificationTab from './NotificationTab';
import Classrooms from './Classrooms';
import CoursesTab from './CoursesTab';

export default function TeacherHome() {
  const navigate = useNavigate();
  return (
    <div className="content_full_container box_ladto">
      <Side_Menu />
      <div className="content_box content_box22">
        <header className="heder_nav">
          <div className="box_vc_nav_right box_vc_nav_right22">
            <a onClick={() => navigate(-1)}>
              <i className="fa fa-long-arrow-left" />
            </a>
            <h4>Teacher</h4>
            <span>Name</span>
          </div>
          <div className="box_vc_nav_left">
            <HeadSub />
          </div>
        </header>

        <div className="grid grid-cols-3 gap-x-3 flex-grow overflow-y-auto">
          <div className="flex flex-col space-y-3 overflow-y-auto">
            <div className="w-full pl-[40px] pr-4">
              <DatePicker />
            </div>
            <div className="flex-grow overflow-y-auto pr-4 pl-[40px]">
              <Classrooms />
            </div>
          </div>

          <div className="flex flex-col space-y-3 col-span-2 overflow-y-auto">
            <div className="flex flex-col w-full overflow-y-auto">
              <div className="w-full pl-4 pr-[40px]">
                <NotificationTab />
              </div>
              <div className="flex-grow overflow-y-auto pr-[40px] pl-4 w-full">
                <CoursesTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
