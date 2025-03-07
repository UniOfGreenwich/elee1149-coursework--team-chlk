package com.fairshare.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "groups", schema = "fairdbo")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer groupId;

    @Column(name = "groupname")
    private String groupName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_id")
    private User adminId;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "user_group",
            schema = "fairdbo",
            joinColumns = @JoinColumn(name = "group_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @JsonIgnore  // Important to prevent serialization loops
    private Set<User> users = new HashSet<>();

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }
    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public User getAdmin() {
        return adminId;
    }

    public void setAdmin(User adminId) {
        this.adminId = adminId;
    }

    public boolean isAdmin(User user) {
        return this.adminId != null && this.adminId.getUserId().equals(user.getUserId());
    }

    @JsonIgnore
    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
