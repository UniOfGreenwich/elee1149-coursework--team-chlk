package com.fairshare.repository;

import com.fairshare.entity.Balance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BalanceRepository extends JpaRepository<Balance, Long> {

    // New method to find balance by user1Id and user2Id
    Optional<Balance> findByUser1IdAndUser2Id(Integer user1Id, Integer user2Id);
}
