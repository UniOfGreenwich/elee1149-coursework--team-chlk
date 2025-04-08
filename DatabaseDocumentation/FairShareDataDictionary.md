FairShare Data Dictionary
-------------------------

### Overview

This document defines the database schema for the FairShare application, outlining the entities, their relationships, the attributes and their datatypes within each table.

### Entities

*   **User:** Represents a person using the application.

*   **Friend:** Represents a friendship link (pending or accepted) between two users.

*   **Group:** Represents a collection of users sharing expenses.

*   **Expense:** Represents a single spending event within a group.

*   **Balance:** Represents the net amount owed between two specific users across all shared expenses/settlements.

*   **Category:** Represents predefined types of expenses.

*   **UserGroup:** Junction table linking Users and Groups (Many-to-Many).

*   **UserShare:** Junction table detailing how much each user owes for a specific expense (Many-to-Many between User and Expense).


### Cardinalities (Relationships)

*   **User and Group:** Many-to-Many (via **UserGroup**)

*   **Group and Expense:** One-to-Many (**GroupID** in **Expense** table)

*   **User and Expense (as Payer):** One-to-Many (**PayerID** in **Expense** table)

*   **User and Expense (as Debtor):** Many-to-Many (via **UserShare**)

*   **Expense and Category:** Many-to-One (**CategoryID** in **Expense** table)

*   **User and User (as Friends):** Many-to-Many (via **Friends** table, representing directed pairs with status)

*   **User and User (for Balances):** One-to-One (via **Balance** table, representing a specific pair's net balance)

### Data Tables

| Users        | Data Type                   | Constraints      |
| ------------ | --------------------------- | ---------------- |
| UserID       | INT UNSIGNED AUTO_INCREMENT | PRIMARY KEY      |
| FirstName    | VARCHAR(255)                |                  |
| LastName     | VARCHAR(255)                |                  |
| Email        | VARCHAR(255)                | UNIQUE, NOT NULL |
| Username     | VARCHAR(255)                | UNIQUE, NOT NULL |
| PasswordHash | VARCHAR(255)                | NOT NULL         |

| Friends      | Data Type                   | Constraints         |
|--------------| --------------------------- | ------------------- |
| FriendID     | INT UNSIGNED AUTO_INCREMENT | PRIMARY KEY         |
| UserID       | INT UNSIGNED                | FOREIGN KEY (Users) |
| FriendUserID | INT UNSIGNED                | FOREIGN KEY (Users) |
| Status       | Boolean                     | NOT NULL            |

| Groups      | Data Type                   | Constraints |
|-------------| --------------------------- | ----------- |
| GroupID     | INT UNSIGNED AUTO_INCREMENT | PRIMARY KEY |
| GroupName   | VARCHAR(255)                | NOT NULL    |
| DateCreated | DATE                        | NOT NULL    |

| Expenses    | Data Type                   | Constraints              |
|-------------| --------------------------- | ------------------------ |
| ExpenseID   | INT UNSIGNED AUTO_INCREMENT | PRIMARY KEY              |
| Description | TEXT                        | NOT NULL                 |
| Amount      | DECIMAL(10, 3)              | NOT NULL                 |
| Currency    | VARCHAR(3)                  | NOT NULL                 |
| Date        | DATE                        | NOT NULL                 |
| GroupID     | INT UNSIGNED                | FOREIGN KEY (Groups)     |
| CategoryID  | INT UNSIGNED                | FOREIGN KEY (Categories) |
| PayerID     | INT UNSIGNED                | FOREIGN KEY (Users)      |

| Balances   | Data Type                   | Constraints         |
|------------| --------------------------- | ------------------- |
| BalanceID  | INT UNSIGNED AUTO_INCREMENT | PRIMARY KEY         |
| NetAmount  | DECIMAL(10, 3)              | NOT NULL            |
| FromUserID | INT UNSIGNED                | FOREIGN KEY (Users) |
| ToUserID   | INT UNSIGNED                | FOREIGN KEY (Users) |

| Categories   | Data Type                   | Constraints     |
|--------------| --------------------------- | --------------- |
| CategoryID   | INT UNSIGNED AUTO_INCREMENT | PRIMARY KEY     |
| CategoryName | VARCHAR(255)                | UNIQUE NOT NULL |

| UserGroup   | Data Type    | Constraints                                                     |
| ----------- | ------------ | --------------------------------------------------------------- |
| UserGroupID | INT UNSIGNED | PRIMARY KEY                                                     |
| UserID      | INT UNSIGNED | FOREIGN KEY (Users), (PRIMARY KEY PART/ Composite primary key)  |
| GroupID     | INT UNSIGNED | FOREIGN KEY (Groups)  (PRIMARY KEY PART/ Composite primary key) |

| UserShare   | Data Type      | Constraints                                                       |
| ----------- | -------------- | ----------------------------------------------------------------- |
| UserShareID | INT UNSIGNED   | PRIMARY KEY                                                       |
| ExpenseID   | INT UNSIGNED   | FOREIGN KEY (Expenses), (PRIMARY KEY PART/ Composite primary key) |
| UserID      | INT UNSIGNED   | FOREIGN KEY (Users), (PRIMARY KEY PART/ Composite primary key)    |
| ShareAmount | DECIMAL(10, 3) | NOT NULL                                                          |