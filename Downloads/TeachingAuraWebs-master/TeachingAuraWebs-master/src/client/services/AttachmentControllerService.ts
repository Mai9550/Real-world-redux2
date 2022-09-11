/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentDetails } from '../models/AttachmentDetails';
import type { ContinuationObject } from '../models/ContinuationObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AttachmentControllerService {

    /**
     * @param instituteId
     * @param requestBody
     * @param completion
     * @returns AttachmentDetails OK
     * @throws ApiError
     */
    public static generateSignedUrlToUpload(
        instituteId: string,
        requestBody: AttachmentDetails,
        completion?: ContinuationObject,
    ): CancelablePromise<AttachmentDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/institute/{instituteId}/attachment/upload-url',
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
     * @param attachmentId
     * @param completion
     * @returns AttachmentDetails OK
     * @throws ApiError
     */
    public static getAttachmentById(
        instituteId: string,
        attachmentId: string,
        completion?: ContinuationObject,
    ): CancelablePromise<AttachmentDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/institute/{instituteId}/attachment/{attachmentId}',
            path: {
                'instituteId': instituteId,
                'attachmentId': attachmentId,
            },
            query: {
                '$completion': completion,
            },
        });
    }

}