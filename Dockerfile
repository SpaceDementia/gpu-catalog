############## Stage 1 - Build the Angular App

# Use a base Node.js image to build the app
FROM node:16-alpine AS build

# Set the container's working directory
WORKDIR /usr/src/app

# Copy the package.json, package-lock.json files to the container's working directory
COPY package*.json ./

# Increase the timeout to 120 seconds before a timeout error occurs
RUN npm config set fetch-retry-maxtimeout 120000
# Install the dependencies from the package-lock.json file
RUN npm ci

#Copy the source code and the configuration files to the container's working directory
COPY . .

# Build the app for production environment and generate the output files in dist/gpu-path
# This files are used to serve the app from a web server, like Nginx
RUN npm run build -- --configuration production

############## Stage 2 - Build the Express Server

FROM node:16-alpine AS server-build

WORKDIR /usr/src/app

# Copy the package.json, package-lock.json files to the container's working directory
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production
# Install development dependencies excluding Cypress
RUN npm ci --only=dev && npm uninstall cypress

# Install TypeScript globally
RUN npm install -g typescript

# Copy the tsconfig.json
COPY tsconfig.json tsconfig.json
# Copy the Express server local source code to the server folder in the container's working directory (/usr/src/app/server)
# and the tsconfig.server.json
COPY server server
COPY tsconfig.server.json tsconfig.server.json

# Build the Express server
RUN npm run build:server

############## Stage 3 - Create the image with Nginx

# Use a base Nginx image to serve the app
FROM nginx:1.21-alpine

# Copy the Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the Angular app files from the build stage
# These files are in the folder dist/gpu-catalog as configured in the outputPath in the angular.json
COPY --from=build /usr/src/app/dist/gpu-catalog /usr/share/nginx/html

# Copy the Express server files from the build stage
# These files are in the server folder, they were copied there in Stage 2
COPY --from=server-build /usr/src/app/server /usr/src/app/server

# Expose the port 80 for Nginx
EXPOSE 80

# Starts Nginx and the Express server
CMD ["sh", "-c", "nginx && node /usr/src/app/server/server.js"]
