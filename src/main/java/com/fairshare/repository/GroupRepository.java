package com.fairshare.repository;

import com.fairshare.entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Integer> {
    Group findByGroupId(Integer groupId);
}
