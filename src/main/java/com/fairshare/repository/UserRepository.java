package com.fairshare.repository;

import com.fairshare.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByGroupId(Integer groupId);

}
