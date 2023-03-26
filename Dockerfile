# Use a base Node.js image to build the app
FROM node:16-alpine AS build

# Set the container's working directory
WORKDIR /usr/src/app

# Copy the package.json, package-lock.json files to the container's working directory
COPY package*.json ./

# Increase the timeout to 60 seconds before a timeout error occurs
RUN npm config set fetch-retry-maxtimeout 60000
# Install the dependencies from the package-lock.json file
# If fails print the content of the log file to the output of the Docker build process
RUN npm ci || (cat /root/.npm/_logs/*-debug.log && false)

# Build the app for production environment and generate the output files in dist/gpu-path
# This files are used to serve the app from a web server, like Nginx
RUN npm run build -- --prod --output-path=dist/gpu-catalog

# Use a base Nginx image to serve the app
FROM nginx:1.21-alpine

# Copy the Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the production files from the build step to the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Starts Nginx
CMD ["nginx", "-g", "daemon off;"]


# # Use the official Node.js runtime as the base image
# FROM node:lts-alpine

# # Set the NODE_ENV environment variable to production
# ENV NODE_ENV=production

# # Install dependencies from the package.json file and move them to the parent directory
# RUN npm install --production --silent && mv node_modules ../
# # Copy the rest of the application files to the container's working directory
# COPY . .

# # Expose port 3000 to allow outside connections
# EXPOSE 3000

# # Set ownership of the /usr/src/app directory to the "node" user to avoid running the app as root
# RUN chown -R node /usr/src/app
# # Set the user to "node" so the app doesn't run as root
# USER node

# # Set the command to run when the container starts
# CMD ["npm", "start"]
