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

## Design

For detailed designs, please refer ro the [Design](Design) folder.

## Class Diagrams

For detailed class diagrams, please refer to the [class_diagrams](class_diagrams) folder.

## Requirements Engineering
The requirements engineering documentation can be found here: [requirements-engineering](requirements-engineering/requirements-engineering.md)

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
  <div></div>
  <summary>NPM Dependencies</summary>
  <div></div>
  <table>
    <thead>
      <tr>
        <th>Dependency</th>
        <th>Version</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>axios</td>
        <td>^1.8.4</td>
        <td>Promise based HTTP client</td>
      </tr>
      <tr>
        <td>cra-template</td>
        <td>1.2.0</td>
        <td>Base template for Create React App</td>
      </tr>
      <tr>
        <td>date-fns</td>
        <td>^4.1.0</td>
        <td>Date Utility Library</td>
      </tr>
      <tr>
        <td>react</td>
        <td>^19.0.0</td>
        <td>UI Library</td>
      </tr>
      <tr>
        <td>react-dom</td>
        <td>^19.0.0</td>
        <td>DOM-specific methods for rendering React components into the browser's DOM</td>
      </tr>
      <tr>
        <td>react-hook-form</td>
        <td>^7.54.2</td>
        <td>Performant, flexible and extensible forms with easy-to-use validation</td>
      </tr>
      <tr>
        <td>react-router-dom</td>
        <td>^7.1.5</td>
        <td>Declarative routing for React</td>
      </tr>
      <tr>
        <td>react-scripts</td>
        <td>^5.0.1</td>
        <td>Scripts and configuration for Create React App</td>
      </tr>
      <tr>
        <td>react-toastify</td>
        <td>^11.0.5</td>
        <td>Notification Library</td>
      </tr>
      <tr>
        <td>recharts</td>
        <td>^2.15.1</td>
        <td>Refined charts Library</td>
      </tr>
      <tr>
        <td>Save</td>
        <td>^2.9.0</td>
        <td>CRUD based persistence abstraction for storing objects to sany backend data store</td>
      </tr>
      <tr>
        <td>typescript</td>
        <td>^5.8.2</td>
        <td>Language for application-scale JavaScript</td>
      </tr>
    </tbody>
  </table>
</details>

## Contributers
#### Kyle (Main Backend Developer, Secondary Database Manager): 
- Backend Tech Stack: Spring boot initialisation, Java, Postgres/SQL
- Java backend: Structure decisions, main code setup.
- Java backend: Controllers, Services, Repositorys, Entitys
- Java Unit tests: for above
- 
- Security Encryption
- GCP Deployment
- Docker Configuration
- Documentation: ReadMe (All Sections)
- Documentation: Application Testing Table
- Documentation: Class Digrams
- GCP Deployment

**Charu (Main Database Manager, Secondary Backend Role):**

#### Hamza (Frontend Developer):
- Tech Stack: NPM, React, JSX, CSS and HTML
- Created application wireframe and design
- Documentation: Requirements Engineering
- Documentation: Styling Guide for the application
- Front-end pages: Home, Login, Sign-up, Dashboards 
- Dashboard component: Overview, Action Buttons, Group Members
- Functionality: Add Friend, Add Group, Add Member, Add Expense, Settlement Payment
- Styling and decoration: CSS
- Application walkthrough and testing

#### Lewis (Frontend Developer):
- Frontend Tech Stack: NPM, React, JSX, CSS and HTML
- React Frontend: initial app creation
- Documentation: Requirements Engineering
- Frontend pages: Groups, Friends, Expenses
- Dashboard components: Recent Expenses, Top Categories, Groups
- Functionality: Signup, Login, Logout, Navigation, Error Notification, Success Notification
- Axios HTTP client for API calls
- API Error Handling
- Styling and decoration: CSS
- Github Pages deployment
- Application testing

## References

- [Typing effect](https://readme-typing-svg.demolab.com/demo/?color=F7F7F7&lines=Your+smarter+way+to+split+costs;Split+Smarter%2C+Together;Take+Control+of+your+Expenses;Everything+at+a+glance)
- [Docker Tutorial](https://www.youtube.com/watch?v=Ud7Npgi6x8E)
- [Spring-boot-docker](https://spring.io/guides/gs/spring-boot-docker)
- [Tech Badges](https://marwin1991.github.io/profile-technology-icons/)
- [Animated badges](https://techstack-generator.vercel.app/)
- [Mermaid](https://mermaid.live/edit#pako:eNpFj8FuwyAQRH-lmjOywAQMXJNrfqDigsLWsVpDRLCU1vK_lziquqcZ7b4dzYpLjgQHn3x6awOGsUwRrpaFGGYqc3harM-9R73STB6uyRjKp2_g1phbSO85z39Yyct4hfsIX_fmllsMlU5TGEv4P6EUqRzzkiqc3D_ArXjACSM70wtt1GAFF0r3DN9wlneWSyUEPwxSy95sDD97Ju-05AdprRq40sZoxUBxqrmcX-X2jtsvuCpGDA)
- [Github Mermaid](https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/)



## Licence
