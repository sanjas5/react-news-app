# React News App

## Overview

This is a React.js application that serves as a news aggregator, pulling articles from various sources and displaying them in a clean, easy-to-read format.

## Features

- **Article search and filtering:** Users can search for articles by keyword and filter the results by date, category, and source.
- **Personalized news feed:** Users can customize their news feed by selecting their preferred sources, categories, and authors.
- **Mobile-responsive design:** The website is optimized for viewing on mobile devices, providing a seamless user experience across different screen sizes.

## Installation

1.  Clone the repository:

    bashCopy code

    `git clone https://github.com/sanjas5/react-news-app.git`

2.  Navigate to the project directory:

    bashCopy code

    `cd react-news-app`

3.  Install dependencies:

    bashCopy code

    `npm install`

## Usage

1.  Start the development server:

    bashCopy code

    `npm start`

2.  Open your web browser and navigate to http://localhost:3000 to view the app.

## APIs Used

- **News API**: Provides a RESTful API for accessing news articles from various sources and publishers.
- **The Guardian News API**: Provides access to articles and content from The Guardian newspaper.
- **The New York Times API**: Allows access to articles and multimedia content from The New York Times.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **React Query**: Hooks for fetching, caching, and updating asynchronous data in React.
- **InfiniteQuery**: A part of React Query, provides hooks for infinite scrolling and data fetching.
- **CSS**: Cascading Style Sheets for styling the user interface.

---

---

## Running the Project in a Docker Container

This guide explains how to run the project within a Docker container. Docker allows you to package your application and its dependencies into a standardized unit for easy deployment across different environments.

### Prerequisites

Before you begin, make sure you have Docker installed on your machine. You can download and install Docker from the official Docker website.

### Steps

1.  **Clone the Repository**:

    Clone the project repository from GitHub:

    bashCopy code

    `git clone <repository-url>`

2.  **Navigate to the Project Directory**:

    Navigate to the root directory of the project:

    bashCopy code

    `cd <project-directory>`

3.  **Build the Docker Image**:

    Build the Docker image using the provided Dockerfile:

    bashCopy code

    `docker build -t <image-name> .`

    Replace `<image-name>` with the desired name for your Docker image.
    Our case: `docker build -t react-news-app .`

4.  **Run the Docker Container**:

    Run a Docker container based on the built image:

    bashCopy code

    `docker run -d -p <host-port>:<container-port> <image-name>`

    Replace `<host-port>` with the port on your host machine where you want to access the application, `<container-port>` with the port exposed by the application inside the container, and `<image-name>` with the name of the Docker image you built.

    Our case: `docker run -d -p 3000:8080 react-news-app`

5.  **Access the Application**:

    Once the container is running, you can access the application by opening a web browser and navigating to `http://localhost:<host-port>`. Replace `<host-port>` with the port you specified in step 4.

    Our case: `http://localhost:3000`

6.  **Stop and Remove the Container** (Optional):

        If you no longer need the container, you can stop and remove it using the following commands:

        bashCopy code

        `docker stop <container-id>

    docker rm <container-id>`

        Replace `<container-id>` with the ID or name of the Docker container.

### Conclusion

Congratulations! You have successfully run the project within a Docker container. Docker provides a convenient way to package and deploy application, making it easier to manage and scale in different environments.

---
