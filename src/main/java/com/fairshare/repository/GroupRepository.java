package com.fairshare.repository;

import com.fairshare.entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface GroupRepository extends JpaRepository<Group, Integer> {
    boolean existsByGroupName(String groupName);
    boolean existsByGroupId(Integer groupId);
    Optional<Group> findByGroupName(String groupName);

    Integer groupId(Integer groupId);
}
