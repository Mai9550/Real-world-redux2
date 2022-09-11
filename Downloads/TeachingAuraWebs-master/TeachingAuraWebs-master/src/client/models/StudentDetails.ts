/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StudentDetails = {
    id: string;
    name: string;
    email?: string;
    contactNumber: string;
    maxEducation?: StudentDetails.maxEducation;
    dateOfBirth?: number;
    profilePicURL?: string;
};

export namespace StudentDetails {

    export enum maxEducation {
        BELOW_MATRICULATE = 'BELOW_MATRICULATE',
        MATRICULATE = 'MATRICULATE',
        HIGHER_SECONDARY = 'HIGHER_SECONDARY',
        UNDERGRADUATE = 'UNDERGRADUATE',
        POST_GRADUATE = 'POST_GRADUATE',
        OTHER = 'OTHER',
    }


}
