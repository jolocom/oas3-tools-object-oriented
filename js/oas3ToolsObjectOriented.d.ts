import { Oas3ToolsObjectOrientedConfig } from './interfaces';
/**
 * The wrapper over 'oas3-tools' which helps to wire up 'OpenAPI Specification' declaration with controllers classes methods
 *
 * @param controllers Collection of the controllers instances
 * @param configuration The 'oas3-tools' configuration
 *
 * @return express.Application Configured by 'oas3-tools' express application
 */
export declare const oas3ToolsObjectOriented: (controllers: object[], configuration: Oas3ToolsObjectOrientedConfig) => import("express").Application;
