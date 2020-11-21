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

import * as runtime from "../runtime";
import useSWR, { ConfigInterface } from "swr";

import {
  EventAdminDto,
  EventAdminDtoFromJSON,
  EventAdminDtoToJSON,
  GameServerDto,
  GameServerDtoFromJSON,
  GameServerDtoToJSON,
  GameSessionDto,
  GameSessionDtoFromJSON,
  GameSessionDtoToJSON,
  UpdateRolesDto,
  UpdateRolesDtoFromJSON,
  UpdateRolesDtoToJSON,
  UserRoleSummaryDto,
  UserRoleSummaryDtoFromJSON,
  UserRoleSummaryDtoToJSON
} from "../models";

export interface AdminUserControllerUpdateRoleRequest {
  updateRolesDto: UpdateRolesDto;
}

export interface ServerControllerDebugEventRequest {
  eventAdminDto: EventAdminDto;
}

export interface ServerControllerStopServerRequest {
  body: string;
}

/**
 *
 */
export class AdminApi extends runtime.BaseAPI {
  /**
   */
  private async adminUserControllerListRolesRaw(): Promise<runtime.ApiResponse<Array<UserRoleSummaryDto>>> {
    this.adminUserControllerListRolesValidation();
    const context = this.adminUserControllerListRolesContext();
    const response = await this.request(context);

    return new runtime.JSONApiResponse(response, jsonValue => jsonValue.map(UserRoleSummaryDtoFromJSON));
  }

  /**
   */
  private adminUserControllerListRolesValidation() {}

  /**
   */
  adminUserControllerListRolesContext(): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    return {
      path: `/v1/admin/users/roles`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }

  /**
   */
  adminUserControllerListRoles = async (): Promise<Array<UserRoleSummaryDto>> => {
    const response = await this.adminUserControllerListRolesRaw();
    return await response.value();
  };

  useAdminUserControllerListRoles(config?: ConfigInterface<Array<UserRoleSummaryDto>, Error>) {
    let valid = true;

    const context = this.adminUserControllerListRolesContext();
    return useSWR(JSON.stringify(context), valid ? () => this.adminUserControllerListRoles() : undefined, config);
  }

  /**
   */
  private async adminUserControllerUpdateRoleRaw(
    requestParameters: AdminUserControllerUpdateRoleRequest
  ): Promise<runtime.ApiResponse<void>> {
    this.adminUserControllerUpdateRoleValidation(requestParameters);
    const context = this.adminUserControllerUpdateRoleContext(requestParameters);
    const response = await this.request(context);

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  private adminUserControllerUpdateRoleValidation(requestParameters: AdminUserControllerUpdateRoleRequest) {
    if (requestParameters.updateRolesDto === null || requestParameters.updateRolesDto === undefined) {
      throw new runtime.RequiredError(
        "updateRolesDto",
        "Required parameter requestParameters.updateRolesDto was null or undefined when calling adminUserControllerUpdateRole."
      );
    }
  }

  /**
   */
  adminUserControllerUpdateRoleContext(requestParameters: AdminUserControllerUpdateRoleRequest): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    return {
      path: `/v1/admin/users/update_role`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: UpdateRolesDtoToJSON(requestParameters.updateRolesDto)
    };
  }

  /**
   */
  adminUserControllerUpdateRole = async (updateRolesDto: UpdateRolesDto): Promise<void> => {
    await this.adminUserControllerUpdateRoleRaw({ updateRolesDto: updateRolesDto });
  };

  /**
   */
  private async serverControllerDebugEventRaw(
    requestParameters: ServerControllerDebugEventRequest
  ): Promise<runtime.ApiResponse<void>> {
    this.serverControllerDebugEventValidation(requestParameters);
    const context = this.serverControllerDebugEventContext(requestParameters);
    const response = await this.request(context);

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  private serverControllerDebugEventValidation(requestParameters: ServerControllerDebugEventRequest) {
    if (requestParameters.eventAdminDto === null || requestParameters.eventAdminDto === undefined) {
      throw new runtime.RequiredError(
        "eventAdminDto",
        "Required parameter requestParameters.eventAdminDto was null or undefined when calling serverControllerDebugEvent."
      );
    }
  }

  /**
   */
  serverControllerDebugEventContext(requestParameters: ServerControllerDebugEventRequest): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    return {
      path: `/v1/servers/debug_event`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: EventAdminDtoToJSON(requestParameters.eventAdminDto)
    };
  }

  /**
   */
  serverControllerDebugEvent = async (eventAdminDto: EventAdminDto): Promise<void> => {
    await this.serverControllerDebugEventRaw({ eventAdminDto: eventAdminDto });
  };

  /**
   */
  private async serverControllerLiveSessionsRaw(): Promise<runtime.ApiResponse<Array<GameSessionDto>>> {
    this.serverControllerLiveSessionsValidation();
    const context = this.serverControllerLiveSessionsContext();
    const response = await this.request(context);

    return new runtime.JSONApiResponse(response, jsonValue => jsonValue.map(GameSessionDtoFromJSON));
  }

  /**
   */
  private serverControllerLiveSessionsValidation() {}

  /**
   */
  serverControllerLiveSessionsContext(): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    return {
      path: `/v1/servers/live_sessions`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }

  /**
   */
  serverControllerLiveSessions = async (): Promise<Array<GameSessionDto>> => {
    const response = await this.serverControllerLiveSessionsRaw();
    return await response.value();
  };

  useServerControllerLiveSessions(config?: ConfigInterface<Array<GameSessionDto>, Error>) {
    let valid = true;

    const context = this.serverControllerLiveSessionsContext();
    return useSWR(JSON.stringify(context), valid ? () => this.serverControllerLiveSessions() : undefined, config);
  }

  /**
   */
  private async serverControllerServerPoolRaw(): Promise<runtime.ApiResponse<Array<GameServerDto>>> {
    this.serverControllerServerPoolValidation();
    const context = this.serverControllerServerPoolContext();
    const response = await this.request(context);

    return new runtime.JSONApiResponse(response, jsonValue => jsonValue.map(GameServerDtoFromJSON));
  }

  /**
   */
  private serverControllerServerPoolValidation() {}

  /**
   */
  serverControllerServerPoolContext(): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    return {
      path: `/v1/servers/server_pool`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    };
  }

  /**
   */
  serverControllerServerPool = async (): Promise<Array<GameServerDto>> => {
    const response = await this.serverControllerServerPoolRaw();
    return await response.value();
  };

  useServerControllerServerPool(config?: ConfigInterface<Array<GameServerDto>, Error>) {
    let valid = true;

    const context = this.serverControllerServerPoolContext();
    return useSWR(JSON.stringify(context), valid ? () => this.serverControllerServerPool() : undefined, config);
  }

  /**
   */
  private async serverControllerStopServerRaw(
    requestParameters: ServerControllerStopServerRequest
  ): Promise<runtime.ApiResponse<void>> {
    this.serverControllerStopServerValidation(requestParameters);
    const context = this.serverControllerStopServerContext(requestParameters);
    const response = await this.request(context);

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  private serverControllerStopServerValidation(requestParameters: ServerControllerStopServerRequest) {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        "body",
        "Required parameter requestParameters.body was null or undefined when calling serverControllerStopServer."
      );
    }
  }

  /**
   */
  serverControllerStopServerContext(requestParameters: ServerControllerStopServerRequest): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = typeof token === "function" ? token("bearer", []) : token;

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    return {
      path: `/v1/servers/stop_server`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    };
  }

  /**
   */
  serverControllerStopServer = async (body: string): Promise<void> => {
    await this.serverControllerStopServerRaw({ body: body });
  };
}
