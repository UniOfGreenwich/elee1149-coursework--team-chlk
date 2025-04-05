package com.fairshare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Category", schema = "fairdbo")
public class Category {
    @Id
    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "category_name")
    private String categoryName;

    public Integer getId() {
        return categoryId;
    }

    public void setId(Integer id) {
        this.categoryId = id;
    }

    public String getCategoryId() {
        return categoryName;
    }

    public void setCategoryName(String groupName) {
        this.categoryName = groupName;
    }

}
