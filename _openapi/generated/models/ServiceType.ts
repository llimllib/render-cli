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


/**
 * 
 * @export
 */
export const ServiceType = {
    STATIC_SITE: 'static_site',
    WEB_SERVICE: 'web_service',
    PRIVATE_SERVICE: 'private_service',
    BACKGROUND_WORKER: 'background_worker',
    CRON_JOB: 'cron_job',
    UNKNOWN_DEFAULT_OPEN_API: '11184809'
} as const;
export type ServiceType = typeof ServiceType[keyof typeof ServiceType];


export function ServiceTypeFromJSON(json: any): ServiceType {
    return ServiceTypeFromJSONTyped(json, false);
}

export function ServiceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceType {
    return json as ServiceType;
}

export function ServiceTypeToJSON(value?: ServiceType | null): any {
    return value as any;
}
