package com.fairshare.repository;

import com.fairshare.entity.Friends;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendsRepository extends JpaRepository<Friends, Integer> {
    List<Friends> findByUserIdandStatus(Integer userId, Boolean status);
    List<Friends> findByFriendUserIdandStatus(Integer userId, Boolean status);
    boolean existsByUserIdAndFriendUserId(Integer userId, Integer friendUserId, Boolean status);


}



