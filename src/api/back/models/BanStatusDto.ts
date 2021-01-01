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
 * @interface BanStatusDto
 */
export interface BanStatusDto {
  /**
   *
   * @type {boolean}
   * @memberof BanStatusDto
   */
  isBanned: boolean;
  /**
   *
   * @type {number}
   * @memberof BanStatusDto
   */
  bannedUntil: number;
  /**
   *
   * @type {string}
   * @memberof BanStatusDto
   */
  status: BanStatusDtoStatusEnum;
}

export function BanStatusDtoFromJSON(json: any): BanStatusDto {
  return BanStatusDtoFromJSONTyped(json, false);
}

export function BanStatusDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BanStatusDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    isBanned: json["isBanned"],
    bannedUntil: json["bannedUntil"],
    status: json["status"]
  };
}

export function BanStatusDtoToJSON(value?: BanStatusDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    isBanned: value.isBanned,
    bannedUntil: value.bannedUntil,
    status: value.status
  };
}

/**
 * @export
 * @enum {string}
 */
export enum BanStatusDtoStatusEnum {
  GAMEDECLINE = "GAME_DECLINE",
  LOADFAILURE = "LOAD_FAILURE",
  INFINITEBAN = "INFINITE_BAN"
}
