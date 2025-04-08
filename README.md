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
Fairshare can be accessed through GitHub pages and ran online [Github pages](https://github.com/UniOfGreenwich/elee1149-coursework--team-chlk/settings/pages)


Alternatively, Fairshare is a locally hosted product. To get started, follow the [Installation instructions](#installation)

<a id="installation"></a>
## Installation

### 🐳 Docker Quick Start

Fairshare is designed to run within a [Docker](https://www.docker.com/resources/what-container/) container for simplified setup and cross-enironment consistency.

<details>
<summary>Prerequisites</summary>
	
- **Docker:** Ensure Docker is installed and running. Download it from the [official Docker website](https://www.docker.com)
- **Internet Connection:** Required to pull Docker images.
-  **Basic Command-Line Familiarity:** You'll need to use basic command-line commands.

Ensure the following line is set to:
```
axios.defaults.baseURL = 'http://localhost:8080/'
```
To run the app locally: [axios.ts](frontend/src/methods/use-axios.ts) 
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
| Technology Name | Technology Logo | Section Used  |
|--------------|-----------------|------------------|
| Hoppscotch | <img src="[https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/hoppscotch.png]" width="50"> | API Testing ||
| HTML |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" width="50"> | Frontend Structure ||
| CSS |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" width="50"> | Frontend Styling |
| Javascript |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" width="50"> | Frontend Logic |
| React |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" width="50"> | Frontend Framework |
| NPM |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png" width="50"> | Package Management |
| Java |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png" width="50"> | Backend Logic |
| Mermaid ||UML Diagrams|
| Spring |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring.png" width="50"> | Backend Framework |
| PostgreSQL |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" width="50"> | Database Management |
| Spring Boot |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png" width="50"> | Backend Framework |
| Render |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/render.png" width="50"> | Render (DB Host) |
| GCP |<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png" width="50"> | GCP (Backend Host) |

See the [Tech Stack Document](TechStackDocument.md) for information on why these technologies were used to develop FairShare.

## Development

### Plugins (Gradle Dependencies) 

See the [Dependencies section](#dependencies) below for details on the project's Gradle dependencies.

<a id="dependencies"></a>

## Architecture Diagrams

Several UML diagrams were used for system modelling. The section below explains their purpose within the FairShare application context and where to find each one.

**Activity Diagram**:

Purpose: This diagram models the flow of actions and decisions within a specific process or use case of FairShare.

Activity diagrams were used to illustrate processes like user SignUp, adding a new expense (including how it's split), updating user balances after an expense is added, settling a balance between two users etc.

Here is where you can find the [FairShare Activity Diagrams](ArchitectureDiagrams/ActivityDiagrams)

**Sequence Diagram**:

Purpose: This diagram focuses on the interaction between different objects or components over time for a specific scenario. It shows the sequence of messages (like method calls) passed between objects to accomplish a task.

FairShare Context: Sequence diagrams for showing how a request slows through the system. For example, fetching a balance: from the frontend (React) making an API call, to the BalanceController, which calls the BalanceService, which in turn interacts with the BalanceRepository and the database, and then how the response returns back up the chain. 

Here is where you can find the [FairShare Sequence Diagrams](ArchitectureDiagrams/SequenceDiagrams)

**Class Diagram**:

Purpose: This diagram describes the static structure of the system's codebase. It shows the classes, their attributes (fields), methods (operations), and the relationships between different classes (like association, inheritance, dependency).

FairShare Context: Class diagrams showed the main Java classes in the backend, such as User, Freind, Group, Expense, Balance, Category, along with the Controller, Service, and Repository classes (BalanceController, BalanceService, BalanceRepository, etc.). 

Here is where you can find the [FairShare Class Diagrams](ArchitectureDiagrams/ClassDiagrams)

**Entity-Relationship Diagram (ERD)**:

Purpose: An ERD specifically models the structure of the database. It shows the entities (which become database tables), their attributes (columns), primary and foreign keys, and the relationships (one-to-one, one-to-many, many-to-many) between these entities.

FairShare Context: The FairShare ERD provided a visual representation of the PostgreSQL database schema. It clearly showed tables like Users, Groups, Expenses, Balances, UserGroups, UserShares, and how they are linked through foreign keys (e.g., an Expense belongs to one Group and is paid by one User). 

Here is where you can find the [FairShare ERD](ArchitectureDiagrams/DatabaseDiagrams/DatabaseERD)

**Mind Map**:

Purpose: A mind map is good for brainstorming, planning, summarising information, and showing relationships between different ideas or components.

FairShare Context: For FairShare the midnmap diagram was used as a use-case diagram. This is because Mermaid does not recognise 'useCaseDiagrams' so a different way was needed to illustrate the different use cases for FairShare.

Here is where you can find the [FairShare Mindamap_diagram](ArchitectureDiagrams/MermaidDiagram.mmd).

## Requirements Engineering
The requirements engineering documentation can be found here: [requirements-engineering](requirements-engineering/requirements-engineering.md)

## Database Set Up and Hosting

The FairShare application uses a **PostgreSQL** database hosted on **Render**. 
The database design and data dictionary can be found here: [FairShare Data Dictionary](DatabaseDocumentation/FairShareDataDictionary.md)
The schema was created using the SQL scripts, details can be found here:[PostgreSQL Database Creation](DatabaseDocumentation/PostgreSQLDatabaseCreation.md). 
The Render and PostgreSQL configuation process can be found here: [Render/PostgreSQL Configuration](DatabaseDocumentation/RenderPostgreSQLSetUp.md)

## Security
Currently security features Password Ecnryption using [Encryption](https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/crypto/bcrypt/BCryptPasswordEncoder.html)

## Testing
Fairshare includes comprehensive testing in order to ensure the app is reliable and working at each stage of development.

### Backend Unit Tests
Unit tests for the backend services have been created to verify the functionality
of individual components. These tests can be found in the [test](src/test) directory.
To run theses tests, they will run when building the gradle file:
```bash
./gradlew build
```
or you can run the tests individually by executing the following command:
```bash
./gradlew test
```

### Testing Documents
In addition to automated test, we have followed some manual testing procedures through the
applications UI. We have maintained documentation of these testing documents that outline various
test cases, expected results and actual results. These documents help to maintain record
of manual testing and verify the application works. You can located these testing documents
in the [testing-documents](testing-documents) directory.

### Hopscotch Testing
#### What is Hopscotch
Hopscotch is an open-source API development tool that simplifies the process of testing and interacting
with APIs. Is provides a user-friendly interfact to send HTTP requests and view responses, making it easy to debug
and test API's. 

#### How we used Hopscotch
We used Hopscotch to test all our API endpoints for the Fairshare Application. This allowed us to ensure
our backend services were functioning correctly and returning the expected results, before passing in any 
data the Frontend. Here is the process of using Hopscotch to test our API's:

1. Setup Requests: We created various HTTP requests (GET, POST, DELETE, etc...) to interact with our API endpoints.
2. Send Requests: We sent these requests to the API and viewed the responses to ensure they were correct.
3. Validate Responses: We compared the actual responses with th expected results to verify the API was working correctly.
4. Debugging: If any issues were found, we used Hopscotch to debug the API and identify the root cause of the problem.

By using Hopscotch, we were able to quickly and easily test out API's ensuring reliablity and working status of our
backend services. 

More details can be found in the [hopscotch](testing-documents/hopscotch) directory.

### Physical Application Tests
Application test were performed as a group on 05/04/25 in person/virtual. A testing table was created by: Kyle, and listed the definitions of each
test and the expected vs actual results. The testing table can be found [table](testing-documents/test-table.md).  

## Future Improvements
Below is a list of additional features and security we wish to add in future development.
### Additional Features
- Profile Customisation
- Adding profile images
- Adding additional categories or user able to add their own custom categories
- Additional payment features: adding bank cards, Paypal etc
- Adding statistical analysis: Charts etc showing the groups trends etc

### Security Concerns to Address
In an ideal world the following feaures would have been added:

Due to time restrictions when developing this product security is an area which is currently lacking. Currently the system only encrypts passwords but there are many areas to address.

**Secret Manager:** GCP has a secret manager function which can be used to hold sensitive information such as DB passwords or Code Secrets. I attempted to add our DB password into Google Secret Manager and
apply changes to the code to use this secret. See [GCP Branch](https://github.com/UniOfGreenwich/elee1149-coursework--team-chlk/tree/GCP-deployment). Unfortunetly due to an issue, secret manager would not authenticate the password. I had troubleshooted many options such as providing the right access and roles to the GCP Service Account, ensure the secret was the correct value by comparing it to our password in a text editor, checked to see if our DB was blocking any external access. None of these seemed to be an issue. Upon inspection I suspect it is a timing issue with the way the app is being deployed to GCP and is timing wrong when using the secret to connect to the DB. If I had more time for development I would have hopefully resolved this issue by using a Pipeline etc for deployment as it is a HIGH security risk having the DB password in the code. My justification for this being okay is this is a University asssignment and all data is test data so therefore doesn't contain any personal data, so no data breaches will be broken. 

**API Authentication:** Additionally Authentication would be added to authenitcate the User on login and then provide a token for API calls. This would make the APIs more secure as they could not be accessed without a token.

**Locking Down Endpoints:** The API security should be increased to allow the endpoints to not be hit externally. Locking down the endpoints so the calls can only be made through the app would increase security.

**Vanity URLS:** Currnelty the URLs in the app are still including the endpoints. Going foward with more time we would make vanity URLs. These act as a the name suggest a fake URL hiding the main URL. 


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
#### Kyle (Main Backend Developer, Secondary Database Manager): 
- Backend Tech Stack: Spring boot initialisation, Java, Postgres/SQL
- Java backend: Structure decisions, main code setup.
- Java backend: Controllers, Services, Repositories, Entities, DTOs
- Java Unit tests: for above
- Security Encryption
- GCP Deployment
- Docker Configuration
- Documentation: ReadMe (All Sections)
- Documentation: Application Testing Table
- Documentation: Class Digrams
- GCP Deployment

**Charu (Main Database Manager, Secondary Backend Role):**
- Java Backend: 'Controller', 'Service', 'Repository', 'Entity' classes
- Java Backend: Error handling
- PostgreSQL SetUp
- Render SetUp
- Documentaion: ReadMe (Architecture and Database sections)
- Documentation: Tech Stack Document
- Documentation: Data Dictionary
- Documentation: PostgreSQL Database scripts and setup
- Documentation: Render - PostgreSQL configuration
- Architecture diagrams: Activity diagrams
- Architecture diagrams: Sequence diagrams
- Architecture diagrams: Entity Relationship diagram
- Architecture diagrams: MindMap diagram

Hamza:
- Tech Stack: React, JSX, CSS and HTML
- Created application wireframe and design
- Documentation: Requirements Engineering
- Documentation: Styling Guide for the application
- Front-end pages: Home, Login, Sign-up, Dashboards 
- Dashboard component: Overview, Action Buttons, Group Members
- Styling and decoration: CSS
- Application walkthrough and testing

Lewis:

## References

- [Typing effect](https://readme-typing-svg.demolab.com/demo/?color=F7F7F7&lines=Your+smarter+way+to+split+costs;Split+Smarter%2C+Together;Take+Control+of+your+Expenses;Everything+at+a+glance)
- [Docker Tutorial](https://www.youtube.com/watch?v=Ud7Npgi6x8E)
- [Spring-boot-docker](https://spring.io/guides/gs/spring-boot-docker)
- [Tech Badges](https://marwin1991.github.io/profile-technology-icons/)
- [Animated badges](https://techstack-generator.vercel.app/)
- [Mermaid](https://mermaid.live/edit#pako:eNpFj8FuwyAQRH-lmjOywAQMXJNrfqDigsLWsVpDRLCU1vK_lziquqcZ7b4dzYpLjgQHn3x6awOGsUwRrpaFGGYqc3harM-9R73STB6uyRjKp2_g1phbSO85z39Yyct4hfsIX_fmllsMlU5TGEv4P6EUqRzzkiqc3D_ArXjACSM70wtt1GAFF0r3DN9wlneWSyUEPwxSy95sDD97Ju-05AdprRq40sZoxUBxqrmcX-X2jtsvuCpGDA)
- [Github Mermaid](https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/)



## Licence
