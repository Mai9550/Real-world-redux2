import React from 'react';
import { Dialog, TextField, Typography } from '@mui/material';
import { useDialog } from '../../../contexts/DialogContext';
import { useAllCourses } from '../../../contexts/AllCoursesContext';
import generateId from '../../../helpers/generateId';

const DialogTopic = () => {
  const { openTopic, setOpenTopic, currentTopic } = useDialog();
  const { currentCourse, currentSubjectId, setCurrentCourse } = useAllCourses();
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const onChangeTopic = ({target}, key) => {
    if (key === 'name') setName(target.value);
    if (key === 'description') setDescription(target.value);

    if (!currentTopic) {
        return;
    }

    const subjects = currentCourse.subjects.map(subject => {        
        const topics = subject.topics.map(topic => {
            if (topic && topic.id === currentTopic.id) {
                topic[key] = target.value;
            }
            return topic;
        })
        return {
            ...subject,
            topics,
        }
    });
    setCurrentCourse({
        ...currentCourse,
        subjects,
      });
  }

  const onSubmit = (event) => {
      event.preventDefault();

      if (!currentTopic && currentSubjectId) {
        const newTopic = {
            id: generateId(),
            name,
            description,
        }
        const subjects = currentCourse.subjects.map(subject => { 
            if (subject.id === currentSubjectId) {
                return {
                    ...subject,
                    topics: [
                        newTopic,
                        ...subject.topics,
                    ]
                }
            }
            return subject;
        });
        setCurrentCourse({
            ...currentCourse,
            subjects,
          });
      }
      setOpenTopic(false);
  }

  return (
    <Dialog
      open={openTopic}
      onClose={() => setOpenTopic(false)}
    >
        <div className="box_form_custom">
            <Typography
                variant="h6"
                component="h2"
                align="center"
                gutterBottom
            >
                {!currentTopic ? 'Create' : 'Update'} Topic
            </Typography>
            <form onSubmit={onSubmit}>
                <div className="input_fleil_box mt-3">
                    <TextField
                        type="text"
                        label="Topic Name"
                        variant="filled"
                        className="box_vde"
                        onChange={(event) => onChangeTopic(event, 'name')}
                        name="tpiName"
                        defaultValue={currentTopic?.name}
                    />
                    <TextField
                        type="text"
                        label="Topic Discription"
                        variant="filled"
                        className="box_vde"
                        onChange={(event) => onChangeTopic(event, 'description')}
                        name="tpiDes"
                        defaultValue={currentTopic?.description}
                        //focused
                    />

                    <div className="btn_box mt-2">
                        <button
                            type="submit"
                            className="btn_vs_over  btn_vs_over_2v"
                        >
                            {!currentTopic ? 'Create' : 'Update'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </Dialog>
  )
}

export default DialogTopic;