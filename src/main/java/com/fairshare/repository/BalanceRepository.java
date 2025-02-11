package com.fairshare.repository;

import com.fairshare.entity.Balance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BalanceRepository extends JpaRepository<Balance, Long> {
    @Query("SELECT b FROM Balance b WHERE (b.user1Id = :user1 AND b.user2Id = :user2) OR (b.user1Id = :user2 AND b.user2Id = :user1)")
    Balance findByUsers(@Param("user1") String user1, @Param("user2") String user2);
}
