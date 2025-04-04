// ExpenseRepository.java
package com.fairshare.repository;

import com.fairshare.entity.Expense;
import com.fairshare.entity.Group;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

    boolean existsByExpenseNameAndGroupId(String expenseName, Integer groupId);
    boolean existsByExpenseId(Expense expenseId);
    Optional<Expense> findByExpenseName(String expenseName);
    Integer expenseId(Integer expenseId);
    List<Expense> findByGroupId(Integer groupId);

}
