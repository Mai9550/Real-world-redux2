/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContinuationObject } from '../models/ContinuationObject';
import type { SubmissionDetails } from '../models/SubmissionDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubmissionControllerService {

    /**
     * @param studentId
     * @param testId
     * @param requestBody
     * @param completion
     * @returns SubmissionDetails OK
     * @throws ApiError
     */
    public static addSubmission(
        studentId: string,
        testId: string,
        requestBody: SubmissionDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<SubmissionDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/student/{studentId}/test/{testId}/submission',
            path: {
                'studentId': studentId,
                'testId': testId,
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
     * @param testId
     * @param submissionId
     * @param completion
     * @returns SubmissionDetails OK
     * @throws ApiError
     */
    public static getSubmission(
        studentId: string,
        testId: string,
        submissionId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<SubmissionDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/student/{studentId}/test/{testId}/submission/{submissionId}',
            path: {
                'studentId': studentId,
                'testId': testId,
                'submissionId': submissionId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param testId
     * @param completion
     * @returns SubmissionDetails OK
     * @throws ApiError
     */
    public static getAllSubmissions(
        instituteId: string,
        testId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<SubmissionDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/test/{testId}/submission',
            path: {
                'instituteId': instituteId,
                'testId': testId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

}