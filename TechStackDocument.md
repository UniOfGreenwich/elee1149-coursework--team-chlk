## Teck Stack document explaining why certain technologies were used for the FairShare app
1.  **API Testing (Hoppscotch):**

    *   **Section Used:** API Testing

    *   **Explanation:** Hoppscotch was used to directly test the backend REST APIs created with Spring Boot before and during frontend integration. This allowed for isolated verification of the backend logic, ensuring that endpoints for creating users, managing groups, adding expenses, calculating balances etc worked correctly according to the defined specifications. By testing the API layer independently, we could confirm data handling and business rule implementation without relying on the user interface, speeding up debugging and development.


2.  **Frontend Structure (HTML5):**

    *   **Section Used:** Frontend Structure

    *   **Explanation:** HTML provided the fundamental structure and content definition for the FairShare web application's user interface. It was used to define the semantic elements like forms for login/signup and expense entry, lists for displaying groups or friends, buttons for actions, and text areas. Within the React framework, JSX syntax was used, which closely resembles HTML, to declaratively build the structure of components that ultimately render as standard HTML in the browser.


3.  **Frontend Styling (CSS3):**

    *   **Section Used:** Frontend Styling

    *   **Explanation:** CSS was essential for styling the FairShare frontend, controlling the visual appearance and layout of the HTML elements. It defined aspects like color schemes, typography, spacing and element positioning. This ensured a consistent and user-friendly look and feel across the application, making it more intuitive and visually appealing for users managing their shared expenses.


4.  **Frontend Logic (JavaScript):**

    *   **Section Used:** Frontend Logic

    *   **Explanation:** JavaScript served as the core language for implementing interactivity and dynamic behavior in the FairShare frontend. It powered the React components, handling user events like button clicks and form submissions, managing the application's state (e.g., logged-in user, current group data), and performing client-side validation. Crucially, JavaScript was used to make asynchronous API calls (using **fetch** or libraries like **axios**) to the Spring Boot backend to retrieve data or send updates without requiring full page reloads.


5.  **Frontend Framework (React):**

    *   **Section Used:** Frontend Framework

    *   **Explanation:** React was chosen as the JavaScript framework to build the FairShare user interface efficiently. Its component-based architecture enabled the creation of reusable UI pieces (like an **ExpenseItem** or **GroupCard**), making the codebase modular and easier to manage as the application grew. React's virtual DOM and efficient update mechanism provided a smooth and responsive user experience, particularly for dynamically displaying lists of expenses or updating balances in real-time based on user actions.


6.  **Package Management (npm):**

    *   **Section Used:** Package Management (Frontend)

    *   **Explanation:** npm was used to manage the external libraries and dependencies required for the React frontend development. It handled the installation and version control of packages like React itself, React Router (for navigation), state management libraries (if used), and various development tools. Utilizing **package.json** and **package-lock.json**, npm ensured a consistent and reproducible development environment across different machines.


7.  **Backend Logic (Java):**

    *   **Section Used:** Backend Logic

    *   **Explanation:** Java was the programming language used to implement the server-side business logic and core functionalities of the FairShare application. Its object-oriented nature was well-suited for modeling the application's entities (Users, Groups, Expenses, Balances) and implementing the rules for user authentication, expense splitting calculations, and balance updates. Java's strong typing and extensive standard library provided a robust foundation for building a reliable and maintainable backend system within the Spring ecosystem.


8.  **Backend Framework (Spring Framework/Data):**

    *   **Section Used:** Backend Framework / Database Interaction

    *   **Explanation:** The core Spring Framework principles, leveraged via Spring Boot, were fundamental to the FairShare backend architecture, particularly through features like Dependency Injection which managed the lifecycle and wiring of components (Services, Repositories, Controllers). Spring Data JPA was specifically utilized to significantly simplify database interactions with PostgreSQL. By defining repository interfaces, we could perform complex database operations with minimal boilerplate code, allowing focus on the business logic rather than low-level data access details.


9.  **Database Management (PostgreSQL):**

    *   **Section Used:** Database Management

    *   **Explanation:** PostgreSQL was selected as the relational database system to store all persistent data for FairShare, including user credentials, group information, expense details, and calculated balances. Its support for ACID transactions ensured data consistency, which is critical for financial calculations and user relationships. The relational model allowed for defining clear relationships between entities (e.g., users belonging to groups, expenses linked to users and groups) using foreign keys, ensuring data integrity.


10.  **Backend Framework (Spring Boot):**

*   **Section Used:** Backend Framework / Application Setup

*   **Explanation:** Spring Boot was chosen specifically to accelerate the development and deployment of the FairShare backend. Its opinionated auto-configuration reduced the manual setup required for a web application, automatically configuring beans, and other dependencies. This allowed us to quickly create a stand-alone, runnable Java application with minimal configuration, focusing efforts on building the FairShare application features rather than infrastructure setup.


11.  **Hosting/Deployment (Render):**

*   **Section Used:** Hosting / Deployment

*   **Explanation:** Render was utilized as the cloud platform to host the necessary infrastructure for the FairShare application, specifically the PostgreSQL database instance. This Platform-as-a-Service (PaaS) approach simplified deployment and operations by managing the underlying servers, networking, database maintenance, and backups. Using Render allowed us to easily provision and connect our backend application to a reliable, publicly accessible database without needing to manage server hardware or complex cloud infrastructure manually.