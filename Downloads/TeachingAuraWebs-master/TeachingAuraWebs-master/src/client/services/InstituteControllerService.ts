/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnouncementDetails } from '../models/AnnouncementDetails';
import type { BatchDetails } from '../models/BatchDetails';
import type { ContinuationObject } from '../models/ContinuationObject';
import type { CourseAndBatchDetails } from '../models/CourseAndBatchDetails';
import type { CourseDetails } from '../models/CourseDetails';
import type { CourseV2Details } from '../models/CourseV2Details';
import type { InstituteDetails } from '../models/InstituteDetails';
import type { NoticeDetails } from '../models/NoticeDetails';
import type { Overview } from '../models/Overview';
import type { ScheduleDetails } from '../models/ScheduleDetails';
import type { StudentDetails } from '../models/StudentDetails';
import type { StudentInviteDetails } from '../models/StudentInviteDetails';
import type { StudyMaterialDetails } from '../models/StudyMaterialDetails';
import type { TeacherDetails } from '../models/TeacherDetails';
import type { TeacherInviteDetails } from '../models/TeacherInviteDetails';
import type { TopicAddDetails } from '../models/TopicAddDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InstituteControllerService {

    /**
     * @param instituteId
     * @param completion
     * @returns InstituteDetails OK
     * @throws ApiError
     */
    public static getInstituteById(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<InstituteDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns InstituteDetails OK
     * @throws ApiError
     */
    public static updateInstitute(
        instituteId: string,
        requestBody: InstituteDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<InstituteDetails> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/institute/{instituteId}',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param courseId
     * @param completion
     * @returns CourseDetails OK
     * @throws ApiError
     */
    public static getCourseById(
        instituteId: string,
        courseId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<CourseDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/course/{courseId}',
            path: {
                'instituteId': instituteId,
                'courseId': courseId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param courseId
     * @param requestBody
     * @param completion
     * @returns CourseDetails OK
     * @throws ApiError
     */
    public static updateCourse(
        instituteId: string,
        courseId: string,
        requestBody: CourseDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<CourseDetails> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/institute/{instituteId}/course/{courseId}',
            path: {
                'instituteId': instituteId,
                'courseId': courseId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @param completion
     * @returns InstituteDetails OK
     * @throws ApiError
     */
    public static createInstitute(
        requestBody: InstituteDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<InstituteDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute',
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns CourseV2Details OK
     * @throws ApiError
     */
    public static createCourseV2(
        instituteId: string,
        requestBody: CourseV2Details,
        completion?: ContinuationObject,
    ): CancelablePromise<CourseV2Details> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/v2/course',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param teacherId
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static addTeacherToInstitute(
        instituteId: string,
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/teacher/{teacherId}',
            path: {
                'instituteId': instituteId,
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param teacherId
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static removeTeacherFromInstitute(
        instituteId: string,
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/institute/{instituteId}/teacher/{teacherId}',
            path: {
                'instituteId': instituteId,
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param studentId
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static addStudentToInstitute(
        instituteId: string,
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/student/{studentId}',
            path: {
                'instituteId': instituteId,
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param studentId
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static removeStudentFromInstitute(
        instituteId: string,
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/institute/{instituteId}/student/{studentId}',
            path: {
                'instituteId': instituteId,
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns ScheduleDetails OK
     * @throws ApiError
     */
    public static getInstituteSchedules(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<ScheduleDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/schedule',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns ScheduleDetails OK
     * @throws ApiError
     */
    public static createSchedule(
        instituteId: string,
        requestBody: ScheduleDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<ScheduleDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/schedule',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns NoticeDetails OK
     * @throws ApiError
     */
    public static getInstituteAnnouncements(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<NoticeDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/notice',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns NoticeDetails OK
     * @throws ApiError
     */
    public static createAnnouncement(
        instituteId: string,
        requestBody: AnnouncementDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<NoticeDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/notice',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static sendInviteToTeacherV2(
        instituteId: string,
        requestBody: TeacherDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/invite/teacher',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param teacherId
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static sendInviteToTeacher(
        instituteId: string,
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/invite/teacher/{teacherId}',
            path: {
                'instituteId': instituteId,
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static sendInviteToStudentV2(
        instituteId: string,
        requestBody: StudentDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/invite/student',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param studentId
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static sendInviteToStudent(
        instituteId: string,
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/invite/student/{studentId}',
            path: {
                'instituteId': instituteId,
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns CourseDetails OK
     * @throws ApiError
     */
    public static getInstituteCourses(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<CourseDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/course',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns CourseDetails OK
     * @throws ApiError
     */
    public static createCourse(
        instituteId: string,
        requestBody: CourseDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<CourseDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/course',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param courseId
     * @param topicId
     * @param completion
     * @returns TopicAddDetails OK
     * @throws ApiError
     */
    public static getTopicDetails(
        instituteId: string,
        courseId: string,
        topicId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TopicAddDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/course/{courseId}/topic/{topicId}',
            path: {
                'instituteId': instituteId,
                'courseId': courseId,
                'topicId': topicId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param courseId
     * @param topicId
     * @param requestBody
     * @param completion
     * @returns TopicAddDetails OK
     * @throws ApiError
     */
    public static addTopicDetails(
        instituteId: string,
        courseId: string,
        topicId: string,
        requestBody: TopicAddDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<TopicAddDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/course/{courseId}/topic/{topicId}',
            path: {
                'instituteId': instituteId,
                'courseId': courseId,
                'topicId': topicId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns BatchDetails OK
     * @throws ApiError
     */
    public static getInstituteBatches(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<BatchDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/batch',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns BatchDetails OK
     * @throws ApiError
     */
    public static createBatch(
        instituteId: string,
        requestBody: BatchDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<BatchDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/batch',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static getAllBatchTeachers(
        instituteId: string,
        batchId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TeacherDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/batch/{batchId}/teachers',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param requestBody
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static addListOfTeachersToBatch(
        instituteId: string,
        batchId: string,
        requestBody: Array<string>,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TeacherDetails>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/batch/{batchId}/teachers',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param teacherId
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static addTeacherToBatch(
        instituteId: string,
        batchId: string,
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/batch/{batchId}/teacher/{teacherId}',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param teacherId
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static removeTeacherFromBatch(
        instituteId: string,
        batchId: string,
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/institute/{instituteId}/batch/{batchId}/teacher/{teacherId}',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param completion
     * @returns StudyMaterialDetails OK
     * @throws ApiError
     */
    public static getBatchStudyMaterials(
        instituteId: string,
        batchId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<StudyMaterialDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/batch/{batchId}/studyMaterial',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param requestBody
     * @param completion
     * @returns StudyMaterialDetails OK
     * @throws ApiError
     */
    public static createCourseStudyMaterial(
        instituteId: string,
        batchId: string,
        requestBody: StudyMaterialDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<StudyMaterialDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/batch/{batchId}/studyMaterial',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static getAllBatchStudents(
        instituteId: string,
        batchId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<StudentDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/batch/{batchId}/students',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param requestBody
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static addListOfStudentsToBatch(
        instituteId: string,
        batchId: string,
        requestBody: Array<string>,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<StudentDetails>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/batch/{batchId}/students',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param instituteId
     * @param studentId
     * @param batchId
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static addStudentToBatch(
        instituteId: string,
        studentId: string,
        batchId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/batch/{batchId}/student/{studentId}',
            path: {
                'instituteId': instituteId,
                'studentId': studentId,
                'batchId': batchId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param studentId
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static removeStudentFromBatch(
        instituteId: string,
        batchId: string,
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/institute/{instituteId}/batch/{batchId}/student/{studentId}',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param completion
     * @returns ScheduleDetails OK
     * @throws ApiError
     */
    public static getAllSchedules(
        completion?: ContinuationObject,
    ): CancelablePromise<Array<ScheduleDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/schedule',
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param scheduleId
     * @param completion
     * @returns ScheduleDetails OK
     * @throws ApiError
     */
    public static getScheduleById(
        scheduleId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<ScheduleDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/schedule/{scheduleId}',
            path: {
                'scheduleId': scheduleId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param meetingId
     * @param completion
     * @returns string OK
     * @throws ApiError
     */
    public static getZoomUrlById(
        meetingId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/schedule/meeting/{meetingId}',
            path: {
                'meetingId': meetingId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param completion
     * @returns InstituteDetails OK
     * @throws ApiError
     */
    public static getAllInstitutes(
        completion?: ContinuationObject,
    ): CancelablePromise<Array<InstituteDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institutes',
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param courseId
     * @param completion
     * @returns CourseV2Details OK
     * @throws ApiError
     */
    public static getCourseByIdV2(
        instituteId: string,
        courseId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<CourseV2Details> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/v2/course/{courseId}',
            path: {
                'instituteId': instituteId,
                'courseId': courseId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static getInstituteTeachers(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TeacherDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/teachers',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns TeacherInviteDetails OK
     * @throws ApiError
     */
    public static getTeacherInvites1(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TeacherInviteDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/teacher/invites',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static getInstituteStudents(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<StudentDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/students',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param studentId
     * @param completion
     * @returns CourseAndBatchDetails OK
     * @throws ApiError
     */
    public static getStudentBatches(
        instituteId: string,
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<CourseAndBatchDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/student/{studentId}/batch',
            path: {
                'instituteId': instituteId,
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns StudentInviteDetails OK
     * @throws ApiError
     */
    public static getStudentInvites1(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<StudentInviteDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/student/invites',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns Overview OK
     * @throws ApiError
     */
    public static getInstituteOverview(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Overview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/overview',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param noticeId
     * @param completion
     * @returns NoticeDetails OK
     * @throws ApiError
     */
    public static getAnnouncementById(
        instituteId: string,
        noticeId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<NoticeDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/notice/{noticeId}',
            path: {
                'instituteId': instituteId,
                'noticeId': noticeId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param courseId
     * @param completion
     * @returns StudyMaterialDetails OK
     * @throws ApiError
     */
    public static getCourseStudyMaterial(
        instituteId: string,
        courseId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<StudyMaterialDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/course/{courseId}/studyMaterial',
            path: {
                'instituteId': instituteId,
                'courseId': courseId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param completion
     * @returns BatchDetails OK
     * @throws ApiError
     */
    public static getBatchById(
        instituteId: string,
        batchId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<BatchDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/batch/{batchId}',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param search
     * @param completion
     * @returns CourseDetails OK
     * @throws ApiError
     */
    public static searchByCourseName(
        search: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<CourseDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/course/search',
            query: {
                'search': search,
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns InstituteDetails OK
     * @throws ApiError
     */
    public static deleteAllInstituteAttachments(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<InstituteDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/institute/{instituteId}/attachment',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param completion
     * @returns InstituteDetails OK
     * @throws ApiError
     */
    public static deleteAllInstituteAnnouncements(
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<InstituteDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/institute/{instituteId}/announcements',
            path: {
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

}