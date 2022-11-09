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
 * @interface DeployCommit
 */
export interface DeployCommit {
    /**
     * 
     * @type {string}
     * @memberof DeployCommit
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DeployCommit
     */
    message?: string;
    /**
     * 
     * @type {Date}
     * @memberof DeployCommit
     */
    createdAt?: Date;
}

/**
 * Check if a given object implements the DeployCommit interface.
 */
export function instanceOfDeployCommit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeployCommitFromJSON(json: any): DeployCommit {
    return DeployCommitFromJSONTyped(json, false);
}

export function DeployCommitFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeployCommit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function DeployCommitToJSON(value?: DeployCommit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'message': value.message,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}
