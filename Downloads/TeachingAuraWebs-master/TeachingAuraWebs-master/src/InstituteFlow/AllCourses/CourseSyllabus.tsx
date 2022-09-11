/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/dot-notation */
import React, { useEffect, useState } from 'react';
import { useInjection } from 'inversify-react';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';
import SideMenu from '../../components/Side_Menu';
import HeadSub from '../../components/HeadSub';
import { SignInDetails } from '../../LoginFlow/SignInDetails';
import { useAllCourses } from '../../contexts/AllCoursesContext';
import CourseSubject from '../Batches/CourseSubject';
import Scaffold from '../../Widgets/Scaffold';

const CourseSyllabus = () => {
  const { id: courseId } = useParams();
  const { currentCourse, error, loading, onLoadCourse } =
    useAllCourses();

  const instituteId = useInjection<SignInDetails>('signInDetails').id;

  useEffect(() => {
    onLoadCourse(instituteId, courseId);
  }, []);

  const navigate = useNavigate();

  if (error !== null && !currentCourse) {
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

  if (!currentCourse) {
    return (
      <Scaffold>
        <p className="m-auto">Course is not available</p>
      </Scaffold>
    );
  }

  const subjects = currentCourse.subjects || [];
  return (
    <div className="content_full_container box_ladto">
      <SideMenu />
      <div className="content_box content_box22">
        <header className="heder_nav  ">
          <div className="box_vc_nav_right box_vc_nav_right22">
            <a onClick={() => navigate(-1)}>
              <i className="fa fa-long-arrow-left" />
            </a>
            <h4 style={{ borderRight: 0 }}>{currentCourse.name}</h4>
          </div>
          <div className="box_vc_nav_left">
            <button
              type="button"
              className="btnx_hede"
              onClick={() => navigate(`/course/edit/${courseId}`)}
            >
              <EditIcon />
              <span>Edit Course</span>
            </button>
            <HeadSub />
          </div>
        </header>

        <div className="flex-grow overflow-y-auto mt-2 px-[40px]">
          <div
            className="sylabs_text_cont"
            style={{ textAlign: 'center' }}
          >
            <h4> {currentCourse.name}</h4>
            <p>{currentCourse.description}</p>
          </div>
          {subjects.length > 0 &&
            subjects.map((subject, index) => (
              <CourseSubject
                key={`${subject.id}`}
                subject={subject}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSyllabus;
