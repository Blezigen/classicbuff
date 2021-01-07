/* tslint:disable */
/* eslint-disable */
/**
 * Public REST api for dota2classic
 * All stuff
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface StopServerDto
 */
export interface StopServerDto {
  /**
   *
   * @type {string}
   * @memberof StopServerDto
   */
  url: string;
}

export function StopServerDtoFromJSON(json: any): StopServerDto {
  return StopServerDtoFromJSONTyped(json, false);
}

export function StopServerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StopServerDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    url: json["url"]
  };
}

export function StopServerDtoToJSON(value?: StopServerDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    url: value.url
  };
}