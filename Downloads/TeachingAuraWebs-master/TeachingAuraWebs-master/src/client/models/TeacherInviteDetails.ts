/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InstituteDetails } from './InstituteDetails';
import type { TeacherDetails } from './TeacherDetails';

export type TeacherInviteDetails = {
    institute?: InstituteDetails;
    teacher?: TeacherDetails;
    status?: TeacherInviteDetails.status;
};

export namespace TeacherInviteDetails {

    export enum status {
        ACCEPT = 'ACCEPT',
        REJECT = 'REJECT',
        INVITED = 'INVITED',
    }


}
