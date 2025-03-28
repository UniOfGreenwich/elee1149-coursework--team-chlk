```mermaid
classDiagram
class Expense {
    +Integer expenseId
    +String expenseName
    +String description
    +Double amount
    +String currency
    +Date date
    +Integer categoryId
    +Integer groupId
    +Integer userId
    +String userName
    +List~UserShare~ userShares
    +getExpenseId()
    +setExpenseId(Integer expenseId)
    +getExpenseName()
    +setExpenseName(String expenseName)
    +getDescription()
    +setDescription(String description)
    +getAmount()
    +setAmount(Double amount)
    +getCurrency()
    +setCurrency(String currency)
    +getDate()
    +setDate(Date date)
    +getCategoryId()
    +setCategoryId(Integer categoryId)
    +getGroupId()
    +setGroupId(Integer groupId)
    +getUserId()
    +setUserId(Integer userId)
    +getUserName()
    +setUserName(String userName)
    +getUserShares()
    +setUserShares(List~UserShare~ userShares)
}
```

### ExpenseController
```mermaid
classDiagram
class ExpenseController {
    -ExpenseService expenseService
    +ExpenseController(ExpenseService expenseService)
    +addExpense(Expense expense, Integer payerId)
    +getAllExpenses(Integer groupId)
}
ExpenseController --> ExpenseService
```

### ExpenseRepository
```mermaid
classDiagram
class ExpenseRepository {
    +List~Expense~ findByGroupId(Integer groupId)
}
ExpenseRepository ..|> JpaRepository
```

### ExpenseService
```mermaid
classDiagram
class ExpenseService {
    -ExpenseRepository expenseRepository
    -UserShareRepository userShareRepository
    -BalanceService balanceService
    -UserRepository userRepository
    +addExpense(Expense expense, Integer payerId)
    +getExpensesByGroupId(Integer groupId)
    +getTotalExpensesByGroupId(Integer groupId)
}
ExpenseService --> ExpenseRepository
ExpenseService --> UserShareRepository
ExpenseService --> BalanceService
ExpenseService --> UserRepository
```