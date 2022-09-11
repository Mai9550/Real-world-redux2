/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentDetails } from './AttachmentDetails';

export type TestAttachmentDetails = {
    id?: string;
    attachments?: Array<AttachmentDetails>;
    typeOfTestAttachment?: TestAttachmentDetails.typeOfTestAttachment;
};

export namespace TestAttachmentDetails {

    export enum typeOfTestAttachment {
        SUBMISSION = 'SUBMISSION',
        QUESTIONPAPER = 'QUESTIONPAPER',
    }


}
