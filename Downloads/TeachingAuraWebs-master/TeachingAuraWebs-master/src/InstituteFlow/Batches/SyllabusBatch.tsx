/* eslint-disable @typescript-eslint/dot-notation */
import React, {useEffect} from 'react';
import {useInjection} from 'inversify-react';
import {SignInDetails} from '../../LoginFlow/SignInDetails';
import {RefreshCourse} from '../../observables/RefreshEvents';
import {useAllCourses} from '../../contexts/AllCoursesContext';
import CourseSubject from './CourseSubject';

const SyllabusBatch = props => {
    const {currentCourse, error, loading, onLoadCourse} =
        useAllCourses();

    const instituteId = useInjection<SignInDetails>('signInDetails').id;

    useEffect(() => {
        onLoadCourse(instituteId, props.courseId);
        const subscription = RefreshCourse.subscribe(() => {
            onLoadCourse(instituteId, props.courseId);
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    if (error !== null) {
        return <p className="m-auto">Something went wrong</p>;
    }

    if (loading) {
        return <p className="m-auto">Loading...</p>;
    }

    if (!currentCourse) {
        return <p className="m-auto">Course is not available.</p>;
    }

    const subjectsData = currentCourse.subjects || [];

    return (
        <div className="flex-grow overflow-y-auto mt-2 px-[40px]">
            <div
                className="sylabs_text_cont"
                style={{textAlign: 'center'}}
            >
                <h4> {currentCourse['name']}</h4>
                <p>{currentCourse['description']}</p>
            </div>
            {subjectsData.map((subject, index) => (
                <CourseSubject key={subject.id} subject={subject}/>
            ))}
        </div>
    );
};

export default SyllabusBatch;
