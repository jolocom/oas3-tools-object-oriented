# oas3-tools-object-oriented

'oas3-tools-object-oriented' helps to reach 'API-First' approach by using ['oas3-tools'][1]
and the client app implementing OOP paradigm.

It will wire up 'OpenAPI Specification' declaration with controllers classes methods, since ['oas3-tools'][1]
supports only [functions definitions][2], which makes impossible to work with classes and its methods.
To resolve this problem - this middleware was implemented - it will create and configure ['oas3-tools'][1] application
based on provided collection of controllers instances.

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
to install 'oas3-tools-object-oriented'.

Npm:
```bash
npm install oas3-tools-object-oriented
```

Yarn:
```bash
yarn add oas3-tools-object-oriented
```

## Usage

1. Implement ['Oas3ToolsObjectOrientedConfig'][3] interface to configure ['oas3-tools'][1] if necessary,
and path to the oas3 declaration file:

```javascript
import { Oas3ToolsObjectOrientedOptions } from '@jolocom/oas3-tools-object-oriented'

const config: Oas3ToolsObjectOrientedConfig = {
  oas3DeclarationFilePath: './api/openapi.yaml',
  oas3AppOptions: {
    openApiValidator: {
      apiSpec: './api/openapi.yaml',
      // ...other validator configuration options
    },
    logging: {
      errorLimit: 400,
      // ...other logging configuration options
    },
    swaggerUI: {
      swaggerUIPath: '/docs',
      // ...other swaggerUI configuration options
    },
  }
}
```

2. Use middleware: 

```javascript
import { oas3ToolsObjectOriented } from '@jolocom/oas3-tools-object-oriented'

const config: Oas3ToolsObjectOrientedOptions = {
  // ...configuration from the step #1
}

// ...app initialization

const controllers: object[] = [/** Controllers instances collection */]

app.use(oas3ToolsObjectOriented(controllers, config))

// ...end of middlares and app initialization process
```

## License
[Apache-2.0][4]

[1]: https://github.com/bug-hunters/oas3-tools
[2]: https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md#swaggerrouteroptions
[3]: https://github.com/jolocom/oas3-tools-object-oriented/blob/main/src/interfaces.ts#L9-L13
[4]: https://www.apache.org/licenses/LICENSE-2.0.txt
