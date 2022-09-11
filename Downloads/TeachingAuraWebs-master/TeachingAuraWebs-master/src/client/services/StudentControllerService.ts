/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDetails } from '../models/BatchDetails';
import type { ContinuationObject } from '../models/ContinuationObject';
import type { CourseAndBatchDetails } from '../models/CourseAndBatchDetails';
import type { InstituteDetails } from '../models/InstituteDetails';
import type { NoticeDetails } from '../models/NoticeDetails';
import type { ScheduleDetails } from '../models/ScheduleDetails';
import type { StudentDetails } from '../models/StudentDetails';
import type { StudentInviteDetails } from '../models/StudentInviteDetails';
import type { TestDetails } from '../models/TestDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StudentControllerService {

    /**
     * @param studentId
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static getById(
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param requestBody
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static updateStudent(
        studentId: string,
        requestBody: StudentDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/student/{studentId}',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param studentId
     * @param completion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteStudent(
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/student/{studentId}',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static getStudents(
        completion?: ContinuationObject,
    ): CancelablePromise<Array<StudentDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/students',
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param requestBody
     * @param completion
     * @returns StudentDetails OK
     * @throws ApiError
     */
    public static createStudent(
        requestBody: StudentDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/students',
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param studentId
     * @param instituteId
     * @param completion
     * @returns StudentInviteDetails OK
     * @throws ApiError
     */
    public static rejectInstituteInvite1(
        studentId: string,
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentInviteDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/student/{studentId}/institute/{instituteId}/reject',
            path: {
                'studentId': studentId,
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param instituteId
     * @param completion
     * @returns StudentInviteDetails OK
     * @throws ApiError
     */
    public static acceptInstituteInvite1(
        studentId: string,
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<StudentInviteDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/student/{studentId}/institute/{instituteId}/accept',
            path: {
                'studentId': studentId,
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param completion
     * @returns TestDetails OK
     * @throws ApiError
     */
    public static getStudentTests(
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TestDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/test',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param startTime
     * @param endTime
     * @param completion
     * @returns ScheduleDetails OK
     * @throws ApiError
     */
    public static getStudentScheduleForTimeRange(
        studentId: string,
        startTime: number,
        endTime: number,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<ScheduleDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/schedule',
            path: {
                'studentId': studentId,
            },
            query: {
                'startTime': startTime,
                'endTime': endTime,
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param completion
     * @returns StudentInviteDetails OK
     * @throws ApiError
     */
    public static getStudentInvites(
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<StudentInviteDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/invites',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param completion
     * @returns InstituteDetails OK
     * @throws ApiError
     */
    public static getStudentInstitutes(
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<InstituteDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/institutes',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param instituteId
     * @param completion
     * @returns ScheduleDetails OK
     * @throws ApiError
     */
    public static getStudentSchedules(
        studentId: string,
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<ScheduleDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/institute/{instituteId}/schedule',
            path: {
                'studentId': studentId,
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param completion
     * @returns CourseAndBatchDetails OK
     * @throws ApiError
     */
    public static getStudentEnrolledCourses(
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<CourseAndBatchDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/courses',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param completion
     * @returns BatchDetails OK
     * @throws ApiError
     */
    public static getStudentEnrolledBatches(
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<BatchDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/batches',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param studentId
     * @param completion
     * @returns NoticeDetails OK
     * @throws ApiError
     */
    public static getStudentAnnouncements(
        studentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<NoticeDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/announcements',
            path: {
                'studentId': studentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

}