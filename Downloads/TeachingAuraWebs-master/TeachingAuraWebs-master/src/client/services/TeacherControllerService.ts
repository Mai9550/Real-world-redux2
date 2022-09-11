/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDetails } from '../models/BatchDetails';
import type { ContinuationObject } from '../models/ContinuationObject';
import type { CourseAndBatchDetails } from '../models/CourseAndBatchDetails';
import type { InstituteDetails } from '../models/InstituteDetails';
import type { NoticeDetails } from '../models/NoticeDetails';
import type { ScheduleDetails } from '../models/ScheduleDetails';
import type { TeacherDetails } from '../models/TeacherDetails';
import type { TeacherInviteDetails } from '../models/TeacherInviteDetails';
import type { TestDetails } from '../models/TestDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TeacherControllerService {

    /**
     * @param teacherId
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static getTeacher(
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}',
            path: {
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param requestBody
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static updateTeacher(
        teacherId: string,
        requestBody: TeacherDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/teacher/{teacherId}',
            path: {
                'teacherId': teacherId,
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
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static createTeacher(
        requestBody: TeacherDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teacher',
            query: {
                '$completion': completion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param teacherId
     * @param instituteId
     * @param completion
     * @returns TeacherInviteDetails OK
     * @throws ApiError
     */
    public static rejectInstituteInvite(
        teacherId: string,
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherInviteDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teacher/{teacherId}/institute/{instituteId}/reject',
            path: {
                'teacherId': teacherId,
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param instituteId
     * @param completion
     * @returns TeacherInviteDetails OK
     * @throws ApiError
     */
    public static acceptInstituteInvite(
        teacherId: string,
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TeacherInviteDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teacher/{teacherId}/institute/{instituteId}/accept',
            path: {
                'teacherId': teacherId,
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param completion
     * @returns TeacherDetails OK
     * @throws ApiError
     */
    public static getAllTeachers(
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TeacherDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teachers',
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param completion
     * @returns TestDetails OK
     * @throws ApiError
     */
    public static getTeacherTests(
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TestDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}/test',
            path: {
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param completion
     * @returns ScheduleDetails OK
     * @throws ApiError
     */
    public static getTeacherSchedules(
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<ScheduleDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}/schedule',
            path: {
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param completion
     * @returns TeacherInviteDetails OK
     * @throws ApiError
     */
    public static getTeacherInvites(
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TeacherInviteDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}/invites',
            path: {
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param completion
     * @returns InstituteDetails OK
     * @throws ApiError
     */
    public static getTeacherInstitutes(
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<InstituteDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}/institutes',
            path: {
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param instituteId
     * @param completion
     * @returns ScheduleDetails OK
     * @throws ApiError
     */
    public static getTeacherSchedules1(
        teacherId: string,
        instituteId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<ScheduleDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}/institute/{instituteId}/schedule',
            path: {
                'teacherId': teacherId,
                'instituteId': instituteId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param completion
     * @returns CourseAndBatchDetails OK
     * @throws ApiError
     */
    public static getTeacherCourses(
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<CourseAndBatchDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}/courses',
            path: {
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param completion
     * @returns BatchDetails OK
     * @throws ApiError
     */
    public static getTeacherBatches(
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<BatchDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}/batches',
            path: {
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param teacherId
     * @param completion
     * @returns NoticeDetails OK
     * @throws ApiError
     */
    public static getTeacherAnnouncements(
        teacherId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<NoticeDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/{teacherId}/announcements',
            path: {
                'teacherId': teacherId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

}