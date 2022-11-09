/* tslint:disable */
/* eslint-disable */
/**
 * Render Public API
 * Manage everything about your Render services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@render.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime.ts';
/**
 * 
 * @export
 * @interface NativeEnvironmentDetails
 */
export interface NativeEnvironmentDetails {
    /**
     * 
     * @type {string}
     * @memberof NativeEnvironmentDetails
     */
    buildCommand: string;
    /**
     * 
     * @type {string}
     * @memberof NativeEnvironmentDetails
     */
    startCommand: string;
}

/**
 * Check if a given object implements the NativeEnvironmentDetails interface.
 */
export function instanceOfNativeEnvironmentDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "buildCommand" in value;
    isInstance = isInstance && "startCommand" in value;

    return isInstance;
}

export function NativeEnvironmentDetailsFromJSON(json: any): NativeEnvironmentDetails {
    return NativeEnvironmentDetailsFromJSONTyped(json, false);
}

export function NativeEnvironmentDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NativeEnvironmentDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buildCommand': json['buildCommand'],
        'startCommand': json['startCommand'],
    };
}

export function NativeEnvironmentDetailsToJSON(value?: NativeEnvironmentDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buildCommand': value.buildCommand,
        'startCommand': value.startCommand,
    };
}
