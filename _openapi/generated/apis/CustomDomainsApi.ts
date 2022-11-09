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


import * as runtime from '../runtime.ts';
import type {
  CreateCustomDomainRequest,
  CustomDomain,
  GetCustomDomains200ResponseInner,
  ModelError,
} from '../models/index.ts';
import {
    CreateCustomDomainRequestFromJSON,
    CreateCustomDomainRequestToJSON,
    CustomDomainFromJSON,
    CustomDomainToJSON,
    GetCustomDomains200ResponseInnerFromJSON,
    GetCustomDomains200ResponseInnerToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index.ts';

export interface CreateCustomDomainOperationRequest {
    serviceId: string;
    createCustomDomainRequest: CreateCustomDomainRequest;
}

export interface DeleteCustomDomainRequest {
    serviceId: string;
    customDomainIdOrName: string;
}

export interface GetCustomDomainRequest {
    serviceId: string;
    customDomainIdOrName: string;
}

export interface GetCustomDomainsRequest {
    serviceId: string;
    cursor?: string;
    limit?: number;
    name?: Array<string>;
    domainType?: GetCustomDomainsDomainTypeEnum;
    verificationStatus?: GetCustomDomainsVerificationStatusEnum;
    createdBefore?: Date;
    createdAfter?: Date;
}

export interface RefreshCustomDomainRequest {
    serviceId: string;
    customDomainIdOrName: string;
}

/**
 * 
 */
export class CustomDomainsApi extends runtime.BaseAPI {

    /**
     * Add custom domain
     */
    async createCustomDomainRaw(requestParameters: CreateCustomDomainOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CustomDomain>>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling createCustomDomain.');
        }

        if (requestParameters.createCustomDomainRequest === null || requestParameters.createCustomDomainRequest === undefined) {
            throw new runtime.RequiredError('createCustomDomainRequest','Required parameter requestParameters.createCustomDomainRequest was null or undefined when calling createCustomDomain.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/custom-domains`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCustomDomainRequestToJSON(requestParameters.createCustomDomainRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CustomDomainFromJSON));
    }

    /**
     * Add custom domain
     */
    async createCustomDomain(requestParameters: CreateCustomDomainOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CustomDomain>> {
        const response = await this.createCustomDomainRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete custom domain
     */
    async deleteCustomDomainRaw(requestParameters: DeleteCustomDomainRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling deleteCustomDomain.');
        }

        if (requestParameters.customDomainIdOrName === null || requestParameters.customDomainIdOrName === undefined) {
            throw new runtime.RequiredError('customDomainIdOrName','Required parameter requestParameters.customDomainIdOrName was null or undefined when calling deleteCustomDomain.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/custom-domains/{customDomainIdOrName}`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))).replace(`{${"customDomainIdOrName"}}`, encodeURIComponent(String(requestParameters.customDomainIdOrName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete custom domain
     */
    async deleteCustomDomain(requestParameters: DeleteCustomDomainRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomDomainRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve custom domain
     */
    async getCustomDomainRaw(requestParameters: GetCustomDomainRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomDomain>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling getCustomDomain.');
        }

        if (requestParameters.customDomainIdOrName === null || requestParameters.customDomainIdOrName === undefined) {
            throw new runtime.RequiredError('customDomainIdOrName','Required parameter requestParameters.customDomainIdOrName was null or undefined when calling getCustomDomain.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/custom-domains/{customDomainIdOrName}`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))).replace(`{${"customDomainIdOrName"}}`, encodeURIComponent(String(requestParameters.customDomainIdOrName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomDomainFromJSON(jsonValue));
    }

    /**
     * Retrieve custom domain
     */
    async getCustomDomain(requestParameters: GetCustomDomainRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomDomain> {
        const response = await this.getCustomDomainRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List custom domains
     */
    async getCustomDomainsRaw(requestParameters: GetCustomDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCustomDomains200ResponseInner>>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling getCustomDomains.');
        }

        const queryParameters: any = {};

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.name) {
            queryParameters['name'] = requestParameters.name.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.domainType !== undefined) {
            queryParameters['domainType'] = requestParameters.domainType;
        }

        if (requestParameters.verificationStatus !== undefined) {
            queryParameters['verificationStatus'] = requestParameters.verificationStatus;
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['createdBefore'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['createdAfter'] = (requestParameters.createdAfter as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/custom-domains`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCustomDomains200ResponseInnerFromJSON));
    }

    /**
     * List custom domains
     */
    async getCustomDomains(requestParameters: GetCustomDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCustomDomains200ResponseInner>> {
        const response = await this.getCustomDomainsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify DNS configuration
     */
    async refreshCustomDomainRaw(requestParameters: RefreshCustomDomainRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling refreshCustomDomain.');
        }

        if (requestParameters.customDomainIdOrName === null || requestParameters.customDomainIdOrName === undefined) {
            throw new runtime.RequiredError('customDomainIdOrName','Required parameter requestParameters.customDomainIdOrName was null or undefined when calling refreshCustomDomain.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/custom-domains/{customDomainIdOrName}/verify`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))).replace(`{${"customDomainIdOrName"}}`, encodeURIComponent(String(requestParameters.customDomainIdOrName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Verify DNS configuration
     */
    async refreshCustomDomain(requestParameters: RefreshCustomDomainRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.refreshCustomDomainRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetCustomDomainsDomainTypeEnum = {
    APEX: 'apex',
    SUBDOMAIN: 'subdomain',
    UNKNOWN_DEFAULT_OPEN_API: '11184809'
} as const;
export type GetCustomDomainsDomainTypeEnum = typeof GetCustomDomainsDomainTypeEnum[keyof typeof GetCustomDomainsDomainTypeEnum];
/**
 * @export
 */
export const GetCustomDomainsVerificationStatusEnum = {
    VERIFIED: 'verified',
    UNVERIFIED: 'unverified',
    UNKNOWN_DEFAULT_OPEN_API: '11184809'
} as const;
export type GetCustomDomainsVerificationStatusEnum = typeof GetCustomDomainsVerificationStatusEnum[keyof typeof GetCustomDomainsVerificationStatusEnum];