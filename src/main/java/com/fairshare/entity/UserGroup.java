package com.fairshare.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "userGroup",schema = "fairdbo")
public class UserGroup {

    @EmbeddedId
    private UserGroupCompositeKey id;

    // Constructors
    public UserGroup() { }

    public UserGroup(UserGroupCompositeKey id) {
        this.id = id;
    }

    // Getters and setters
    public UserGroupCompositeKey getId() {
        return id;
    }

    public void setId(UserGroupCompositeKey id) {
        this.id = id;
    }
}
