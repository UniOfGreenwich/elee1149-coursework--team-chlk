// ExpenseRepository.java
package com.fairshare.repository;

import com.fairshare.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

    List<Expense> findByGroupId(Integer groupId);

}
