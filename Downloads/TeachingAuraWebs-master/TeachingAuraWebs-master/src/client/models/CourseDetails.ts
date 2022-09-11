/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectDetails } from './SubjectDetails';

export type CourseDetails = {
    id: string;
    name: string;
    description: string;
    subjects?: Array<SubjectDetails>;
    instituteId: string;
};
