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

 
- **User-friendly Interface:** Intuitive design for effortless expense tracking and splitting.
- **Group Management:** Create and manage groups for different expense sharing scenarios.
- **Real-time Updates:** Instantly see the latest expenses and balances.
- **Flexible Splitting:** Divide expenses equally or by custom percentages.
- **Expense History:** Maintain a detailed record of all transactions.
- **Secure and Reliable:** Your data is safe and accessible whenever you need it.
</details>

## Usage
Currently, Fairshare is a locally hosted product. To get started, follow the [Installation instructions](#installation)

<a id="installation"></a>
## Installation

### 🐳 Docker Quick Start

Fairshare is designed to run within a [Docker](https://www.docker.com/resources/what-container/) container for simplified setup and cross-enironment consistency.

<details>
<summary>Prerequisites</summary>
	
- **Docker:** Ensure Docker is installed and running. Download it from the [official Docker website](https://www.docker.com)
- **Internet Connection:** Required to pull Docker images.
-  **Basic Command-Line Familiarity:** You'll need to use basic command-line commands.
</details>



<details>
<summary>Running Fairshare</summary>

1. **Clone the repository:**
	  
    ```bash
    git clone https://github.com/UniOfGreenwich/elee1149-coursework--team-chlk.git
    ```


2. Navigate the the project's root directory and run:

	```
	├── src/
	```

2. **Build and run:** Navigate to the project's root directory and run:

    ```bash
    docker-compose up --build
    ```
    This command builds and starts the application. It may take some time depending on your internet connection.

3. **Verify:** Access the application in your web browser:
 - **Frontend:**  [http://localhost:3000/](http://localhost:3000/)
 - **Backend:** [http://localhost:8080](http://localhost:8080)
    </ul>
  </li>
</ol>
</details>

## Tech Stack 
| Technology   | Section Used    |
|--------------|-----------------|
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png" width="50"> | API Testing |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" width="50"> | Frontend Structure |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" width="50"> | Frontend Styling |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" width="50"> | Frontend Logic |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" width="50"> | Frontend Framework |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png" width="50"> | Package Management |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png" width="50"> | Backend Logic |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring.png" width="50"> | Backend Framework |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" width="50"> | Database Management |
| <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png" width="50"> | Backend Framework |

## Development

### Plugins (Gradle Dependencies) 

See the [Dependencies section](#dependencies) below for details on the project's Gradle dependencies.

<a id="dependencies"></a>

## Class Diagrams

For detailed class diagrams, please refer to the [class_diagrams](class_diagrams) folder.

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
- [Docker Tutorial](https://www.youtube.com/watch?v=Ud7Npgi6x8E)
- [Spring-boot-docker](https://spring.io/guides/gs/spring-boot-docker)
- [Tech Badges](https://marwin1991.github.io/profile-technology-icons/)
- [Animated badges](https://techstack-generator.vercel.app/)
- [Mermaid](https://mermaid.live/edit#pako:eNpFj8FuwyAQRH-lmjOywAQMXJNrfqDigsLWsVpDRLCU1vK_lziquqcZ7b4dzYpLjgQHn3x6awOGsUwRrpaFGGYqc3harM-9R73STB6uyRjKp2_g1phbSO85z39Yyct4hfsIX_fmllsMlU5TGEv4P6EUqRzzkiqc3D_ArXjACSM70wtt1GAFF0r3DN9wlneWSyUEPwxSy95sDD97Ju-05AdprRq40sZoxUBxqrmcX-X2jtsvuCpGDA)
- [Github Mermaid](https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/)



## Licence
