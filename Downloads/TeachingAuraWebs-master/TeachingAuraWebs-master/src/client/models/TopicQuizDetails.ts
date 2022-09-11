/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionDetails } from './QuestionDetails';

export type TopicQuizDetails = {
    id?: string;
    orderIndex?: number;
    questions?: Array<QuestionDetails>;
};
