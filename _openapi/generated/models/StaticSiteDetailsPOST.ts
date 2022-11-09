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
import type { Header } from './Header.ts';
import {
    HeaderFromJSON,
    HeaderFromJSONTyped,
    HeaderToJSON,
} from './Header.ts';
import type { Route } from './Route.ts';
import {
    RouteFromJSON,
    RouteFromJSONTyped,
    RouteToJSON,
} from './Route.ts';

/**
 * 
 * @export
 * @interface StaticSiteDetailsPOST
 */
export interface StaticSiteDetailsPOST {
    /**
     * 
     * @type {string}
     * @memberof StaticSiteDetailsPOST
     */
    buildCommand?: string;
    /**
     * 
     * @type {Array<Header>}
     * @memberof StaticSiteDetailsPOST
     */
    headers?: Array<Header>;
    /**
     * Defaults to "public"
     * @type {string}
     * @memberof StaticSiteDetailsPOST
     */
    publishPath?: string;
    /**
     * Defaults to "no"
     * @type {string}
     * @memberof StaticSiteDetailsPOST
     */
    pullRequestPreviewsEnabled?: StaticSiteDetailsPOSTPullRequestPreviewsEnabledEnum;
    /**
     * 
     * @type {Array<Route>}
     * @memberof StaticSiteDetailsPOST
     */
    routes?: Array<Route>;
}


/**
 * @export
 */
export const StaticSiteDetailsPOSTPullRequestPreviewsEnabledEnum = {
    TRUE: 'true',
    FALSE: 'false',
    UNKNOWN_DEFAULT_OPEN_API: '11184809'
} as const;
export type StaticSiteDetailsPOSTPullRequestPreviewsEnabledEnum = typeof StaticSiteDetailsPOSTPullRequestPreviewsEnabledEnum[keyof typeof StaticSiteDetailsPOSTPullRequestPreviewsEnabledEnum];


/**
 * Check if a given object implements the StaticSiteDetailsPOST interface.
 */
export function instanceOfStaticSiteDetailsPOST(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StaticSiteDetailsPOSTFromJSON(json: any): StaticSiteDetailsPOST {
    return StaticSiteDetailsPOSTFromJSONTyped(json, false);
}

export function StaticSiteDetailsPOSTFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaticSiteDetailsPOST {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buildCommand': !exists(json, 'buildCommand') ? undefined : json['buildCommand'],
        'headers': !exists(json, 'headers') ? undefined : ((json['headers'] as Array<any>).map(HeaderFromJSON)),
        'publishPath': !exists(json, 'publishPath') ? undefined : json['publishPath'],
        'pullRequestPreviewsEnabled': !exists(json, 'pullRequestPreviewsEnabled') ? undefined : json['pullRequestPreviewsEnabled'],
        'routes': !exists(json, 'routes') ? undefined : ((json['routes'] as Array<any>).map(RouteFromJSON)),
    };
}

export function StaticSiteDetailsPOSTToJSON(value?: StaticSiteDetailsPOST | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buildCommand': value.buildCommand,
        'headers': value.headers === undefined ? undefined : ((value.headers as Array<any>).map(HeaderToJSON)),
        'publishPath': value.publishPath,
        'pullRequestPreviewsEnabled': value.pullRequestPreviewsEnabled,
        'routes': value.routes === undefined ? undefined : ((value.routes as Array<any>).map(RouteToJSON)),
    };
}
