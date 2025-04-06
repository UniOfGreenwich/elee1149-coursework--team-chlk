package com.fairshare.repository;

import com.fairshare.entity.Group;
import com.fairshare.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface GroupRepository extends JpaRepository<Group, Integer> {
    //boolean existsByGroupName(String groupName);
    boolean existsByGroupId(Integer groupId);
    Integer groupId(Integer groupId);
}
