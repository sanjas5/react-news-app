# Use an official Node.js image as the base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx as the web server
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx web root directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
