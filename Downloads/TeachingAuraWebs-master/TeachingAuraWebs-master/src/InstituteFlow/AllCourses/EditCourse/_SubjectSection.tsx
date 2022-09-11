import React from 'react';
import TextField from '../../../components/TextField';
import { useDialog } from '../../../contexts/DialogContext';
import { useAllCourses } from '../../../contexts/AllCoursesContext';
import DescriptionIc from '../../../icon/drawable/DescriptionIc';
import TrashIc from '../../../icon/drawable/TrashIc';
import EditIc from '../../../icon/drawable/EditIc';
import PlusIc from '../../../icon/drawable/PlusIc';

const SubjectSection = ({ id, name, index, topics }) => {
  const { setCurrentTopic, setOpenTopic } = useDialog();
  const { currentCourse, setCurrentSubjectId, setCurrentCourse } =
    useAllCourses();

  const handleOpenTopic = topic => {
    setCurrentTopic(topic);
    setOpenTopic(true);
    setCurrentSubjectId(id);
  };

  const handleOnChangeSubjectName = ({ target }, subjId) => {
    const subjects = currentCourse.subjects.map(subject => {
      if (subject.id === subjId) {
        subject.name = target.value;
      }
      return subject;
    });
    setCurrentCourse({
      ...currentCourse,
      subjects,
    });
  };

  const handleOnChangeTopicName = ({ target }) => {
    console.log(target.value);
  };

  const onDeleteSubject = subjId => {
    const subjects = currentCourse.subjects.filter(
      subject => subject.id !== subjId,
    );
    setCurrentCourse({
      ...currentCourse,
      subjects,
    });
  };

  const onDeleteTopic = topicId => {
    const subjects = currentCourse.subjects.map(subject => {
      if (!subject.topics || subject.topics.length <= 0)
        return subject;
      const topics = subject.topics.filter(
        topic => topic.id !== topicId,
      );
      return {
        ...subject,
        topics,
      };
    });

    setCurrentCourse({
      ...currentCourse,
      subjects,
    });
  };

  return (
    <div className="flex flex-col space-y-5 w-full">
      <div className="flex items-center relative bg-[#EEEEEE] rounded-[30px] w-full">
        <TextField
          name="subjectName"
          placeholder={`Subject${index + 1}`}
          id={`${id}${index}`}
          value={name}
          onChange={event => handleOnChangeSubjectName(event, id)}
        />
        <div className="flex items-center pr-4 space-x-2">
          <button
            type="button"
            onClick={onDeleteSubject.bind(this, id)}
          >
            <TrashIc />
          </button>
          <button type="button" onClick={() => handleOpenTopic(null)}>
            <PlusIc />
          </button>
        </div>
      </div>

      {topics.length > 0 &&
        topics.map((topic, index) => (
          <div
            key={`${topic.id}`}
            className="flex items-center relative bg-[#EEEEEE] rounded-[30px] w-full"
          >
            <TextField
              name="topicName"
              placeholder={`Topic${index + 1}`}
              id={`${topic.id}${index}`}
              value={topic.name}
              onChange={handleOnChangeTopicName}
            />
            <div className="flex items-center pr-4 space-x-2">
              <button
                onClick={() => handleOpenTopic(topic)}
                type="button"
              >
                <EditIc />
              </button>
              <button
                type="button"
                onClick={onDeleteTopic.bind(this, topic.id)}
              >
                <TrashIc />
              </button>
              <div className="hover_box">
                <DescriptionIc />
                <div className="dorndow_box">
                  <h4>Description </h4>
                  <span>{topic.description}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SubjectSection;
