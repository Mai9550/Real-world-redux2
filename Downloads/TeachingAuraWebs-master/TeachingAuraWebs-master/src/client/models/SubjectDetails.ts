/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TopicDetails } from './TopicDetails';

export type SubjectDetails = {
    id?: string;
    name?: string;
    topics?: Array<TopicDetails>;
};
