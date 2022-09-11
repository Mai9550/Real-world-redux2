/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectDetails } from './SubjectDetails';

export type CourseV2Details = {
    id: string;
    name: string;
    description: string;
    subjects?: Array<SubjectDetails>;
    instituteId: string;
    subTitle?: string;
    url?: string;
    type?: CourseV2Details.type;
    fee?: number;
    startDate?: number;
    endDate?: number;
};

export namespace CourseV2Details {

    export enum type {
        ONLINE = 'ONLINE',
        OFFLINE = 'OFFLINE',
    }


}
