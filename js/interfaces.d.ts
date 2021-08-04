import { LoggingOptions } from 'oas3-tools/dist/middleware/logging.options';
import { SwaggerUiOptions } from 'oas3-tools/dist/middleware/swagger.ui.options';
import { OpenApiValidatorOpts } from 'express-openapi-validator/dist/framework/types';
export interface NameToControllerMap {
    [className: string]: object;
}
export interface Oas3ToolsObjectOrientedOptions {
    openApiValidator: OpenApiValidatorOpts;
    logging: LoggingOptions;
    swaggerUI: SwaggerUiOptions;
}
export interface Oas3ToolsObjectOrientedConfig {
    oas3DeclarationFilePath: string;
    oas3AppOptions: Oas3ToolsObjectOrientedOptions;
}
