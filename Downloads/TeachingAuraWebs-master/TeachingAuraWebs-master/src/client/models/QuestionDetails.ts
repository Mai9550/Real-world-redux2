/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OptionDetails } from './OptionDetails';

export type QuestionDetails = {
    question?: string;
    options?: Array<OptionDetails>;
    questionFormat?: QuestionDetails.questionFormat;
    questionType?: QuestionDetails.questionType;
    questionMarks?: number;
};

export namespace QuestionDetails {

    export enum questionFormat {
        BASE64 = 'BASE64',
        TEXT = 'TEXT',
    }

    export enum questionType {
        SUBJECTIVE = 'SUBJECTIVE',
        OBJECTIVE = 'OBJECTIVE',
    }


}
