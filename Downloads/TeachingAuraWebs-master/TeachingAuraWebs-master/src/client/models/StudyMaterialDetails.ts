/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentDetails } from './AttachmentDetails';

export type StudyMaterialDetails = {
    id: string;
    name?: string;
    attachmentDetailsList?: Array<AttachmentDetails>;
    subjectId: string;
};
