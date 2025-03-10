<h1 align="center"><a href="http://localhost:3000/">Fairshare</h1>

<p align="center">
  <i align="center">The smarter way to split costs between friends! </i>
</p>

<h4 align="center">
  <img width="668" alt="Image" src="https://github.com/user-attachments/assets/7fc40b44-09a1-41ad-97e6-b38dbb525b76" />
</h4>

## Introduction

`fairshare` simlifies how you share your expenses with friends, family and groups through its powerful web application. Track, split and settle costs seamlessly, all in one place. It's cost-sharing made smarter. 

add more here...


<details>
<summary>Features</summary>
<br>
This is how you dropdown.
</details>

## Usage
Unfortunately at this current point in time Fairshare is a locally hosted product only. To get started with Fairshare you can follow the [Intallation section](#installation)

<a id="installation></a>
## Installation

`Fairshare` is designed to be run with `Docker` container to simplify the setup process and ensure consistency across different environments. Below are the outline steps to get the application up and running on your machine:

### Prerequisites
Before moving foward with any of these steps, ensure that **Docker** is installed and running on your system. If you do not have **Docker** installed you can download and install it from the [offical Docker website](https://www.docker.com/). It is also assumed that you have a working internet connection to pull the needed Docker images. We also assume basic familiarity with command-line operations.


1. Clone the `fairshare` repository to your local machine. This will give you access to the 3 Main Docker Files:
- docker.backend
- docker-compose.yml
- docker.frontend,  
```
git clone https://github.com/UniOfGreenwich/elee1149-coursework--team-chlk.git
```
2. Build and run Docker Image
Ensure you are in the root ```./``` of the project, and it contains a Dockerfile. The Docker image can be built using the following command. This command tags the image as fairshare:latest by default which can be changed if you wish to within the docker-compose.yaml. This step might take a while to run based on the size of this application and your internet connection. This command will downlaod the images and dependencies needed to run this application. Please be patient while this command runs :). 

```
docker-compose up --build
```

3. Verify the application
After the container starts the application should now be accessible. The front and backend should be running on their respective ports.
- Backend = port:8080
- Frontend = port:3000

Navigate to a webbrowser and access [port:3000](http://localhost:3000/)
  

## Tech Stack 

## Development

## Contributers


## Licence
