/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TestAttachmentDetails } from './TestAttachmentDetails';

export type SubmissionDetails = {
    id: string;
    submissionTime: number;
    studentId: string;
    studentName: string;
    marks?: number;
    testAttachmentDetails: Array<TestAttachmentDetails>;
};
