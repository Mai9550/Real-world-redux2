/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContinuationObject } from '../models/ContinuationObject';
import type { TestDetails } from '../models/TestDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TestControllerService {

    /**
     * @param instituteId
     * @param batchId
     * @param testId
     * @param completion
     * @returns TestDetails OK
     * @throws ApiError
     */
    public static getTestById(
        instituteId: string,
        batchId: string,
        testId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TestDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/batch/{batchId}/test/{testId}',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
                'testId': testId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

    /**
     * @param instituteId
     * @param batchId
     * @param testId
     * @param requestBody
     * @param completion
     * @returns TestDetails OK
     * @throws ApiError
     */
    public static updateTest(
        instituteId: string,
        batchId: string,
        testId: string,
        requestBody: TestDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<TestDetails> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/institute/{instituteId}/batch/{batchId}/test/{testId}',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
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
     * @param instituteId
     * @param batchId
     * @param testId
     * @param completion
     * @returns TestDetails OK
     * @throws ApiError
     */
    public static deleteTest(
        instituteId: string,
        batchId: string,
        testId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<TestDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/institute/{instituteId}/batch/{batchId}/test/{testId}',
            path: {
                'instituteId': instituteId,
                'batchId': batchId,
                'testId': testId,
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
     * @returns TestDetails OK
     * @throws ApiError
     */
    public static getAllTests(
        instituteId: string,
        batchId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<Array<TestDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/batch/{batchId}/test',
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
     * @returns TestDetails OK
     * @throws ApiError
     */
    public static createTest(
        instituteId: string,
        batchId: string,
        requestBody: TestDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<TestDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/batch/{batchId}/test',
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

}