// ExpenseRepository.java
package com.fairshare.repository;

import com.fairshare.entity.Expense;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    @Query("SELECT e FROM Expense e JOIN UserExpense ue ON e.expenseId = ue.userExpenseId.expenseId WHERE ue.userExpenseId.userId = :userId ORDER BY e.date DESC")
    List<Expense> findRecentExpensesByUserId(@Param("userId") Integer userId, Pageable pageable);
}
