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
 * @interface CreateCustomDomainRequest
 */
export interface CreateCustomDomainRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateCustomDomainRequest
     */
    name: string;
}

/**
 * Check if a given object implements the CreateCustomDomainRequest interface.
 */
export function instanceOfCreateCustomDomainRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CreateCustomDomainRequestFromJSON(json: any): CreateCustomDomainRequest {
    return CreateCustomDomainRequestFromJSONTyped(json, false);
}

export function CreateCustomDomainRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCustomDomainRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function CreateCustomDomainRequestToJSON(value?: CreateCustomDomainRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
