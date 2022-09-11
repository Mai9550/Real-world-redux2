/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AttachmentDetails = {
    id: string;
    name: string;
    url?: string;
    attachmentType: AttachmentDetails.attachmentType;
};

export namespace AttachmentDetails {

    export enum attachmentType {
        IMAGE = 'IMAGE',
        PDF = 'PDF',
        VIDEO = 'VIDEO',
    }


}
