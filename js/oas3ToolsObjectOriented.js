"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oas3ToolsObjectOriented = void 0;
const oas3Tools = __importStar(require("oas3-tools"));
const createMapItemKey = (controller, methodName) => {
    return `${controller.constructor.name}_${methodName}`;
};
const createOas3ToControllerMethodMap = (controllers) => {
    return controllers.flatMap((controller) => {
        const controllerMethodsNames = Object
            .getOwnPropertyNames(Object.getPrototypeOf(controller))
            .filter(method => method !== 'constructor');
        return controllerMethodsNames.flatMap((methodName) => ({ path: createMapItemKey(controller, methodName), handler: controller[methodName].bind(controller) }));
    }).reduce((maps, mapItem) => ({ ...maps, [mapItem.path]: mapItem.handler }), {});
};
/**
 * The wrapper over 'oas3-tools' which helps to wire up 'OpenAPI Specification' declaration with controllers classes methods
 *
 * @param controllers Collection of the controllers instances
 * @param configuration The 'oas3-tools' configuration
 *
 * @return express.Application Configured by 'oas3-tools' express application
 */
const oas3ToolsObjectOriented = (controllers, configuration) => {
    const oas3ToControllerMethodMap = createOas3ToControllerMethodMap(controllers);
    const oas3AppConfig = oas3Tools.expressAppConfig(configuration.oas3DeclarationFilePath, { ...configuration.oas3AppOptions,
        routing: { ...configuration.oas3AppOptions.routing, controllers: oas3ToControllerMethodMap }
    });
    console.log({ ...configuration.oas3AppOptions,
        routing: { ...configuration.oas3AppOptions.routing, controllers: oas3ToControllerMethodMap }
    });
    return oas3AppConfig.getApp();
};
exports.oas3ToolsObjectOriented = oas3ToolsObjectOriented;
//# sourceMappingURL=oas3ToolsObjectOriented.js.map