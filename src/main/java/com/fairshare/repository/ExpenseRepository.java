package com.fairshare.repository;

import com.fairshare.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    Expense saveExpense(Expense expense);
}
