import {useInjection} from "inversify-react";
import React, {useState} from "react";
import CourseCard from "../../components/CourseCard";
import {useInstitute} from "../../contexts/InstituteContext";
import {useStudent} from "../../contexts/StudentContext";
import {SignInDetails} from "../../LoginFlow/SignInDetails";
import {CourseAndBatchDetails, StudentControllerService, TeacherControllerService} from "../../client";

const CoursesTab = () => {
    const signInDetails = useInjection<SignInDetails>("signInDetails");
    const {selectedInstitute} = useInstitute();

    const [courses, setCourses] = useState<CourseAndBatchDetails[]>([]);
    const fetch = async () => {
        setCourses(await (signInDetails.role === 'student' ? StudentControllerService.getStudentEnrolledCourses(signInDetails.id + '').then(data => data) : TeacherControllerService.getTeacherCourses(signInDetails.id + "").then(data => data)));
    }
    // const { courses, fetchAllCourses } = useStudent();
    React.useEffect(() => {
        fetch()
    }, []);

    const courseList = courses.filter(
        (course) => course["instituteId"] === selectedInstitute.id
    );
    // console.log(courseList);
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
                <h2 className="font-bold">Courses</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 py-3">
                {courseList.map((course) => (
                    <CourseCard
                        key={course.id}
                        name={course.name}
                        desc={course.courseDescription}
                        batch={course.batchDetails}
                        props={course}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursesTab;
