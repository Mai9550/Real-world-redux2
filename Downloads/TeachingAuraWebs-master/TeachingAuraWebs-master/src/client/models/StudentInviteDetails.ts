/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InstituteDetails } from './InstituteDetails';
import type { StudentDetails } from './StudentDetails';

export type StudentInviteDetails = {
    institute?: InstituteDetails;
    student?: StudentDetails;
    status?: StudentInviteDetails.status;
};

export namespace StudentInviteDetails {

    export enum status {
        ACCEPT = 'ACCEPT',
        REJECT = 'REJECT',
        INVITED = 'INVITED',
    }


}
