package com.fairshare.repository;

import com.fairshare.entity.UserShare;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserShareRepository extends JpaRepository<UserShare, Long> {
}