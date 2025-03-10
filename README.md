<h1 align="center"><a href="http://localhost:3000/">Fairshare</h1>

<div align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=F7F7F7&width=435&lines=Your+smarter+way+to+split+costs;Split+Smarter%2C+Together;Take+Control+of+your+Expenses;Everything+at+a+glance" alt="Typing SVG" /></a>
</div>


<h4 align="center">
  <img width="668" alt="Image" src="https://github.com/user-attachments/assets/7fc40b44-09a1-41ad-97e6-b38dbb525b76" />
</h4>

## Introduction

Fairshare simplifies how you share expenses with friends, family, and groups through its powerful web application. Track, split, and settle costs seamlessly, all in one place. It's cost-sharing made smarter.

Fairshare offers a streamlined approach to managing shared expenses, eliminating the hassle of manual calculations and awkward IOUs.  Whether you're splitting bills with roommates, tracking holiday costs with friends, or managing group expenses for a project, Fairshare makes it easy to keep everyone on the same page.

<details>
<summary>Click to expand features</summary>
<div></div> <ul>
  <li>**User-friendly Interface:** Intuitive design for effortless expense tracking and splitting.</li>
  <li>**Group Management:**  Create and manage groups for different expense sharing scenarios.</li>
  <li>**Real-time Updates:**  Instantly see the latest expenses and balances.</li>
  <li>**Flexible Splitting:**  Divide expenses equally or by custom percentages.</li>
  <li>**Expense History:** Maintain a detailed record of all transactions.</li>
  <li>**Secure and Reliable:**  Your data is safe and accessible whenever you need it.</li>
</ul>
</details>

## Usage
Currently, Fairshare is a locally hosted product. To get started, follow the [Intallation instructions](#installation)

<a id="installation"></a>
## Installation

### 🐳 Docker Quick Start

Fairshare is designed to run within a [Docker](https://www.docker.com/resources/what-container/) container for simplified setup and cross-enironment consistency.

<details>
<summary>Prerequisites</summary>
<div></div>
<ul>
  <li><strong>Docker:</strong> Ensure Docker is installed and running. Download it from the <a href="https://www.docker.com/">official Docker website</a>.</li>
  <li><strong>Internet Connection:</strong> Required to pull Docker images.</li>
  <li><strong>Basic Command-Line Familiarity:</strong>  You'll need to use basic command-line commands.</li>
</ul>
</details>

<style>
.code-block-container {
	margin-top: 1em;
}
</style>

<details>
<summary>Running Fairshare</summary>
<div></div>
<ol>
  <li><strong>Clone the repository:</strong>
    <div class="code-block-container">
	  
    ```bash
    git clone https://github.com/UniOfGreenwich/elee1149-coursework--team-chlk.git
    ```
  </li>
  <li><strong>Build and run:</strong>Navigate to the project's root directory and run:

    ```bash
    docker-compose up --build
    ```
    This command builds and starts the application. It may take some time depending on your internet connection.
  </li>
  <li><strong>Verify:</strong>Access the application in your web browser:
    <ul>
      <li><strong>Frontend:</strong> <a href="http://localhost:3000/">http://localhost:3000/</a></li>
      <li><strong>Backend (API):</strong> http://localhost:8080</li>
    </ul>
  </li>
</ol>
</details>

## Tech Stack 

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


* **Frontend:** React, HTML, CSS, JavaScript, npm
* **Backend:** Spring Boot, Java, Gradle
* **Database:** PostgreSQL
* **Containerization:** Docker
* **Other:** Postman

## Development

## Plugins (Gradle Dependencies) 

See the [Dependencies section](#dependencies) below for details on the project's Gradle dependencies.

<a id="dependencies"></a>
## Dependencies

<details>
<summary>Gradle Dependencies</summary>
<div></div>
  <table>
    <thead>
      <tr>
        <th>Dependency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>org.springframework.boot:spring-boot-starter-web</code></td>
        <td>Provides the core Spring Boot web starter for building web applications.</td>
      </tr>
      <tr>
        <td><code>org.postgresql:postgresql</code></td>
        <td>PostgreSQL JDBC driver for database connectivity.</td>
      </tr>
      <tr>
        <td><code>org.springframework.boot:spring-boot-starter-data-jpa</code></td>
        <td>Spring Data JPA for simplified database interactions.</td>
      </tr>
      <tr>
        <td><code>org.springframework.boot:spring-boot-starter-test</code></td>
        <td>Spring Boot test utilities for testing.</td>
      </tr>
      <tr>
        <td><code>org.junit.platform:junit-platform-launcher</code> (testRuntimeOnly)</td>
        <td>JUnit Platform launcher for running tests.</td>
      </tr>
    </tbody>
  </table>
</details>

## Contributers

## References

- [Typing effect](https://readme-typing-svg.demolab.com/demo/?color=F7F7F7&lines=Your+smarter+way+to+split+costs;Split+Smarter%2C+Together;Take+Control+of+your+Expenses;Everything+at+a+glance)
- [Badges]()


## Licence
