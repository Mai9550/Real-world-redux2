/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentDetails } from './AttachmentDetails';
import type { BatchDetails } from './BatchDetails';

export type NoticeDetails = {
    id?: string;
    content?: string;
    attachmentDetailsList?: Array<AttachmentDetails>;
    batches?: Array<BatchDetails>;
    createdAt?: number;
};
