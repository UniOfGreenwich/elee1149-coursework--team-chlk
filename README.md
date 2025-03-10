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

`Fairshare` is designed to be run with [Docker](https://www.docker.com/resources/what-container/) container to simplify the setup process and ensure consistency across different environments. Below are the outline steps to get the application up and running on your machine:

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

<img src="https://github-readme-tech-stack.vercel.app/api/cards?title=Fairshare+tech+stack&lineCount=2&line1=react%2Creact%2C00aaff%3Bnpm%2Cnpm%2Ce9f500%3Bdocker%2Cdocker%2C16ddff%3B&line2=spring%2Cspring%2C3dff00%3BPOSTGRESQL%2CPOSTGRESQL%2C00e3ff%3Bgradle%2Cgradle%2Cffffff%3B" alt="Fairshare tech stack" />

<div style="display: flex;"><img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="icon" width="65" style="width: 65px; height: 65px; margin-right: 0px; margin-bottom: 0px;" /></div>

Docker is Cool

## Development

## Contributers


## Licence
