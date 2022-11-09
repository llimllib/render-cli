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
import type { CustomDomainServer } from './CustomDomainServer.ts';
import {
    CustomDomainServerFromJSON,
    CustomDomainServerFromJSONTyped,
    CustomDomainServerToJSON,
} from './CustomDomainServer.ts';

/**
 * 
 * @export
 * @interface CustomDomain
 */
export interface CustomDomain {
    /**
     * 
     * @type {string}
     * @memberof CustomDomain
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDomain
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDomain
     */
    domainType: CustomDomainDomainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomDomain
     */
    publicSuffix: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDomain
     */
    redirectForName: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDomain
     */
    verificationStatus: CustomDomainVerificationStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof CustomDomain
     */
    createdAt: Date;
    /**
     * 
     * @type {CustomDomainServer}
     * @memberof CustomDomain
     */
    server?: CustomDomainServer;
}


/**
 * @export
 */
export const CustomDomainDomainTypeEnum = {
    APEX: 'apex',
    SUBDOMAIN: 'subdomain',
    UNKNOWN_DEFAULT_OPEN_API: '11184809'
} as const;
export type CustomDomainDomainTypeEnum = typeof CustomDomainDomainTypeEnum[keyof typeof CustomDomainDomainTypeEnum];

/**
 * @export
 */
export const CustomDomainVerificationStatusEnum = {
    VERIFIED: 'verified',
    UNVERIFIED: 'unverified',
    UNKNOWN_DEFAULT_OPEN_API: '11184809'
} as const;
export type CustomDomainVerificationStatusEnum = typeof CustomDomainVerificationStatusEnum[keyof typeof CustomDomainVerificationStatusEnum];


/**
 * Check if a given object implements the CustomDomain interface.
 */
export function instanceOfCustomDomain(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "domainType" in value;
    isInstance = isInstance && "publicSuffix" in value;
    isInstance = isInstance && "redirectForName" in value;
    isInstance = isInstance && "verificationStatus" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function CustomDomainFromJSON(json: any): CustomDomain {
    return CustomDomainFromJSONTyped(json, false);
}

export function CustomDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'domainType': json['domainType'],
        'publicSuffix': json['publicSuffix'],
        'redirectForName': json['redirectForName'],
        'verificationStatus': json['verificationStatus'],
        'createdAt': (new Date(json['createdAt'])),
        'server': !exists(json, 'server') ? undefined : CustomDomainServerFromJSON(json['server']),
    };
}

export function CustomDomainToJSON(value?: CustomDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'domainType': value.domainType,
        'publicSuffix': value.publicSuffix,
        'redirectForName': value.redirectForName,
        'verificationStatus': value.verificationStatus,
        'createdAt': (value.createdAt.toISOString()),
        'server': CustomDomainServerToJSON(value.server),
    };
}
