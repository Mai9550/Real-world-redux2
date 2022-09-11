import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAllCourses } from '../../../contexts/AllCoursesContext';
import { SignInDetails } from '../../../LoginFlow/SignInDetails';
import TextField from '../../../components/TextField';
import SubjectSection from './_SubjectSection';
import DialogTopic from './DialogTopic';
import SideMenu from '../../../components/Side_Menu';
import HeadSub from '../../../components/HeadSub';
import Scaffold from '../../../Widgets/Scaffold';
import generateId from '../../../helpers/generateId';
import PlusIc from '../../../icon/drawable/PlusIc';
import OpenIc from '../../../icon/drawable/OpenIc';

const EditCourse = () => {
  const institute = new SignInDetails();
  const {
    currentCourse,
    setCurrentCourse,
    error,
    onUpdateCourse,
    onLoadCourse,
    submitting,
    loading,
  } = useAllCourses();
  const { id: courseId } = useParams();
  const navigate = useNavigate();

  const onAddSubject = () => {
    const newSubject = {
      id: generateId(),
      name: '',
      topics: [],
    };
    setCurrentCourse({
      ...currentCourse,
      subjects: [newSubject, ...currentCourse.subjects],
    });
  };

  const handleOnChangeCourseName = ({ target }) => {
    setCurrentCourse({
      ...currentCourse,
      name: target.value,
    });
  };

  const handleOnChangeCourseDesc = ({ target }) => {
    setCurrentCourse({
      ...currentCourse,
      description: target.value,
    });
  };

  const handleUpdateCourse = event => {
    event.preventDefault();
    onUpdateCourse(institute.id, courseId);
  };

  React.useEffect(() => {
    onLoadCourse(institute.id, courseId);
  }, []);

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

  const { subjects } = currentCourse;
  return (
    <div className="content_full_container box_ladto">
      <SideMenu active={'courses'} />
      <div className="content_box content_box22">
        <header className="heder_nav  ">
          <div className="box_vc_nav_right box_vc_nav_right22">
            <a onClick={() => navigate(-1)}>
              <i className="fa fa-long-arrow-left" />
            </a>
            <h4 style={{ borderRight: 0 }}>
              Edit {currentCourse.name}
            </h4>
          </div>
          <div className="box_vc_nav_left">
            <HeadSub />
          </div>
        </header>
        <div className="flex flex-col items-center w-full flex-grow overflow-y-auto">
          <div className="grid gap-10 grid-cols-4 px-[40px] w-full">
            <div className="w-full">
              <TextField
                name="courseName"
                placeholder="Course name"
                id="course-name"
                value={currentCourse.name}
                onChange={handleOnChangeCourseName}
              />
            </div>

            <div className="col-span-3 w-full">
              <div className="flex items-center pr-4 space-x-2 bg-[#EEEEEE] rounded-[30px]">
                <TextField
                  name="courseDescription"
                  placeholder="Course Description"
                  id="course-description"
                  value={currentCourse.description}
                  onChange={handleOnChangeCourseDesc}
                />
                <div className="hover_box">
                  <button type="button" className="cursor-pointer">
                    <OpenIc />
                  </button>

                  <div className="dorndow_box">
                    <h4>Description </h4>
                    <span>{currentCourse.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow px-[40px] mt-2 overflow-y-auto py-4 w-full">
            <div className="grid gap-10 grid-cols-4 flex-grow w-full">
              <div className="row-start-1 row-end-2 col-start-4">
                <button
                  type="button"
                  onClick={onAddSubject}
                  className="flex items-center space-x-2 justify-center font-bold py-3 rounded-3xl text-white w-full bg-[#FF3998]"
                >
                  <PlusIc color={"white"} /> <span>Add Subject</span>
                </button>
              </div>

              {subjects.length > 0 ? (
                subjects.map((subject, index) => (
                  <SubjectSection
                    key={`${subject.id}`}
                    index={index}
                    id={subject.id}
                    name={subject.name}
                    topics={subject.topics}
                  />
                ))
              ) : (
                <p>No subject added yet.</p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={handleUpdateCourse}
            disabled={submitting}
            className={`${
              submitting
                ? 'cursor-not-allowed bg-gray-200 border border-gray-300'
                : 'cursor-pointer bg-[#2697fe]'
            } text-white font-medium py-3 mb-4 px-16 xl:px-32 bottom-3 rounded-3xl`}
          >
            {submitting ? 'Updating...' : 'Update'}
          </button>
        </div>
        <DialogTopic />
      </div>
    </div>
  );
};

export default EditCourse;
