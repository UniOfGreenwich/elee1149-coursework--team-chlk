package com.fairshare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.fairshare.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query("SELECT c.name FROM Category c WHERE c.id = :categoryId")
    String findCategoryNameById(@Param("categoryId") Integer categoryId);
}