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

### 1. Clone the repository     
  ```
  git clone https://github.com/spacedementia/gpu-catalog.git
  cd gpu-catalog
  ```
  
### 2. Install the dependencies

```
npm install
```

### 3. Build the ExpressJS server

The JS will be sorted in the `dist/out-tsc/server` folder as configured in the `tsconfig.server.json` configuration file.

```
npm run build:server
```

### 4. Start the ExpressJS server  

```
npm run start:server
```

Open your web browser and navigate to http://localhost:3000/graphics-cards?offset=0&limit=8 (`offset` and `limit` are queryParams) to view a JSON file with the first 8 Graphics Cards served by the ExpressJS server.

### 5. Build the Angular front-end

The build artifacts will be sorted in the `dist/gpu-catalog` folder as configured in the `outputPath` property in the `angular.json` configuration file.

```
npm run build
```

### 6. Running the Angular front-end

```
npm start
```

Navigate to http://localhost:4200/, Angular routing will take you to http://localhost:4200/graphics-cards. 
The Angular app will consume the first 8 Graphics Cards served by the ExpressJS server on port 3000. With the infinite scroll, the next 8 Graphics Cards will be loaded until all the Graphics Cards have been consumed.
To check if the spinner is displayed while the API requests are ongoing, press F12, go to Network and select `slow 3G`, go to http://localhost:4200/graphics-cards and scroll down. After checked select `No throttling` again.

## Running end-to-end tests with Cypress

To start the development server automatically and execute the Cypress e2e tests

```
npm run cypress:run
```

To start the interactive Cypress test runner

```
npm run cypress:open
```

## Running linting with ESLint tool

```
npm run lint
```

This command will run ESLint on all files in the app and report any style and syntax problems encountered. If you need to analyse only some folders you can configure the routes to these folders in the `.eslintrc.json` configuration file or pass the folders directly to the `eslint `command instead of using the script `lint` declared in the `package.json`. For example, to analyse the JS and TS files from the server and src folders:  

```
eslint "src/**/*.{js,ts}" "server/**/*.{js,ts}"
```

## Building and running the app in a Docker container

```
docker build -t gpu-catalog .
```

```
docker run -d -p 80:80 gpu-catalog
```

Open your web browser and navigate to http://localhost to view the application.

## Usage

Navigate through the application using the provided search bar to find the desired Graphics Cards. Click on a Graphics Card to view its detailed information.
