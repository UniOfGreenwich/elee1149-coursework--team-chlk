# Requirements Engineering

## **1. Introduction**

This document outlines the requirements for the FairShare website designed to help users split costs and manage finances efficiently. The system will provide features for tracking debts, managing groups/friends, and simplifying financial settlements.

---

## **2. Stakeholders**

- **End Users:** Individuals or groups who need to share and track expenses or split costs.
- **Development Team:** Responsible for building and maintaining the system.
- **Project Manager:** No individual personnel. All the team members will be a part of the development and ensure requirements are met.

---

## **3. Functional Requirements**

### **3.1 User Management**

- Users can register and log in using secure authentication.
- Users can update profile information, including personal details.

### **3.2 Dashboard**

- Display a summary of total money owed by the user and total money owed to the user.
- Show recent transactions.
- Provide quick access to key actions such as adding expenses and settling payments.

### **3.3 Expense Management**

- Add, edit, and delete expenses or transactions.
- Split expenses equally or unequally between friends or group members.
- Allow users to attach categories to expenses.

### **3.4 Group Management**

- Create, edit, delete, and manage groups.
- View group-specific balances and transaction history on a dashboard.

### **3.5 Payment and Settlement**

- Record payments made to settle debts.
- Generate notifications when a payment is settled or a new entry is created \*.

### **3.6 Notifications (Stretch)**

- Notify users about new expenses, settlements, and reminders.

### **3.7 Security Requirements**

- Secure user authentication and data encryption.
- Protect sensitive user data from unauthorized access.

---

## **4. Non-Functional Requirements**

### **4.1 Performance Requirements**

- The system is expected to handle {number of users} concurrent users. (Confirm with Kyle)
- Response time for dashboard actions should be under 3 - 5 seconds.

### **4.2 Usability Requirements**

- The user interface should be intuitive and responsive.
- Provide a desktop (MVP) and mobile-friendly design.

### **4.3 Availability Requirements**

- The system is expected to have 99.9% uptime.

### **4.4 Maintainability Requirements**

- Modular code structure for easy updates and maintenance.

### **4.5 Scalability Requirements**

- Support horizontal scaling to accommodate growing user base.

---

## **5. User Stories**

### **5.1 Dashboard User Story**

**As a user, I want to see a clear overview of my financial liabilities and dues, so that I can easily track my financial status.**

### **5.2 Expense Splitting User Story**

**As a user, I want to add expenses and split them with my friends, so that I can easily manage shared costs.**

### **5.3 Group Management User Story**

**As a user, I want to create and manage groups, so that I can organize expenses for specific events or activities.**

### **5.4 Settlement User Story**

**As a user, I want to record payments, so that I can settle balances and keep my financial records up to date.**

---

## **6. Assumptions and Constraints**

- Users must have an active internet connection to access the website.
- Payments are only recorded; no actual payment processing is implemented.
- Initial release will focus on core features, with some detailed analytics and reporting planned for future versions along with a mobile responsive design.

---

## **7. Future Enhancements**

- Integration with payment gateways.
- Advanced analytics and AI-driven financial insights.
- Visual representation (graphs/charts) for spending trends and patterns.
- Multi-currency support.
- Localization for different regions.
- Responsive Mobile Design.
- Various colour themes including light and dark modes.

---

## **8. Meet the Team**

- **Front-End Developers:** Hamza Khan and Lewis Walker
- **Back-End Developers:** Kyle Anderson
- **System Architect:** Charu Srivastava

## **9. Conclusion**

This requirements engineering document provides a foundation for the development of the cost-splitting website, focusing on key functionalities and user needs. Iterative improvements will be made to enhance the system based on user feedback and evolving requirements.
