# GPUCatalog

This is a simple Graphics Card Catalog web application that allows users to browse and search for variuos Graphics Cards. The front-end of the application is built using Angular, while the backedn API is built with the ExpressJS framework.

## Features

- Browse and search for Graphics Cards
- View detailed information about each Graphics Card
- Filter Graphics Cards by name or brand
- Responsive design that works well on desktop and mobile devices

## Prerequisites

- [Angular CLI](https://angular.io/cli) (version 15.x or higher)
- [Node.js](https://nodejs.org/en) (version 18.x or higher)
- [npm](https://www.npmjs.com/) (version 9.x or higher)

## Installation

1. Clone the repository

```git clone https://github.com/spacedementia/gpu-catalog.git
cd gpu-catalog```

2. Install the dependencies

```npm install```


    "ng": "ng",
    "start": "ng serve --host=127.0.0.1",
    "lint": "eslint .",
    "build": "ng build",
    "build:server": "tsc -p tsconfig.server.json",
    "start:server": "node dist/out-tsc/server/server.js",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "e2e": "ng e2e"

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests with Cypress

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

Run `npm run:cypress-run` to execute the Cypress end-to-end tests. (This starts the development server automatically.)

Run `npm run:cypress-open` to start the interactive Cypress test runner.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Compilar el archivo server.ts: Ejecuta el siguiente comando para compilar el archivo server.ts y generar el archivo JavaScript resultante en la carpeta dist:
bash
Copy code
npm run build:server
En este ejemplo, se utiliza el comando node para ejecutar el archivo server.js transpilado que se encuentra en la carpeta dist/server. Asegúrate de ajustar la ruta del archivo server.js según tu configuración.
Después de seguir estos pasos, tendrás un archivo server.js transpilado en la carpeta dist/out-tsc/server (o directamente en dist, si así lo deseas). Puedes ajustar las rutas de archivo en las propiedades "include" y "outDir" según sea necesario para adaptarse a la estructura de tu proyecto.
Asegúrate de que hayas ejecutado previamente el script de compilación npm run build:server para generar el archivo server.js antes de intentar iniciar el servidor.
    "build:server": "tsc -p tsconfig.server.json",
    "start:server": "node dist/out-tsc/server/server.js",

imagen docker para linux
    parece que no hay una imagen oficial de Nginx para Windows en Docker Hub. Las imágenes oficiales de Nginx en Docker Hub son solo para Linux.
#   g p u - c a t a l o g  
 