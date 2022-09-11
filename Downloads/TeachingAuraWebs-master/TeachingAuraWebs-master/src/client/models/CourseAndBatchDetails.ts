/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BatchDetails } from './BatchDetails';
import type { SubjectDetails } from './SubjectDetails';

export type CourseAndBatchDetails = {
    id?: string;
    name?: string;
    subjects?: Array<SubjectDetails>;
    instituteId?: string;
    batchDetails?: BatchDetails;
    courseDescription?: string;
};
