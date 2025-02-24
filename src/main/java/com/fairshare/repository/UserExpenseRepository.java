package com.fairshare.repository;

import com.fairshare.entity.UserExpense;
import com.fairshare.entity.UserExpenseCompositeKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserExpenseRepository extends JpaRepository<UserExpense, UserExpenseCompositeKey> { // Using composite key as ID
    @Query("SELECT ue FROM UserExpense ue WHERE ue.id.expenseId = :expenseId AND ue.id.userId = :userId")
    UserExpense findByExpenseIdAndUserId(@Param("expenseId") Integer expenseId, @Param("userId") Integer userId);
}
