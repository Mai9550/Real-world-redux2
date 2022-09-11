/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubmissionDetails } from './SubmissionDetails';
import type { TestAttachmentDetails } from './TestAttachmentDetails';

export type TestDetails = {
    id: string;
    name: string;
    description: string;
    startTime: number;
    endTime: number;
    batchId: string;
    testAttachmentDetails?: Array<TestAttachmentDetails>;
    submissions?: Array<SubmissionDetails>;
};
