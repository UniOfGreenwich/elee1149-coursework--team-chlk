package com.fairshare.repository;

import com.fairshare.entity.Expense; // Import Expense entity
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

}
