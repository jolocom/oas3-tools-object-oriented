import { NameToControllerMap, Oas3ToolsObjectOrientedConfig } from './interfaces'
import * as oas3Tools from 'oas3-tools'

const createMapItemKey = (controller: Record<string, any>, methodName: string) => {
  return `${controller.constructor.name}_${methodName}`
}

const createOas3ToControllerMethodMap = (controllers: Record<string, any>[]): NameToControllerMap => {
  return controllers.flatMap((controller) => {
    const controllerMethodsNames = Object
      .getOwnPropertyNames(Object.getPrototypeOf(controller))
      .filter(method => method !== 'constructor')

    return controllerMethodsNames.flatMap((methodName: string) => (
      { path: createMapItemKey(controller, methodName), handler: controller[methodName].bind(controller) }
    ))
  }).reduce((maps, mapItem) => ({ ...maps, [mapItem.path]: mapItem.handler }), {})
}

export const oas3ToolsObjectOriented = (controllers: object[], configuration: Oas3ToolsObjectOrientedConfig) => {
  const oas3ToControllerMethodMap = createOas3ToControllerMethodMap(controllers)
  const oas3AppConfig = oas3Tools.expressAppConfig(
    configuration.oas3DeclarationFilePath,
    { routing: {controllers: oas3ToControllerMethodMap}, ...configuration.oas3AppOptions }
  )

  return oas3AppConfig.getApp()
}
