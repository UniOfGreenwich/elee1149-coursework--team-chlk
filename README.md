<h1 align="center"><a href="http://localhost:3000/">Fairshare</h1>

<div align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=F7F7F7&width=435&lines=Your+smarter+way+to+split+costs;Split+Smarter%2C+Together;Take+Control+of+your+Expenses;Everything+at+a+glance" alt="Typing SVG" /></a>
</div>






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

<details>
  <summary>Pre-requisites</summary>
  <div>  </div> <p>Before moving forward with any of these steps, ensure that <strong>Docker</strong> is installed and running on your system. If you do not have <strong>Docker</strong> installed, you can download and install it from the <a href="https://www.docker.com/">official Docker website</a>. It is also assumed that you have a working internet connection to pull the needed Docker images. We also assume basic familiarity with command-line operations.</p>
</details>


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

<div style="display: flex;"><img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="icon" width="65" style="width: 65px; height: 65px; margin-right: 50px; margin-bottom: 0px;" /><img src="https://techstack-generator.vercel.app/github-icon.svg" alt="icon" width="65" style="width: 65px; height: 65px; margin-right: 50px; margin-bottom: 0px;" /><img src="https://techstack-generator.vercel.app/java-icon.svg" alt="icon" width="65" style="width: 65px; height: 65px; margin-right: 0px; margin-bottom: 0px;" /></div>

<div align="center">
	<table>
		<tr>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png" alt="Postman" title="Postman"/></code></td>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="HTML" title="HTML"/></code></td>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" alt="CSS" title="CSS"/></code></td>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" title="JavaScript"/></code></td>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" title="React"/></code></td>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png" alt="npm" title="npm"/></code></td>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png" alt="Java" title="Java"/></code></td>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring.png" alt="Spring" title="Spring"/></code></td>
		</tr>
		<tr>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png" alt="Spring Boot" title="Spring Boot"/></code></td>
			<td><code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" title="PostgreSQL"/></code></td>
		</tr>
	</table>
</div>

| Tech | Screenshot | Architecture |
|---|---|---|
| Login | <code><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png" alt="Postman" title="Postman"/></code>| <img src="screenshot1.png" width="200" alt="Architecture Diagram"><br>Overview of the system architecture. |
| Dashboard | <img src="screenshot2.png" width="200" alt="Dashboard Screenshot"><br>The user-friendly dashboard. |  |




[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Welcome+to+the+Fairshare+tech+stack)](https://git.io/typing-svg)

Docker is Cool

## Development

## Contributers

## References

- [Typing effect](https://readme-typing-svg.demolab.com/demo/?color=F7F7F7&lines=Your+smarter+way+to+split+costs;Split+Smarter%2C+Together;Take+Control+of+your+Expenses;Everything+at+a+glance)
- [Badges]()


## Licence
