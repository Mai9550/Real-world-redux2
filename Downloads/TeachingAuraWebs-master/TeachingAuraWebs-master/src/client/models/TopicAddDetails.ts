/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TopicFileDetails } from './TopicFileDetails';
import type { TopicQuizDetails } from './TopicQuizDetails';
import type { TopicTextDetails } from './TopicTextDetails';

export type TopicAddDetails = {
    topicQuizDetails?: Array<TopicQuizDetails>;
    topicTextDetails?: Array<TopicTextDetails>;
    topicFileDetails?: Array<TopicFileDetails>;
};
