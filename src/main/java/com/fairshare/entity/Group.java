package com.fairshare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Group", schema = "fairdbo")
public class Group {
    @Id
    @Column(name = "group_id")
    private Integer groupId;

    @Column(name = "group_name")
    private String groupName;

    public Integer getId() {
        return groupId;
    }

    public void setId(Integer id) {
        this.groupId = id;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

}
