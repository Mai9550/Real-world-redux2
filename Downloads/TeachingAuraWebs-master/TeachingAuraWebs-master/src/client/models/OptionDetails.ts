/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OptionDetails = {
    option?: string;
    optionType?: OptionDetails.optionType;
    answer?: boolean;
};

export namespace OptionDetails {

    export enum optionType {
        BASE64 = 'BASE64',
        TEXT = 'TEXT',
    }


}
